import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import yaml from "js-yaml";
import { unstable_cache } from "next/cache";
import {
  ApiFrontmatterSchema,
  type ApiFrontmatter,
  CategoryFrontmatterSchema,
  type CategoryFrontmatter,
} from "./schemas";
import { markdownToHtml } from "./markdown";

const CONTENT_DIR = path.join(process.cwd(), "content");
const APIS_DIR = path.join(CONTENT_DIR, "apis");
const CATEGORIES_DIR = path.join(CONTENT_DIR, "categories");
const TOP_LISTS_DIR = path.join(CONTENT_DIR, "top-lists");

export type ApiEntry = {
  slug: string;
  frontmatter: ApiFrontmatter;
  contentMarkdown: string;
  contentHtml: string;
  openApi?: {
    raw: unknown;
    title?: string;
    version?: string;
    servers?: Array<{ url: string; description?: string }>;
    operations?: Array<{
      id?: string;
      method: string;
      path: string;
      summary?: string;
      description?: string;
      tags?: string[];
    }>;
  };
};

export type CategoryEntry = {
  category: string;
  frontmatter: CategoryFrontmatter;
  contentMarkdown: string;
  contentHtml: string;
};

export type TopListEntry = {
  slug: string;
  frontmatter: CategoryFrontmatter;
  contentMarkdown: string;
  contentHtml: string;
};

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

const MARKDOWN_FILE = "page.md";
const OPENAPI_FILES = ["openapi.yaml", "openapi.yml", "openapi.json"];
const stripMd = (filename: string) => filename.replace(/\.md$/i, "");

export function hasOpenApiSpec(slug: string): boolean {
  const dir = path.join(APIS_DIR, slug);
  return OPENAPI_FILES.some((file) => fs.existsSync(path.join(dir, file)));
}

export const getAllApiSlugs = unstable_cache(
  async (): Promise<string[]> => {
    const entries = safeReadDir(APIS_DIR);
    return entries.filter((name) => {
      const full = path.join(APIS_DIR, name);
      return fs.existsSync(path.join(full, MARKDOWN_FILE));
    });
  },
  ["content:apis:slugs"],
  { tags: ["content", "apis"] },
);

function readOpenApiSpec(dir: string) {
  for (const file of OPENAPI_FILES) {
    const full = path.join(dir, file);
    if (!fs.existsSync(full)) continue;
    const raw = fs.readFileSync(full, "utf8");
    try {
      const parsed = file.endsWith(".json") ? JSON.parse(raw) : yaml.load(raw);
      if (!parsed || typeof parsed !== "object") continue;
      const title = (parsed as any).info?.title as string | undefined;
      const version = (parsed as any).info?.version as string | undefined;
      const servers = Array.isArray((parsed as any).servers)
        ? (parsed as any).servers.map((s: any) => ({
            url: String(s.url ?? ""),
            description: s.description ? String(s.description) : undefined,
          }))
        : undefined;
      const operations: Array<{
        id?: string;
        method: string;
        path: string;
        summary?: string;
        description?: string;
        tags?: string[];
      }> = [];
      const paths = (parsed as any).paths;
      if (paths && typeof paths === "object") {
        for (const [pathKey, methods] of Object.entries<any>(paths)) {
          if (!methods || typeof methods !== "object") continue;
          for (const [method, op] of Object.entries<any>(methods)) {
            const methodUpper = method.toUpperCase();
            if (!["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"].includes(methodUpper))
              continue;
            operations.push({
              id: op?.operationId,
              method: methodUpper,
              path: pathKey,
              summary: op?.summary,
              description: op?.description,
              tags: Array.isArray(op?.tags) ? op.tags : undefined,
            });
          }
        }
      }

      return {
        raw: parsed,
        title,
        version,
        servers,
        operations,
      };
    } catch {
      continue;
    }
  }
  return undefined;
}

export const getApiBySlug = unstable_cache(
  async (slug: string): Promise<ApiEntry | null> => {
    const dir = path.join(APIS_DIR, slug);
    const mdPath = path.join(dir, MARKDOWN_FILE);
    if (!fs.existsSync(mdPath)) return null;

    const raw = fs.readFileSync(mdPath, "utf8");
    const parsed = matter(raw);
    const frontmatter = ApiFrontmatterSchema.parse(parsed.data);
    const contentMarkdown = parsed.content.trim();
    const contentHtml = await markdownToHtml(contentMarkdown);
    const openApi = readOpenApiSpec(dir);

    return { slug, frontmatter, contentMarkdown, contentHtml, openApi };
  },
  ["content:apis:bySlug"],
  { tags: ["content", "apis"] },
);

export const getAllApis = unstable_cache(
  async (): Promise<Array<Omit<ApiEntry, "contentMarkdown" | "contentHtml">>> => {
    const slugs = await getAllApiSlugs();
    const apis = await Promise.all(slugs.map((slug) => getApiBySlug(slug)));
    return apis
      .filter((a): a is ApiEntry => Boolean(a))
      .map(({ slug, frontmatter }) => ({ slug, frontmatter }));
  },
  ["content:apis:all"],
  { tags: ["content", "apis"] },
);

export const getAllCategories = unstable_cache(
  async (): Promise<string[]> => {
    const apis = await getAllApis();
    const categories = [...new Set(apis.map(api => api.frontmatter.category))];
    return categories.sort();
  },
  ["content:categories:all"],
  { tags: ["content", "categories", "apis"] },
);

export const getCategoryBySlug = unstable_cache(
  async (category: string): Promise<CategoryEntry | null> => {
    const apis = await getAllApis();
    const categoryApis = apis.filter(api => api.frontmatter.category === category);
    
    if (categoryApis.length === 0) return null;

    // Get category metadata from the first API that has it defined
    const apiWithMeta = categoryApis.find(api => 
      api.frontmatter.category_title || api.frontmatter.category_description
    );

    const frontmatter: CategoryFrontmatter = {
      title: apiWithMeta?.frontmatter.category_title || 
             (category.charAt(0).toUpperCase() + category.slice(1)),
      primary_keyword: category,
      description: apiWithMeta?.frontmatter.category_description || 
                   `Browse ${categoryApis.length} APIs in the ${category} category`,
    };

    const contentMarkdown = ``;
    const contentHtml = ``;

    return { category, frontmatter, contentMarkdown, contentHtml };
  },
  ["content:categories:bySlug"],
  { tags: ["content", "categories", "apis"] },
);

export const getAllTopListSlugs = unstable_cache(
  async (): Promise<string[]> => {
    const files = safeReadDir(TOP_LISTS_DIR).filter((f) => f.endsWith(".md"));
    return files.map(stripMd);
  },
  ["content:topLists:all"],
  { tags: ["content", "top-lists"] },
);

export const getTopListBySlug = unstable_cache(
  async (slug: string): Promise<TopListEntry | null> => {
    const fullPath = path.join(TOP_LISTS_DIR, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const raw = fs.readFileSync(fullPath, "utf8");
    const parsed = matter(raw);
    const frontmatter = CategoryFrontmatterSchema.parse(parsed.data);
    const contentMarkdown = parsed.content.trim();
    const contentHtml = await markdownToHtml(contentMarkdown);

    return { slug, frontmatter, contentMarkdown, contentHtml };
  },
  ["content:topLists:bySlug"],
  { tags: ["content", "top-lists"] },
);


