// src/app/request-help/page.tsx
import { Suspense } from "react";
import RequestHelpClient from "./RequestHelpClient";

export default function RequestHelpPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-6 py-12">Loading…</div>}>
      <RequestHelpClient />
    </Suspense>
  );
}

