import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "Missing REVALIDATE_SECRET env var" },
      { status: 500 },
    );
  }

  const url = new URL(req.url);
  const provided = req.headers.get("x-revalidate-secret") ?? url.searchParams.get("secret");
  if (provided !== secret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as
    | null
    | { paths?: string[]; tags?: string[] };

  const paths = body?.paths ?? ["/api-hub"];
  const tags = body?.tags ?? ["content"];

  for (const t of tags) revalidateTag(t, "default");
  for (const p of paths) revalidatePath(p);

  return NextResponse.json({ ok: true, revalidated: { paths, tags } });
}


