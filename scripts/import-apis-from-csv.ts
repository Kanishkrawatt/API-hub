import fs from "node:fs";
import path from "node:path";
import Papa from "papaparse";
import { ApiFrontmatterSchema } from "@/lib/content/schemas";
import { toSlug } from "@/lib/utils/slug";

/**
 * CSV -> Markdown generator for `/content/apis/*.md`
 *
 * Usage:
 *   npm run import:apis:csv -- ./data/apis.csv
 *
 * Expected columns (matches frontmatter fields):
 * - title
 * - product_name
 * - category
 * - primary_keyword
 * - secondary_keywords (comma-separated)
 * - description
 * - pricing_free_tier (true/false/1/0)
 * - pricing_starting_from
 * - pricing_notes
 * - auth_type
 * - rate_limits
 * - docs_url
 * - pricing_url
 * - alternatives (comma-separated)
 * - last_verified_date
 */

function parseBool(v: unknown): boolean {
  if (typeof v === "boolean") return v;
  if (typeof v !== "string") return false;
  const s = v.trim().toLowerCase();
  return s === "true" || s === "1" || s === "yes";
}

function splitList(v: unknown): string[] {
  if (typeof v !== "string") return [];
  return v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function toFrontmatter(row: Record<string, unknown>) {
  const frontmatter = {
    title: String(row.title ?? "").trim(),
    product_name: String(row.product_name ?? "").trim(),
    category: String(row.category ?? "").trim(),
    primary_keyword: String(row.primary_keyword ?? "").trim(),
    secondary_keywords: splitList(row.secondary_keywords),
    description: String(row.description ?? "").trim(),
    pricing_free_tier: parseBool(row.pricing_free_tier),
    pricing_starting_from: String(row.pricing_starting_from ?? "").trim(),
    pricing_notes: String(row.pricing_notes ?? "").trim(),
    auth_type: String(row.auth_type ?? "").trim(),
    rate_limits: String(row.rate_limits ?? "").trim(),
    docs_url: String(row.docs_url ?? "").trim(),
    pricing_url: String(row.pricing_url ?? "").trim(),
    alternatives: splitList(row.alternatives),
    last_verified_date: String(row.last_verified_date ?? "").trim(),
    faq: [],
  };

  // Validate and coerce using Zod
  return ApiFrontmatterSchema.parse(frontmatter);
}

function toYamlList(key: string, items: string[]) {
  if (!items.length) return `${key}: []\n`;
  return `${key}:\n${items.map((i) => `  - ${JSON.stringify(i)}`).join("\n")}\n`;
}

function stringifyFrontmatter(frontmatter: Record<string, any>) {
  return [
    "---",
    `title: ${JSON.stringify(frontmatter.title)}`,
    `product_name: ${JSON.stringify(frontmatter.product_name)}`,
    `category: ${JSON.stringify(frontmatter.category)}`,
    `primary_keyword: ${JSON.stringify(frontmatter.primary_keyword)}`,
    toYamlList("secondary_keywords", frontmatter.secondary_keywords ?? []),
    `description: ${JSON.stringify(frontmatter.description)}`,
    `pricing_free_tier: ${frontmatter.pricing_free_tier ? "true" : "false"}`,
    `pricing_starting_from: ${JSON.stringify(frontmatter.pricing_starting_from)}`,
    `pricing_notes: ${JSON.stringify(frontmatter.pricing_notes ?? "")}`,
    `auth_type: ${JSON.stringify(frontmatter.auth_type)}`,
    `rate_limits: ${JSON.stringify(frontmatter.rate_limits ?? "")}`,
    `docs_url: ${JSON.stringify(frontmatter.docs_url)}`,
    `pricing_url: ${JSON.stringify(frontmatter.pricing_url ?? "")}`,
    toYamlList("alternatives", frontmatter.alternatives ?? []),
    `last_verified_date: ${JSON.stringify(frontmatter.last_verified_date)}`,
    "---",
  ]
    .flatMap((l) => String(l).split("\n").filter((x) => x.length || l === "---"))
    .join("\n");
}

async function main() {
  const csvPath = process.argv[2];
  if (!csvPath) {
    console.error("Missing CSV path. Example: npm run import:apis:csv -- ./data/apis.csv");
    process.exit(1);
  }

  const abs = path.isAbsolute(csvPath) ? csvPath : path.join(process.cwd(), csvPath);
  const raw = fs.readFileSync(abs, "utf8");
  const parsed = Papa.parse<Record<string, unknown>>(raw, { header: true, skipEmptyLines: true });

  if (parsed.errors?.length) {
    console.error("CSV parse errors:", parsed.errors);
    process.exit(1);
  }

  const rows = parsed.data ?? [];
  const outDir = path.join(process.cwd(), "content", "apis");
  fs.mkdirSync(outDir, { recursive: true });

  let written = 0;
  for (const row of rows) {
    const fm = toFrontmatter(row);
    const slug = toSlug(fm.product_name || fm.title);
    const md = `${stringifyFrontmatter(fm)}\n\n## About the API\n\n${fm.description}\n`;
    fs.writeFileSync(path.join(outDir, `${slug}.md`), md, "utf8");
    written++;
  }

  console.log(`Wrote ${written} API markdown files to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


