import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllApiSlugs, getApiBySlug } from "@/lib/content/fs";
import { RedocStandalone } from "@/components/RedocStandalone.client";
import fs from "fs/promises";
import path from "path";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllApiSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getApiBySlug(slug);
  if (!entry) return {};

  const title = `${entry.frontmatter.title} API Reference`;
  const description = `Complete API reference documentation for ${entry.frontmatter.title}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/api-hub/${slug}/reference`,
    },
    openGraph: {
      title,
      description,
      url: `/api-hub/${slug}/reference`,
      type: "article",
    },
  };
}

export default async function ApiReferencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getApiBySlug(slug);

  if (!entry) {
    notFound();
  }

  // Load the OpenAPI spec
  const contentDir = path.join(process.cwd(), "content", "apis", slug);
  const possibleFiles = ["openapi.json", "openapi.yaml", "openapi.yml"];
  
  let spec: any;
  let specFound = false;

  for (const fileName of possibleFiles) {
    const specPath = path.join(contentDir, fileName);
    try {
      const specContent = await fs.readFile(specPath, "utf-8");
      if (fileName.endsWith(".json")) {
        spec = JSON.parse(specContent);
      } else {
        // For YAML files, we'll need to import yaml
        const yaml = await import("js-yaml");
        spec = yaml.load(specContent);
      }
      specFound = true;
      break;
    } catch (error) {
      // Try next file
      continue;
    }
  }

  if (!specFound) {
    notFound();
  }

  return <RedocStandalone spec={spec} slug={slug} title={entry.frontmatter.title} />;
}
