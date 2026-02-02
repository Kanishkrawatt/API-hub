"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Category {
  slug: string;
  title: string;
  description?: string;
  colors: { gradient: string; badgeDark: string; badgeLight: string };
}

interface CategoryCarouselProps {
  categories: Category[];
}

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    const newScrollLeft =
      scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    setTimeout(checkScrollability, 300);
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 h-10 w-10 rounded-full border-border bg-background/90 backdrop-blur-sm shadow-lg hover:bg-muted"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Button>
      )}
      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 h-10 w-10 rounded-full border-border bg-background/90 backdrop-blur-sm shadow-lg hover:bg-muted"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Button>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group flex-shrink-0 w-[340px] snap-start"
            >
              <Card className="relative mt-2 flex h-full flex-col overflow-hidden border-border/60 bg-gradient-to-br from-card to-muted transition hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.colors.gradient} opacity-0 transition group-hover:opacity-100`}
                />
                <CardHeader className="relative space-y-2">
                  <CardTitle className="text-foreground">{c.title}</CardTitle>
                  {c.description ? (
                    <CardDescription>{c.description}</CardDescription>
                  ) : null}
                </CardHeader>
                {/* <CardContent className="relative mt-auto flex items-center justify-between text-xs text-muted-foreground pb-5">
                  <span>Category page</span>
                  <span className="text-foreground">→</span>
                </CardContent> */}
              </Card>
            </Link>
        ))}
      </div>

      {/* Hide scrollbar globally for this component */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
