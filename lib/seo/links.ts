export function apiUrl(slug: string) {
  return `/api-explorer/${slug}`;
}

export function categoryUrl(category: string) {
  return `/api-explorer/category/${category}`;
}

export function topApisUrl(category: string, x: number) {
  return `/api-explorer/${category}/top-${x}-apis`;
}


