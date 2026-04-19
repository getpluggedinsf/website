import { Suspense } from "react";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-6 py-12">Loading…</div>}>
      <ContactClient />
    </Suspense>
  );
}
