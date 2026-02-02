import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { Prose } from "@/components/Prose";
import { FaqAccordion } from "@/components/FaqAccordion.client";
import { getAllApiSlugs, getApiBySlug, getAllApis, hasOpenApiSpec } from "@/lib/content/fs";
import { jsonLdBreadcrumbs, jsonLdFaq, jsonLdWebApi } from "@/lib/seo/jsonld";
import { toSlug } from "@/lib/utils/slug";

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

  const title = entry.frontmatter.title;
  const description = entry.frontmatter.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/api-hub/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/api-hub/${slug}`,
      type: "article",
    },
  };
}

export default async function ApiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getApiBySlug(slug);
  if (!entry) notFound();

  const { frontmatter } = entry;
  const operations = entry.openApi?.operations ?? [];
  const servers = entry.openApi?.servers ?? [];

  // Check which alternatives exist in our database
  const allApis = await getAllApis();
  const apiSlugs = new Set(allApis.map(api => api.slug));
  const alternativesWithLinks = frontmatter.alternatives.map(alt => {
    const altSlug = toSlug(alt);
    return {
      name: alt,
      slug: altSlug,
      exists: apiSlugs.has(altSlug)
    };
  });

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
            { name: frontmatter.category, url: `/api-hub/category/${frontmatter.category}` },
            { name: frontmatter.title, url: `/api-hub/${slug}` },
          ])}
        />
        <JsonLd
          data={jsonLdWebApi({
            name: frontmatter.title,
            description: frontmatter.description,
            documentation: frontmatter.docs_url,
            providerName: frontmatter.product_name,
            category: frontmatter.category,
          })}
        />
        {frontmatter.faq.length ? <JsonLd data={jsonLdFaq(frontmatter.faq)} /> : null}

        <section className="rounded-b-3xl border-b border-border/60 bg-gradient-to-br from-background via-muted to-background p-8 pt-14 shadow-lg">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">
                <Link href="/api-hub" className="hover:text-foreground">
                  API Hub
                </Link>{" "}
                /{" "}
                <Link
                  href={`/api-hub/category/${frontmatter.category}`}
                  className="hover:text-foreground"
                >
                  {frontmatter.category}
                </Link>
              </div>
              <div className="mt-3 flex items-start gap-4">
                {frontmatter.logo && (
                  <Image
                    src={frontmatter.logo}
                    alt={`${frontmatter.product_name} logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg object-contain bg-white p-2"
                  />
                )}
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl font-semibold tracking-tight text-foreground">{frontmatter.title}</h1>
                  <p className="max-w-3xl text-muted-foreground">{frontmatter.description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2 backdrop-blur-sm">
                <span className="text-xs font-medium text-muted-foreground">Verified</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-foreground">
                    {frontmatter.last_verified_date}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {frontmatter.docs_url ? (
              <Button asChild>
                <a href={frontmatter.docs_url} target="_blank" rel="noreferrer">
                  Official Docs
                </a>
              </Button>
            ) : null}
            {hasOpenApiSpec(slug) && (
              <Button variant="outline" asChild>
                <Link href={`/api-hub/${slug}/reference`}>
                  API Reference
                </Link>
              </Button>
            )}
            {frontmatter.pricing_url ? (
              <Button variant="outline" asChild>
                <a href={frontmatter.pricing_url} target="_blank" rel="noreferrer">
                  Pricing
                </a>
              </Button>
            ) : null}
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="border-border/60 dark:bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-foreground">At a glance</CardTitle>
              <CardDescription className="text-muted-foreground">
                Essential information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <Badge variant="outline" className="border-border text-foreground capitalize">
                    {frontmatter.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <span className="text-sm text-muted-foreground">Authentication</span>
                  <Badge variant="outline" className="border-border text-foreground font-mono text-xs">
                    {frontmatter.auth_type}
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <span className="text-sm text-muted-foreground">Free tier</span>
                  <Badge
                    variant="outline"
                    className={frontmatter.pricing_free_tier
                      ? "border-green-600 dark:border-green-800 bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400"
                      : "border-red-600 dark:border-red-800 bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400"
                    }
                  >
                    {frontmatter.pricing_free_tier ? "Available" : "Not available"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                  <span className="font-semibold text-foreground">{frontmatter.pricing_starting_from}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                {frontmatter.docs_url && (
                  <a
                    href={frontmatter.docs_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold transition hover:bg-primary/90"
                  >
                    Official Documentation
                  </a>
                )}
                {hasOpenApiSpec(slug) && (
                  <Link
                    href={`/api-hub/${slug}/reference`}
                    className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    View API Reference
                  </Link>
                )}
                {frontmatter.pricing_url && (
                  <a
                    href={frontmatter.pricing_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
                  >
                    View Pricing
                  </a>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 border-border/60 dark:bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-foreground">About</CardTitle>
            </CardHeader>
            <CardContent>
              <Prose className="mt-2" html={entry.contentHtml} />
            </CardContent>
          </Card>
        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card className="border-border/60 dark:bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-foreground">Pricing</CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden rounded-sm mx-4 border border-border p-0 mt-2">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-muted-foreground">Free tier</td>
                    <td className="px-4 py-3 font-medium text-foreground">
                      {frontmatter.pricing_free_tier ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 text-muted-foreground">Starting from</td>
                    <td className="px-4 py-3 font-medium text-foreground">{frontmatter.pricing_starting_from}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">Notes</td>
                    <td className="px-4 py-3 text-foreground">{frontmatter.pricing_notes || "—"}</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
            <CardFooter className="bg-muted/30 px-4 py-3">
              <p className="text-xs text-muted-foreground">
                Last updated: {frontmatter.last_verified_date}.{" "}
                {frontmatter.pricing_url ? (
                  <>
                    Please refer to the{" "}
                    <a
                      href={frontmatter.pricing_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition"
                    >
                      official pricing page
                    </a>{" "}
                    as pricing may have changed.
                  </>
                ) : (
                  "Pricing may have changed."
                )}
              </p>
            </CardFooter>
          </Card>
          <Card className="border-border/60 dark:bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-foreground">Alternatives</CardTitle>
              <CardDescription className="text-muted-foreground">
                Similar APIs you might consider
              </CardDescription>
            </CardHeader>
            <CardContent>
              {alternativesWithLinks.length ? (
                <div className="space-y-2">
                  {alternativesWithLinks.map((alt) => (
                    <div key={alt.name} className="flex items-center justify-between rounded-lg bg-muted px-4 py-3">
                      <span className="text-sm font-medium text-foreground">{alt.name}</span>
                      {alt.exists ? (
                        <Link
                          href={`/api-hub/${alt.slug}`}
                          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                        >
                          View in API Hub →
                        </Link>
                      ) : frontmatter.docs_url ? (
                        <a
                          href={frontmatter.docs_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition"
                        >
                          See docs ↗
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">No alternatives listed</div>
              )}
            </CardContent>
          </Card>

        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card className="border-border/60 dark:bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-foreground">Authentication & Limits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Auth type</dt>
                  <dd className="font-medium text-foreground">{frontmatter.auth_type}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Rate limits</dt>
                  <dd className="font-medium text-foreground">
                    {frontmatter.rate_limits || (
                      <a
                        href={frontmatter.docs_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                      >
                        See docs
                      </a>
                    )}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Last verified</dt>
                  <dd className="font-medium text-foreground">{frontmatter.last_verified_date}</dd>
                </div>
              </dl>

              {frontmatter.auth_type === "api_key" && frontmatter.auth_setup_steps?.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Steps to get API key</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    {frontmatter.auth_setup_steps.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                          {index + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-border/60 dark:bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-foreground">FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              {frontmatter.faq.length ? (
                <FaqAccordion faqs={frontmatter.faq} />
              ) : (
                <div className="text-sm text-muted-foreground">No FAQs added yet.</div>
              )}
            </CardContent>
          </Card>
        </section>
      </Container>
    </main>
  );
}


