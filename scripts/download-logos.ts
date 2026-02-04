import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

const APIS_DIR = path.join(process.cwd(), "content", "apis");
const LOGOS_DIR = path.join(process.cwd(), "public", "logos");

// Create logos directory if it doesn't exist
if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

async function downloadImage(url: string, filepath: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    console.log(`✓ Downloaded: ${path.basename(filepath)}`);
  } catch (error) {
    console.error(`✗ Failed to download ${url}:`, error);
    throw error;
  }
}

function getFileExtension(url: string): string {
  // Check URL for explicit extension
  const urlMatch = url.match(/\.(png|jpg|jpeg|svg|webp|avif)(\?|$)/i);
  if (urlMatch) {
    return urlMatch[1].toLowerCase();
  }
  
  // Default to png for services like img.logo.dev
  return "png";
}

async function processMarkdownFile(apiSlug: string, filePath: string): Promise<void> {
  const content = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content: markdownContent } = matter(content);

  // Skip if no logo URL
  if (!frontmatter.logo || typeof frontmatter.logo !== "string") {
    console.log(`⊘ Skipping ${apiSlug}: No logo URL found`);
    return;
  }

  // Skip if already using local path
  if (frontmatter.logo.startsWith("/logos/")) {
    console.log(`⊘ Skipping ${apiSlug}: Already using local logo`);
    return;
  }

  const logoUrl = frontmatter.logo;
  const extension = getFileExtension(logoUrl);
  const logoFileName = `${apiSlug}.${extension}`;
  const logoFilePath = path.join(LOGOS_DIR, logoFileName);

  console.log(`\nProcessing ${apiSlug}...`);
  console.log(`  URL: ${logoUrl}`);

  // Download the logo
  await downloadImage(logoUrl, logoFilePath);

  // Update the markdown file
  const newLogoPath = `/api-explorer/logos/${logoFileName}`;
  const updatedFrontmatter = { ...frontmatter, logo: newLogoPath };
  const updatedContent = matter.stringify(markdownContent, updatedFrontmatter);
  
  fs.writeFileSync(filePath, updatedContent);
  console.log(`✓ Updated markdown: ${apiSlug}/page.md`);
}

async function main() {
  console.log("🚀 Starting logo download process...\n");

  const apiDirs = fs.readdirSync(APIS_DIR).filter((dir) => {
    const fullPath = path.join(APIS_DIR, dir);
    return fs.statSync(fullPath).isDirectory();
  });

  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;

  for (const apiSlug of apiDirs) {
    const markdownPath = path.join(APIS_DIR, apiSlug, "page.md");
    
    if (!fs.existsSync(markdownPath)) {
      console.log(`⊘ Skipping ${apiSlug}: No page.md found`);
      skipCount++;
      continue;
    }

    try {
      await processMarkdownFile(apiSlug, markdownPath);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to process ${apiSlug}:`, error);
      failCount++;
    }
  }

  console.log("\n" + "=".repeat(50));
  console.log("📊 Summary:");
  console.log(`  ✓ Successfully processed: ${successCount}`);
  console.log(`  ✗ Failed: ${failCount}`);
  console.log(`  ⊘ Skipped: ${skipCount}`);
  console.log("=".repeat(50));
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
