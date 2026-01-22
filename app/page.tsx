import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/20 dark:bg-purple-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-blue-500/20 dark:bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-emerald-500/20 dark:bg-emerald-500/20 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="relative overflow-hidden rounded-b-3xl border-b border-border bg-gradient-to-br from-background via-muted to-background p-8 pt-14 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              SEO-first API Hub CMS powered by GitHub Markdown
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Each API lives as Markdown with strict frontmatter. Pages are statically generated
              with ISR, ship JSON-LD schema, and revalidate automatically from GitHub commits.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/api-hub">Browse APIs</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/api-hub/category/ai">AI category</Link>
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Structured CMS",
              desc: "Zod-validated frontmatter drives pricing, auth, schema, filters, and comparisons.",
              accent: "from-emerald-500/15 to-emerald-500/5",
              badge: "CMS",
            },
            {
              title: "SEO-first",
              desc: "Dynamic metadata, clean URLs, Breadcrumb + ItemList + WebAPI + FAQ JSON-LD, sitemap & robots.",
              accent: "from-blue-500/15 to-blue-500/5",
              badge: "SEO",
            },
            {
              title: "Production performance",
              desc: "Static generation with ISR plus webhook-driven revalidation for fresh content without slow builds.",
              accent: "from-amber-500/15 to-amber-500/5",
              badge: "Perf",
            },
          ].map((card) => (
            <Card
              key={card.title}
              className="group relative overflow-hidden border-border/60 bg-gradient-to-br from-card to-muted transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition group-hover:opacity-100`}
              />
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="uppercase tracking-wide">
                    {card.badge}
                  </Badge>
                  <div className="h-10 w-10 rounded-full border border-border/70 bg-muted text-center text-lg font-semibold leading-10 text-foreground shadow-inner">
                    •
                  </div>
                </div>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.desc}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </section>
      </Container>
    </main>
  );
}
