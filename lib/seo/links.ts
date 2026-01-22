export function apiUrl(slug: string) {
  return `/api-hub/${slug}`;
}

export function categoryUrl(category: string) {
  return `/api-hub/category/${category}`;
}

export function topApisUrl(category: string, x: number) {
  return `/api-hub/${category}/top-${x}-apis`;
}


