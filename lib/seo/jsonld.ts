type JsonLd = Record<string, unknown>;

export function jsonLdBreadcrumbs(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function jsonLdFaq(faq: Array<{ q: string; a: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function jsonLdItemList(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function jsonLdWebApi(params: {
  name: string;
  description: string;
  documentation: string;
  providerName?: string;
  category?: string;
}): JsonLd {
  const { name, description, documentation, providerName, category } = params;

  return {
    "@context": "https://schema.org",
    "@type": "WebAPI",
    name,
    description,
    documentation,
    ...(providerName
      ? {
          provider: { "@type": "Organization", name: providerName },
        }
      : {}),
    ...(category ? { category } : {}),
  };
}


