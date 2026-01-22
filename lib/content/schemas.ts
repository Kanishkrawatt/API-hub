import { z } from "zod";

export const ApiAuthTypeSchema = z.enum([
  "api_key",
  "oauth2",
  "basic",
  "bearer",
  "session_cookie",
  "none",
]);

export const FaqItemSchema = z.object({
  q: z.string().min(1),
  a: z.string().min(1),
});

export const ApiFrontmatterSchema = z.object({
  title: z.string().min(1),
  product_name: z.string().min(1),
  logo: z.string().optional().default(""),
  category: z.string().min(1),
  category_title: z.string().optional().default(""),
  category_description: z.string().optional().default(""),
  primary_keyword: z.string().min(1),
  secondary_keywords: z.array(z.string().min(1)).default([]),
  description: z.string().min(1),
  pricing_free_tier: z.boolean(),
  pricing_starting_from: z.string().min(1),
  pricing_notes: z.string().optional().default(""),
  auth_type: ApiAuthTypeSchema,
  rate_limits: z.string().optional().default(""),
  docs_url: z.string().url(),
  pricing_url: z.string().url().optional().default(""),
  alternatives: z.array(z.string().min(1)).default([]),
  last_verified_date: z.string().min(4),
  faq: z.array(FaqItemSchema).optional().default([]),
  auth_setup_steps: z.array(z.string().min(1)).optional().default([]),
});

export type ApiFrontmatter = z.infer<typeof ApiFrontmatterSchema>;

export const CategoryFrontmatterSchema = z.object({
  title: z.string().min(1),
  primary_keyword: z.string().optional().default(""),
  description: z.string().optional().default(""),
});

export type CategoryFrontmatter = z.infer<typeof CategoryFrontmatterSchema>;


