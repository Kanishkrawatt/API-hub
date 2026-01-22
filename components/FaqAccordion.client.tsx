"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 py-4 text-left hover:text-foreground/80 transition-colors"
          >
            <span className="font-semibold text-foreground leading-relaxed">
              {faq.q}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
