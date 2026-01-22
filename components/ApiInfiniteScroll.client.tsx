"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ApiItem = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    category: string;
    logo?: string;
  };
  colors: {
    gradient: string;
    badgeDark: string;
    badgeLight: string;
  };
  hasSpec: boolean;
};

type Props = {
  apis: ApiItem[];
  itemsPerPage?: number;
};

export function ApiInfiniteScroll({ apis, itemsPerPage = 20 }: Props) {
  const [state, setState] = useState({ 
    page: 1, 
    lastApis: apis, 
    lastItemsPerPage: itemsPerPage 
  });
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Reset page when apis or itemsPerPage changes (getDerivedStateFromProps pattern)
  if (state.lastApis !== apis || state.lastItemsPerPage !== itemsPerPage) {
    setState({ page: 1, lastApis: apis, lastItemsPerPage: itemsPerPage });
  }

  // Derive state from props and page
  const displayedItems = useMemo(() => {
    return apis.slice(0, state.page * itemsPerPage);
  }, [apis, state.page, itemsPerPage]);

  const hasMore = useMemo(() => {
    return displayedItems.length < apis.length;
  }, [displayedItems.length, apis.length]);

  const loadMore = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Simulate a small delay for smooth transition
    setTimeout(() => {
      setState((prev) => ({ ...prev, page: prev.page + 1 }));
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.5, rootMargin: "500px" }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader && hasMore) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, loadMore, isLoading]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((api) => (
          <div key={api.slug} className="group">
            <Card className="relative flex h-full flex-col overflow-hidden border-border/60 bg-gradient-to-br from-card to-muted transition-all hover:-translate-y-1 hover:shadow-lg">
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${api.colors.gradient} opacity-0 transition group-hover:opacity-100`}
              />
              <div className="absolute top-3 right-3 z-10">
                <Badge
                  variant="outline"
                  className={`border capitalize dark:${api.colors.badgeDark} ${api.colors.badgeLight}`}
                >
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
                <p className="line-clamp-3 text-muted-foreground leading-relaxed">
                  {api.frontmatter.description}
                </p>
                <div className="flex items-center justify-between gap-2 pt-2">
                  {api.hasSpec && (
                    <Link
                      href={`/api-hub/${api.slug}/reference`}
                      className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-muted"
                    >
                      API Reference
                    </Link>
                  )}
                  <Link
                    href={`/api-hub/${api.slug}`}
                    className="ml-auto inline-flex items-center rounded-md bg-muted px-3 py-1.5 text-[11px] font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-accent"
                  >
                    View details -&gt;
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Loader */}
      {hasMore && (
        <div ref={loaderRef} className="flex justify-center py-8 min-h-[100px]">
          {isLoading ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              <span className="text-sm">Loading more APIs...</span>
            </div>
          ) : (
            <div className="h-5" />
          )}
        </div>
      )}

      {!hasMore && displayedItems.length > 0 && (
        <div className="py-8 text-center text-sm text-muted-foreground">
          You have reached the end of the list
        </div>
      )}
    </>
  );
}
