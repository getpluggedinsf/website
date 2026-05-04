import { Suspense } from "react";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Schedule a Network Assessment",
  description:
    "Request a network assessment or get in touch to discuss Wi-Fi and network reliability for your business.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Schedule a Network Assessment",
    description:
      "Request a network assessment or get in touch to discuss Wi-Fi and network reliability for your business.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-6 py-12">Loading…</div>}>
      <ContactClient />
    </Suspense>
  );
}
