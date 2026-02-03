import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { getAllApis, getCategoryBySlug } from "@/lib/content/fs";
import { jsonLdBreadcrumbs, jsonLdItemList } from "@/lib/seo/jsonld";

export const revalidate = 3600;

function parseX(x: string) {
  const n = Number(x);
  if (!Number.isFinite(n)) return null;
  if (n < 1 || n > 100) return null;
  return Math.floor(n);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; x: string }>;
}): Promise<Metadata> {
  const { category, x } = await params;
  const count = parseX(x);
  if (!count) return {};

  const cat = await getCategoryBySlug(category);
  const title = `Top ${count} ${cat?.frontmatter.title ?? category} APIs`;
  const description = `Compare the top ${count} most popular APIs in ${cat?.frontmatter.title ?? category} ranked by popularity score, with pricing, auth type, and links to docs.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/api-hub/${category}/top-${count}-apis`,
    },
  };
}

export default async function TopApisPage({
  params,
}: {
  params: Promise<{ category: string; x: string }>;
}) {
  const { category, x } = await params;
  const count = parseX(x);
  if (!count) notFound();

  const cat = await getCategoryBySlug(category);
  if (!cat) notFound();

  const all = await getAllApis();
  const apis = all
    .filter((a) => a.frontmatter.category === category)
    .sort((a, b) => {
      const scoreA = a.frontmatter.popularity_score ?? 50;
      const scoreB = b.frontmatter.popularity_score ?? 50;
      return scoreB - scoreA; // Descending order (highest first)
    })
    .slice(0, count);

  const title = `Top ${count} ${cat.frontmatter.title || category} APIs`;

  return (
    <main className="py-10">
      <Container>
        <JsonLd
          data={jsonLdBreadcrumbs([
            { name: "API Hub", url: "/api-hub" },
            { name: cat.frontmatter.title || category, url: `/api-hub/category/${category}` },
            { name: `Top ${count} APIs`, url: `/api-hub/${category}/top-${count}-apis` },
          ])}
        />
        <JsonLd
          data={jsonLdItemList(
            apis.map((a) => ({ name: a.frontmatter.title, url: `/api-hub/${a.slug}` })),
          )}
        />

        <div className="flex flex-col gap-2">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">
              API Hub
            </Link>{" "}
            /{" "}
            <Link
              href={`/category/${category}`}
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              {cat.frontmatter.title || category}
            </Link>{" "}
            / <span>Top {count}</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">
            Ranked by popularity score. A comparison view generated from structured frontmatter (pricing, auth, docs links).
          </p>
        </div>

        <section className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">API</th>
                  <th className="px-4 py-3">Free tier</th>
                  <th className="px-4 py-3">Starting from</th>
                  <th className="px-4 py-3">Auth</th>
                  <th className="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody>
                {apis.map((a, index) => (
                  <tr key={a.slug} className="border-t border-zinc-200 dark:border-zinc-800">
                    <td className="px-4 py-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/${a.slug}`}
                        className="font-medium hover:underline"
                      >
                        {a.frontmatter.title}
                      </Link>
                      <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                        {a.frontmatter.description}
                      </div>
                    </td>
                    <td className="px-4 py-3">{a.frontmatter.pricing_free_tier ? "Yes" : "No"}</td>
                    <td className="px-4 py-3">{a.frontmatter.pricing_starting_from}</td>
                    <td className="px-4 py-3">{a.frontmatter.auth_type}</td>
                    <td className="px-4 py-3">
                      <Link href={`/${a.slug}`} className="hover:underline">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
                {!apis.length ? (
                  <tr>
                    <td className="px-4 py-8 text-sm text-zinc-600 dark:text-zinc-300" colSpan={6}>
                      No APIs found in this category.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>
      </Container>
    </main>
  );
}


