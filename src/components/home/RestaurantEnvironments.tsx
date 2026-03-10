import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

export default function RestaurantEnvironments() {
  return (
    <Section tone="white" padded="lg">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div>
          <SectionHeading
            title="Designed for Restaurant Environments"
            body="Restaurant networks often support POS systems, guest Wi-Fi, staff devices, music systems, and security cameras at the same time."
          />

          <div className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-slate-700">
            <p>
              These systems need to operate reliably during lunch rush, dinner
              service, and other high-demand periods when connectivity problems
              are the most disruptive.
            </p>

            <p>
              PluggedIn Pros designs and stabilizes networks built for these
              operational conditions — with attention to coverage, segmentation,
              device load, and infrastructure that can support the way the
              business actually runs.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/restaurants"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--pip-border)] bg-white px-5 py-3 text-sm font-medium text-[var(--pip-ink)] no-underline transition hover:bg-[var(--pip-bg-light)]"
            >
              Explore Restaurant Services
            </Link>
          </div>
        </div>

        <Surface
          tone="light"
          padding="sm"
          radius="lg"
          border
          shadow={false}
          className="overflow-hidden"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/sections/restaurant-devices.jpg"
              alt="Restaurant staff using connected devices in a busy service environment"
              fill
              className="object-cover"
            />
          </div>
        </Surface>
      </div>
    </Section>
  );
}
