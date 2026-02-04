"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ApiInfiniteScroll } from "@/components/ApiInfiniteScroll.client";
import { ArrowDownAZ, TrendingUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAndSortedApis = useMemo(() => {
    // First filter by search query
    let filtered = apis;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = apis.filter((api) => {
        const titleMatch = api.frontmatter.title.toLowerCase().includes(query);
        const descMatch = api.frontmatter.description.toLowerCase().includes(query);
        const categoryMatch = api.frontmatter.category.toLowerCase().includes(query);
        return titleMatch || descMatch || categoryMatch;
      });
    }

    // Then sort the filtered results
    const sorted = [...filtered];
    
    if (sortBy === "popularity") {
      return sorted.sort((a, b) => {
        const scoreA = a.frontmatter.popularity_score ?? 50;
        const scoreB = b.frontmatter.popularity_score ?? 50;
        return scoreB - scoreA; // Descending order (highest first)
      });
    } else {
      return sorted.sort((a, b) => {
        return a.frontmatter.title.localeCompare(b.frontmatter.title);
      });
    }
  }, [apis, sortBy, searchQuery]);

  return (
    <section className="mt-12 space-y-4">
      <div className="flex flex-col gap-4 px-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">All APIs</h2>
          <div className="text-sm text-muted-foreground">
            {searchQuery.trim() ? (
              <>
                {filteredAndSortedApis.length} of {apis.length} APIs
              </>
            ) : (
              <>{apis.length} total</>
            )}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search APIs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          
          {/* Sort Buttons */}
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
      </div>
      
      {filteredAndSortedApis.length === 0 ? (
        <div className="rounded-lg border border-dashed p-12 text-center">
          <Search className="mx-auto h-10 w-10 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-semibold">No APIs found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try adjusting your search query or browse all categories
          </p>
        </div>
      ) : (
        <ApiInfiniteScroll apis={filteredAndSortedApis} itemsPerPage={6} />
      )}
    </section>
  );
}
