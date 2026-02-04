import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/Container";
import { getAllApis, getAllCategories, getCategoryBySlug, hasOpenApiSpec } from "@/lib/content/fs";
import { CategoryCarousel } from "@/components/CategoryCarousel.client";
import { ApiList } from "@/components/ApiList.client";

export const revalidate = 3600;

export default async function ApiHubIndexPage() {
  const [apis, categories] = await Promise.all([getAllApis(), getAllCategories()]);
  const categoriesWithTitles = await Promise.all(
    categories.map(async (c) => {
      const entry = await getCategoryBySlug(c);
      return {
        slug: c,
        title: entry?.frontmatter.title ?? c,
        description: entry?.frontmatter.description ?? "",
        colors: {
          gradient: entry?.frontmatter.gradient ?? "from-zinc-500/15 to-zinc-500/5",
          badgeDark: entry?.frontmatter.badge_dark ?? "bg-zinc-800 text-zinc-100 border-zinc-700",
          badgeLight: entry?.frontmatter.badge_light ?? "bg-zinc-200 text-zinc-700 border-zinc-400",
        },
      };
    }),
  );

  // Prepare APIs with colors and spec info for client component
  const apisWithMetadata = await Promise.all(
    apis.map(async (api) => {
      const categoryEntry = await getCategoryBySlug(api.frontmatter.category);
      return {
        slug: api.slug,
        frontmatter: {
          title: api.frontmatter.title,
          description: api.frontmatter.description,
          category: api.frontmatter.category,
          logo: api.frontmatter.logo,
          popularity_score: api.frontmatter.popularity_score,
        },
        colors: {
          gradient: categoryEntry?.frontmatter.gradient ?? "from-zinc-500/15 to-zinc-500/5",
          badgeDark: categoryEntry?.frontmatter.badge_dark ?? "bg-zinc-800 text-zinc-100 border-zinc-700",
          badgeLight: categoryEntry?.frontmatter.badge_light ?? "bg-zinc-200 text-zinc-700 border-zinc-400",
        },
        hasSpec: hasOpenApiSpec(api.slug),
      };
    })
  );

  return (
    <main className="relative overflow-hidden pb-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/20 dark:bg-purple-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-blue-500/20 dark:bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-emerald-500/20 dark:bg-emerald-500/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <section className="rounded-b-3xl border-b border-border/60 bg-gradient-to-br from-background via-muted to-background p-8 pt-14 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              API Explorer
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Discover APIs by category</h1>
            <p className="max-w-3xl text-muted-foreground">
              Explore a curated directory of widely used APIs across data, AI, payments, messaging, and developer tools. Get essential details like authentication methods, pricing, free tiers, use cases, and direct links to official documentation, all in one place.</p>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-semibold text-foreground">Categories</h2>
            <p className="text-sm text-muted-foreground">Scroll to explore categories.</p>
          </div>
          <CategoryCarousel categories={categoriesWithTitles} />
        </section>

        <ApiList apis={apisWithMetadata} />
      </Container>
    </main>
  );
}


