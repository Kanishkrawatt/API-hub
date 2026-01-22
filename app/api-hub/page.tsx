import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/Container";
import { getAllApis, getAllCategories, getCategoryBySlug, hasOpenApiSpec } from "@/lib/content/fs";
import { CategoryCarousel } from "@/components/CategoryCarousel.client";
import { ApiInfiniteScroll } from "@/components/ApiInfiniteScroll.client";

export const revalidate = 3600;

const categoryColors: Record<string, { gradient: string; badgeDark: string; badgeLight: string }> = {
  ai: { 
    gradient: "from-purple-500/15 to-purple-500/5", 
    badgeDark: "bg-purple-950/50 text-purple-400 border-purple-800/30",
    badgeLight: "bg-purple-100 text-purple-700 border-purple-300"
  },
  payments: { 
    gradient: "from-emerald-500/15 to-emerald-500/5", 
    badgeDark: "bg-emerald-950/50 text-emerald-400 border-emerald-800/30",
    badgeLight: "bg-emerald-100 text-emerald-700 border-emerald-300"
  },
  communication: { 
    gradient: "from-blue-500/15 to-blue-500/5", 
    badgeDark: "bg-blue-950/50 text-blue-400 border-blue-800/30",
    badgeLight: "bg-blue-100 text-blue-700 border-blue-300"
  },
  data: { 
    gradient: "from-orange-500/15 to-orange-500/5", 
    badgeDark: "bg-orange-950/50 text-orange-400 border-orange-800/30",
    badgeLight: "bg-orange-100 text-orange-700 border-orange-300"
  },
  auth: { 
    gradient: "from-cyan-500/15 to-cyan-500/5", 
    badgeDark: "bg-cyan-950/50 text-cyan-400 border-cyan-800/30",
    badgeLight: "bg-cyan-100 text-cyan-700 border-cyan-300"
  },
};

const getCategoryColor = (category: string) => {
  return categoryColors[category] || { 
    gradient: "from-zinc-500/15 to-zinc-500/5", 
    badgeDark: "bg-zinc-800 text-zinc-100 border-zinc-700",
    badgeLight: "bg-zinc-200 text-zinc-700 border-zinc-400"
  };
};

export default async function ApiHubIndexPage() {
  const [apis, categories] = await Promise.all([getAllApis(), getAllCategories()]);
  const categoriesWithTitles = await Promise.all(
    categories.map(async (c) => {
      const entry = await getCategoryBySlug(c);
      return {
        slug: c,
        title: entry?.frontmatter.title ?? c,
        description: entry?.frontmatter.description ?? "",
        colors: getCategoryColor(c),
      };
    }),
  );

  // Prepare APIs with colors and spec info for client component
  const apisWithMetadata = apis.map((api) => ({
    slug: api.slug,
    frontmatter: {
      title: api.frontmatter.title,
      description: api.frontmatter.description,
      category: api.frontmatter.category,
      logo: api.frontmatter.logo,
    },
    colors: getCategoryColor(api.frontmatter.category),
    hasSpec: hasOpenApiSpec(api.slug),
  }));

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
              API Hub
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Discover APIs by category</h1>
            <p className="max-w-3xl text-muted-foreground">
              Markdown-powered, SEO-first API discovery. Categories, comparison pages, and structured
              frontmatter for pricing, auth, and docs links.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 text-sm text-muted-foreground">
              <Badge variant="secondary">
                {categories.length} categories
              </Badge>
              <Badge variant="secondary">
                {apis.length} APIs
              </Badge>
              <Badge variant="secondary">
                ISR + JSON-LD
              </Badge>
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-semibold text-foreground">Categories</h2>
            <p className="text-sm text-muted-foreground">Scroll to explore categories.</p>
          </div>
          <CategoryCarousel categories={categoriesWithTitles} />
        </section>

        <section className="mt-12 space-y-4">
          <div className="flex items-end justify-between gap-3 px-2">
            <div>
              <h2 className="text-lg font-semibold text-foreground">All APIs</h2>
              <div className="text-sm text-muted-foreground">{apis.length} total</div>
            </div>
            <Badge variant="secondary">
              Sorted A-Z
            </Badge>
          </div>
          <ApiInfiniteScroll apis={apisWithMetadata} itemsPerPage={6} />
        </section>
      </Container>
    </main>
  );
}


