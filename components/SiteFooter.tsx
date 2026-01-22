import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border bg-muted/30">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/requestly-logo-light.avif"
                alt="Requestly"
                width={140}
                height={36}
                className="h-9 w-auto dark:hidden"
              />
              <Image
                src="/requestly-logo-dark.avif"
                alt="Requestly"
                width={140}
                height={36}
                className="h-9 w-auto hidden dark:block"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Lightweight Git-Friendly API Client Built for Modern Developers
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="https://www.linkedin.com/company/requestly" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="https://x.com/requestlyio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="https://rqst.ly/slack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
              </Link>
              <Link href="https://www.youtube.com/@requestly" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="https://requestly.com/products/http-interceptor/redirect-urls/" className="text-muted-foreground hover:text-foreground transition">Redirect URL</Link></li>
              <li><Link href="https://requestly.com/products/http-interceptor/replace-rule-switch-hosts/" className="text-muted-foreground hover:text-foreground transition">Replace Rule</Link></li>
              <li><Link href="https://requestly.com/products/http-interceptor/modify-and-mock-apis/" className="text-muted-foreground hover:text-foreground transition">Modify API Response</Link></li>
              <li><Link href="https://requestly.com/products/http-interceptor/modify-http-headers/" className="text-muted-foreground hover:text-foreground transition">Modify Headers</Link></li>
              <li><Link href="https://requestly.com/products/http-interceptor/inject-javascript-css-on-any-webpage/" className="text-muted-foreground hover:text-foreground transition">Insert Scripts</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="https://requestly.com/docs" className="text-muted-foreground hover:text-foreground transition">Documentation</Link></li>
              <li><Link href="https://requestly.com/blog" className="text-muted-foreground hover:text-foreground transition">Blog</Link></li>
              <li><Link href="https://github.com/requestly/requestly" className="text-muted-foreground hover:text-foreground transition">GitHub</Link></li>
              <li><Link href="https://requestly.com/feature-requests" className="text-muted-foreground hover:text-foreground transition">Feature Requests</Link></li>
              <li><Link href="https://requestly.com/support" className="text-muted-foreground hover:text-foreground transition">Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="https://requestly.com/about" className="text-muted-foreground hover:text-foreground transition">About</Link></li>
              <li><Link href="https://requestly.com/pricing" className="text-muted-foreground hover:text-foreground transition">Pricing</Link></li>
              <li><Link href="https://requestly.com/contact" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
              <li><Link href="https://requestly.com/privacy" className="text-muted-foreground hover:text-foreground transition">Privacy Policy</Link></li>
              <li><Link href="https://requestly.com/terms" className="text-muted-foreground hover:text-foreground transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 BrowserStack, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="https://requestly.com/privacy" className="text-muted-foreground hover:text-foreground transition">Privacy</Link>
            <Link href="https://requestly.com/terms" className="text-muted-foreground hover:text-foreground transition">Terms</Link>
            <Link href="https://requestly.com/security" className="text-muted-foreground hover:text-foreground transition">Security</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
