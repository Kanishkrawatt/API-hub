"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";

interface RedocStandaloneProps {
  spec: any;
  slug: string;
  title: string;
}

export function RedocStandalone({ spec, slug, title }: RedocStandaloneProps) {
  const [RedocComponent, setRedocComponent] = useState<any>(null);

  useEffect(() => {
    // Dynamically import Redoc only on client side
    import("redoc").then((module) => {
      setRedocComponent(() => module.RedocStandalone);
    });
  }, []);

  if (!RedocComponent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-zinc-300">Loading API documentation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
      {/* Custom Header */}
      <div className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link 
                href={`/${slug}`}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                ← Back to {title}
              </Link>
            </div>
            <div className="text-sm font-semibold text-white">
              API Reference
            </div>
          </div>
        </Container>
      </div>

      {/* Redoc Container with Custom Styling */}
      <div className="redoc-custom-wrapper">
        <RedocComponent
          spec={spec}
          options={{
            scrollYOffset: 80,
            hideDownloadButton: false,
            disableSearch: false,
            hideLoading: false,
            nativeScrollbars: true,
            expandResponses: "200,201",
            jsonSampleExpandLevel: 2,
            hideSingleRequestSampleTab: true,
            menuToggle: true,
            pathInMiddlePanel: true,
            requiredPropsFirst: true,
            sortPropsAlphabetically: false,
            theme: {
              spacing: {
                unit: 4,
                sectionHorizontal: ({ spacing }: any) => spacing.unit * 10,
                sectionVertical: ({ spacing }: any) => spacing.unit * 10,
              },
              breakpoints: {
                small: "50rem",
                medium: "85rem",
                large: "105rem",
              },
              colors: {
                tonalOffset: 0.15,
                primary: {
                  main: "#ffffff",
                  light: "#f4f4f5",
                  dark: "#e4e4e7",
                  contrastText: "#18181b",
                },
                success: {
                  main: "#10b981",
                  light: "#34d399",
                  dark: "#059669",
                  contrastText: "#ffffff",
                },
                warning: {
                  main: "#f59e0b",
                  light: "#fbbf24",
                  dark: "#d97706",
                  contrastText: "#18181b",
                },
                error: {
                  main: "#ef4444",
                  light: "#f87171",
                  dark: "#dc2626",
                  contrastText: "#ffffff",
                },
                gray: {
                  50: "#18181b",
                  100: "#27272a",
                },
                text: {
                  primary: "#fafafa",
                  secondary: "#d4d4d8",
                  light: "#a1a1aa",
                },
                border: {
                  dark: "#3f3f46",
                  light: "#27272a",
                },
                responses: {
                  success: {
                    color: "#34d399",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    tabTextColor: "#86efac",
                  },
                  error: {
                    color: "#f87171",
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    tabTextColor: "#fca5a5",
                  },
                  redirect: {
                    color: "#60a5fa",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    tabTextColor: "#93c5fd",
                  },
                  info: {
                    color: "#22d3ee",
                    backgroundColor: "rgba(6, 182, 212, 0.1)",
                    tabTextColor: "#67e8f9",
                  },
                },
                http: {
                  get: "#10b981",
                  post: "#3b82f6",
                  put: "#f59e0b",
                  options: "#a78bfa",
                  patch: "#f472b6",
                  delete: "#ef4444",
                  basic: "#a1a1aa",
                  link: "#22d3ee",
                  head: "#a78bfa",
                },
              },
              typography: {
                fontSize: "15px",
                lineHeight: "1.7",
                fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
                fontWeightRegular: "400",
                fontWeightBold: "600",
                fontWeightLight: "300",
                optimizeSpeed: true,
                smoothing: "antialiased",
                headings: {
                  fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
                  fontWeight: "700",
                  lineHeight: "1.4",
                },
                code: {
                  fontSize: "13px",
                  fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
                  fontWeight: "400",
                  color: "#e4e4e7",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  wrap: false,
                },
                links: {
                  color: "#60a5fa",
                  visited: "#a78bfa",
                  hover: "#93c5fd",
                  textDecoration: "underline",
                },
              },
              sidebar: {
                width: "280px",
                backgroundColor: "#18181b",
                textColor: "#d4d4d8",
                activeTextColor: "#ffffff",
                groupItems: {
                  activeBackgroundColor: "rgba(255, 255, 255, 0.08)",
                  activeTextColor: "#ffffff",
                  textTransform: "none",
                },
                level1Items: {
                  activeBackgroundColor: "rgba(255, 255, 255, 0.12)",
                  activeTextColor: "#ffffff",
                  textTransform: "none",
                },
                arrow: {
                  size: "1.3em",
                  color: "#71717a",
                },
              },
              rightPanel: {
                backgroundColor: "#09090b",
                width: "45%",
                textColor: "#e4e4e7",
                servers: {
                  overlay: {
                    backgroundColor: "#18181b",
                    textColor: "#fafafa",
                  },
                  url: {
                    backgroundColor: "#27272a",
                  },
                },
              },
              codeBlock: {
                backgroundColor: "#09090b",
              },
              fab: {
                backgroundColor: "#3f3f46",
                color: "#ffffff",
              },
            },
          }}
        />
      </div>

      <style jsx global>{`
        /* Custom Redoc styling enhancements - Dark Theme */
        .redoc-custom-wrapper {
          --redoc-primary: #ffffff;
        }

        /* Smooth scrolling */
        .redoc-wrap {
          scroll-behavior: smooth;
          background: linear-gradient(to bottom right, #18181b, #09090b) !important;
        }

        /* Enhanced menu styling */
        .menu-content {
          background: #18181b !important;
          border-right: 1px solid rgba(63, 63, 70, 0.6) !important;
        }

        /* Menu items hover state */
        .menu-content label[role="menuitem"]:hover {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }

        /* Active menu item */
        .menu-content label[role="menuitem"].active {
          background-color: rgba(255, 255, 255, 0.12) !important;
          font-weight: 600 !important;
          border-left: 3px solid #ffffff !important;
          color: #ffffff !important;
        }

        /* Schema boxes */
        .redoc-json {
          border: 1px solid rgba(63, 63, 70, 0.6) !important;
          border-radius: 8px !important;
          background-color: rgba(0, 0, 0, 0.2) !important;
        }

        /* Operation badges */
        .http-verb {
          border-radius: 6px !important;
          font-weight: 600 !important;
          font-size: 12px !important;
          padding: 4px 12px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
        }

        /* Response tabs */
        .react-tabs__tab {
          border-radius: 6px 6px 0 0 !important;
          font-weight: 500 !important;
          transition: all 0.2s ease !important;
          color: #a1a1aa !important;
          background-color: transparent !important;
        }

        .react-tabs__tab:hover {
          background-color: rgba(255, 255, 255, 0.05) !important;
          color: #d4d4d8 !important;
        }

        .react-tabs__tab--selected {
          font-weight: 600 !important;
          color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }

        /* Response code badges and labels */
        .response-code {
          color: #ffffff !important;
          background-color: rgba(16, 185, 129, 0.2) !important;
          border: 1px solid rgba(16, 185, 129, 0.4) !important;
          border-radius: 6px !important;
          padding: 4px 10px !important;
          font-weight: 600 !important;
        }

        /* Response panels */
        .response-panel {
          background-color: rgba(0, 0, 0, 0.3) !important;
          border: 1px solid rgba(63, 63, 70, 0.6) !important;
          border-radius: 8px !important;
        }

        /* Tab panels */
        .react-tabs__tab-panel {
          background-color: transparent !important;
          color: #d4d4d8 !important;
        }

        /* Response type labels */
        [class*="response-type"] {
          color: #fafafa !important;
        }

        /* HTTP status code styling */
        [class*="http-code"] {
          background-color: rgba(16, 185, 129, 0.15) !important;
          color: #34d399 !important;
          border-radius: 6px !important;
          padding: 2px 8px !important;
          font-weight: 600 !important;
        }

        /* Success codes (2xx) */
        [class*="http-code"][class*="2"] {
          background-color: rgba(16, 185, 129, 0.15) !important;
          color: #34d399 !important;
        }

        /* Error codes (4xx, 5xx) */
        [class*="http-code"][class*="4"],
        [class*="http-code"][class*="5"] {
          background-color: rgba(239, 68, 68, 0.15) !important;
          color: #f87171 !important;
        }

        /* Redirect codes (3xx) */
        [class*="http-code"][class*="3"] {
          background-color: rgba(59, 130, 246, 0.15) !important;
          color: #60a5fa !important;
        }

        /* Code blocks */
        .redoc-markdown pre {
          border-radius: 8px !important;
          border: 1px solid rgba(63, 63, 70, 0.6) !important;
          background-color: #09090b !important;
        }

        /* Search box */
        .search-input {
          border-radius: 8px !important;
          border: 1px solid rgba(63, 63, 70, 0.6) !important;
          padding: 10px 16px !important;
          font-size: 14px !important;
          background-color: rgba(0, 0, 0, 0.2) !important;
          color: #fafafa !important;
        }

        .search-input::placeholder {
          color: #71717a !important;
        }

        .search-input:focus {
          outline: none !important;
          border-color: #52525b !important;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05) !important;
        }

        /* Section headers */
        h1.api-info-header {
          background: linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          font-weight: 800 !important;
        }

        h2[role="button"] {
          border-bottom: 2px solid rgba(63, 63, 70, 0.6) !important;
          padding-bottom: 12px !important;
          color: #fafafa !important;
        }

        /* Table styling */
        .redoc-markdown table {
          border-radius: 8px !important;
          overflow: hidden !important;
          border: 1px solid rgba(63, 63, 70, 0.6) !important;
        }

        .redoc-markdown table th {
          background-color: rgba(0, 0, 0, 0.3) !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          font-size: 12px !important;
          letter-spacing: 0.5px !important;
          color: #fafafa !important;
          border-bottom: 1px solid rgba(63, 63, 70, 0.6) !important;
        }

        .redoc-markdown table td {
          border-bottom: 1px solid rgba(63, 63, 70, 0.4) !important;
          color: #d4d4d8 !important;
        }

        .redoc-markdown table tr:hover {
          background-color: rgba(255, 255, 255, 0.03) !important;
        }

        /* Scrollbar styling */
        .menu-content::-webkit-scrollbar {
          width: 8px;
        }

        .menu-content::-webkit-scrollbar-track {
          background: #09090b;
        }

        .menu-content::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 4px;
        }

        .menu-content::-webkit-scrollbar-thumb:hover {
          background: #52525b;
        }

        /* Additional dark mode refinements */
        .api-content {
          background: transparent !important;
        }

        .api-content h1,
        .api-content h2,
        .api-content h3,
        .api-content h4,
        .api-content h5 {
          color: #fafafa !important;
        }

        .api-content p,
        .api-content li,
        .api-content td {
          color: #d4d4d8 !important;
        }

        /* Parameter tables */
        table.security-details tbody tr td,
        table.security-details thead tr th {
          background-color: transparent !important;
        }

        /* Dropdown arrows and controls */
        .dropdown-toggle {
          color: #d4d4d8 !important;
        }

        /* Badge styling */
        .badge {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
        }

        /* Response samples section */
        [class*="ResponsesSamples"],
        [class*="response-samples"] {
          background-color: rgba(0, 0, 0, 0.3) !important;
          border-radius: 8px !important;
          padding: 16px !important;
        }

        /* Response title/headers */
        [class*="ResponseTitle"],
        [class*="response-title"] {
          color: #fafafa !important;
          font-weight: 600 !important;
        }

        /* Tab list container */
        .react-tabs__tab-list {
          border-bottom: 1px solid rgba(63, 63, 70, 0.6) !important;
          background-color: transparent !important;
        }

        /* Sample response code blocks */
        [class*="SampleControls"] {
          background-color: rgba(0, 0, 0, 0.4) !important;
          border-radius: 8px 8px 0 0 !important;
        }

        /* Language selector for samples */
        [class*="SampleLanguage"] select {
          background-color: rgba(0, 0, 0, 0.3) !important;
          color: #fafafa !important;
          border: 1px solid rgba(63, 63, 70, 0.6) !important;
          border-radius: 6px !important;
        }

        /* Copy button in samples */
        [class*="CopyButton"],
        button[title*="Copy"] {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: #d4d4d8 !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 6px !important;
          transition: all 0.2s ease !important;
        }

        [class*="CopyButton"]:hover,
        button[title*="Copy"]:hover {
          background-color: rgba(255, 255, 255, 0.15) !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}
