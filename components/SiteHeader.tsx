import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/requestly-logo-light.avif"
            alt="Requestly"
            width={120}
            height={32}
            className="h-8 w-auto dark:hidden"
          />
          <Image
            src="/requestly-logo-dark.avif"
            alt="Requestly"
            width={120}
            height={32}
            className="h-8 w-auto hidden dark:block"
          />
        </Link>
        <nav className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" asChild size="sm">
            <Link href="https://requestly.com/docs" target="_blank" rel="noopener noreferrer">
              Docs
            </Link>
          </Button>
          <Button asChild size="sm" className="bg-[#004eeb] hover:bg-[#003bc4] text-white">
            <Link href="https://requestly.com/downloads" target="_blank" rel="noopener noreferrer">
              Download
            </Link>
          </Button>
        </nav>
      </Container>
    </header>
  );
}


