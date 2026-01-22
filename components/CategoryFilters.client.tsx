"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function setParam(url: URL, key: string, value: string | null) {
  if (!value) url.searchParams.delete(key);
  else url.searchParams.set(key, value);
}

export function CategoryFiltersClient() {
  const sp = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const freeTier = sp.get("free") ?? "";

  return (
    <div className="flex flex-wrap gap-3">
      <label className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Free tier</span>
        <select
          className="rounded-lg border border-border/70 bg-muted px-3 py-2 text-sm text-foreground"
          value={freeTier}
          onChange={(e) => {
            const url = new URL(window.location.origin + pathname);
            url.search = sp.toString();
            setParam(url, "free", e.target.value || null);
            router.push(url.pathname + url.search);
          }}
        >
          <option value="">Any</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </label>
    </div>
  );
}


