import Link from "next/link";
import { Container } from "@/components/Container";

export default function ApiNotFound() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-2xl font-semibold tracking-tight">API not found</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          This API page doesn’t exist (or hasn’t been generated yet).
        </p>
        <Link
          href="/api-hub"
          className="mt-6 inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Back to API Explorer
        </Link>
      </Container>
    </main>
  );
}


