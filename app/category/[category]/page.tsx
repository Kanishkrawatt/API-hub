import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/Container";
import { CategoryFiltersClient } from "@/components/CategoryFilters.client";
import { JsonLd } from "@/components/JsonLd";
import { getAllApis, getAllCategories, getCategoryBySlug, hasOpenApiSpec } from "@/lib/content/fs";
import { jsonLdBreadcrumbs, jsonLdItemList } from "@/lib/seo/jsonld";
import Image from "next/image";


export const revalidate = 3600;

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const entry = await getCategoryBySlug(category);
  if (!entry) return {};

  const title = entry.frontmatter.title || category;
  const description =
    entry.frontmatter.description || `Discover ${category} APIs with structured metadata.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/api-hub/category/${category}`,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { category } = await params;
  const sp = await searchParams;

  const entry = await getCategoryBySlug(category);
  if (!entry) notFound();

  const all = await getAllApis();
  let apis = all.filter((a) => a.frontmatter.category === category);

  const free = typeof sp.free === "string" ? sp.free : "";

  if (free === "1") apis = apis.filter((a) => a.frontmatter.pricing_free_tier);
  if (free === "0") apis = apis.filter((a) => !a.frontmatter.pricing_free_tier);

  // Get category colors from metadata
  const categoryColors = {
    gradient: entry.frontmatter.gradient ?? "from-zinc-500/15 to-zinc-500/5",
    badgeDark: entry.frontmatter.badge_dark ?? "bg-zinc-800 text-zinc-100 border-zinc-700",
    badgeLight: entry.frontmatter.badge_light ?? "bg-zinc-200 text-zinc-700 border-zinc-400",
  };

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/20 dark:bg-purple-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-blue-500/20 dark:bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-emerald-500/20 dark:bg-emerald-500/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <JsonLd
          data={jsonLdBreadcrumbs([
            { name: "API Hub", url: "/api-hub" },
            { name: entry.frontmatter.title || category, url: `/api-hub/category/${category}` },
          ])}
        />
        <JsonLd
          data={jsonLdItemList(
            apis.map((a) => ({ name: a.frontmatter.title, url: `/api-hub/${a.slug}` })),
          )}
        />

        <section className="rounded-b-3xl border-b border-border/60 bg-gradient-to-br from-background via-muted to-background p-8 pt-14 shadow-lg backdrop-blur-sm">
          <div className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              API Hub
            </Link>{" "}
            / <span>{entry.frontmatter.title || category}</span>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              {entry.frontmatter.title || category}
            </h1>
            {entry.frontmatter.description ? (
              <p className="max-w-3xl text-muted-foreground">{entry.frontmatter.description}</p>
            ) : null}
            <div className="flex flex-wrap gap-3 text-sm">
              <Badge variant="secondary">
                {apis.length} APIs
              </Badge>
              <Badge variant="secondary">
                Filters: free tier
              </Badge>
            </div>
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-foreground">APIs</h2>
              <div className="mt-1 text-sm text-muted-foreground">
                {apis.length} results
              </div>
            </div>
            <CategoryFiltersClient />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apis.map((api) => {
              return (
                <div key={api.slug} className="group">
                  <Card className="relative flex h-full flex-col overflow-hidden border-border/60 bg-gradient-to-br from-card to-muted transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${categoryColors.gradient} opacity-0 transition group-hover:opacity-100`} />
                    <div className="absolute top-3 right-3 z-10">
                      <Badge variant="outline" className={`border capitalize dark:${categoryColors.badgeDark} ${categoryColors.badgeLight}`}>
                        {api.frontmatter.category}
                      </Badge>
                    </div>
                    <CardHeader className="relative pb-2 pr-24 space-y-2">
                      <div className="flex items-center gap-3">
                        {api.frontmatter.logo && (
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-2">
                            <Image
                              src={api.frontmatter.logo}
                              alt={`${api.frontmatter.title} logo`}
                              width={40}
                              height={40}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        )}
                        <CardTitle className="text-foreground">{api.frontmatter.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative flex-1 flex flex-col justify-between space-y-3 text-sm pb-5">
                      <p className="line-clamp-3 text-muted-foreground leading-relaxed">{api.frontmatter.description}</p>
                      <div className="flex items-center justify-between gap-2 pt-2">
                        {hasOpenApiSpec(api.slug) && (
                          <Link
                            href={`/${api.slug}/reference`}
                            className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
                          >
                            API Reference
                          </Link>
                        )}
                        <Link
                          href={`/${api.slug}`}
                          className="ml-auto inline-flex items-center rounded-md bg-muted px-3 py-1.5 text-[11px] font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-accent"
                        >
                          View details -&gt;
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <Card className="border-border/60 bg-gradient-to-br from-card to-muted">
            <CardHeader>
              <CardTitle className="text-foreground">Top pages</CardTitle>
              <CardDescription className="text-muted-foreground">
                Comparison pages built from the same structured API metadata.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Link
                href={`/${category}/top-5-apis`}
                className="rounded-full border border-border/70 px-4 py-2 text-sm text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
              >
                Top 5 APIs
              </Link>
              <Link
                href={`/${category}/top-10-apis`}
                className="rounded-full border border-border/70 px-4 py-2 text-sm text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
              >
                Top 10 APIs
              </Link>
            </CardContent>
          </Card>
        </section>
      </Container>
    </main>
  );
}


