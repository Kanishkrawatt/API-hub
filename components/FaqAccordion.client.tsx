"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
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
