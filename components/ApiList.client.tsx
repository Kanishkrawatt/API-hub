"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ApiInfiniteScroll } from "@/components/ApiInfiniteScroll.client";
import { ArrowDownAZ, TrendingUp } from "lucide-react";

type ApiItem = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    category: string;
    logo?: string;
    popularity_score?: number;
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
};

type SortType = "popularity" | "alphabetical";

export function ApiList({ apis }: Props) {
  const [sortBy, setSortBy] = useState<SortType>("popularity");

  const sortedApis = useMemo(() => {
    const apisCopy = [...apis];
    
    if (sortBy === "popularity") {
      return apisCopy.sort((a, b) => {
        const scoreA = a.frontmatter.popularity_score ?? 50;
        const scoreB = b.frontmatter.popularity_score ?? 50;
        return scoreB - scoreA; // Descending order (highest first)
      });
    } else {
      return apisCopy.sort((a, b) => {
        return a.frontmatter.title.localeCompare(b.frontmatter.title);
      });
    }
  }, [apis, sortBy]);

  return (
    <section className="mt-12 space-y-4">
      <div className="flex items-end justify-between gap-3 px-2">
        <div>
          <h2 className="text-lg font-semibold text-foreground">All APIs</h2>
          <div className="text-sm text-muted-foreground">{apis.length} total</div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={sortBy === "popularity" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("popularity")}
            className="gap-1.5"
          >
            <TrendingUp className="h-3.5 w-3.5" />
            Popularity
          </Button>
          <Button
            variant={sortBy === "alphabetical" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("alphabetical")}
            className="gap-1.5"
          >
            <ArrowDownAZ className="h-3.5 w-3.5" />
            A-Z
          </Button>
        </div>
      </div>
      <ApiInfiniteScroll apis={sortedApis} itemsPerPage={6} />
    </section>
  );
}
