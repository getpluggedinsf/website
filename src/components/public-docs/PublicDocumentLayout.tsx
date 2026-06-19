import Link from "next/link";
import { ReactNode } from "react";
import PlugIcon from "@/components/icons/PlugIcon";

interface PublicDocumentLayoutProps {
  title: string;
  version: string;
  effectiveDate: string;
  pdfHref?: string;
  children: ReactNode;
}

export default function PublicDocumentLayout({
  title,
  version,
  effectiveDate,
  pdfHref,
  children,
}: PublicDocumentLayoutProps) {
  return (
    <main className="bg-white">

      <div className="public-document-print-header mb-8 hidden items-center gap-2">
        <PlugIcon className="h-6 w-6 shrink-0 text-[var(--pip-orange)]" />
        <div
          className="text-2xl font-bold text-[var(--pip-wordmark)]"
          style={{ fontFamily: "var(--font-play)" }}
        >
          PluggedIn Pros
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <h1
            className="mb-4 text-4xl font-bold tracking-tight text-[var(--pip-ink)]"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {title}
          </h1>

          <div className="space-y-1 text-sm text-slate-600">
            <div>
              <strong>Version:</strong> {version}
            </div>

            <div>
              <strong>Effective Date:</strong> {effectiveDate}
            </div>

            {pdfHref && (
              <div className="public-document-download pt-2">
                <Link
                  href={pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--pip-orange)] underline"
                >
                  Download PDF
                </Link>
              </div>
            )}
          </div>
        </header>

        <article className="public-document">
          {children}
        </article>
      </div>
    </main>
  );
}
