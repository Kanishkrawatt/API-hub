import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const filePath = join(process.cwd(), "content", "apis", slug, "openapi.json");
    
    const fileContent = await readFile(filePath, "utf-8");
    const openApiSpec = JSON.parse(fileContent);

    return NextResponse.json(openApiSpec, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error reading OpenAPI spec:", error);
    return NextResponse.json(
      { error: "OpenAPI specification not found" },
      { status: 404 }
    );
  }
}
