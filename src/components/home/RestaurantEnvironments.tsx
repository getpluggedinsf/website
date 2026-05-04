import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";

export default function RestaurantEnvironments() {
  return (
    <Section tone="white" padded="lg">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="max-w-2xl">
          <h2 className="font-heading tracking-heading text-3xl font-bold text-[var(--pip-ink)] md:text-4xl">
            Designed for Restaurant Environments
          </h2>

          <div className="mt-6 space-y-4 text-[17px] leading-[1.8] text-slate-700">
            <p>
              Restaurant networks often support{" "}
              <strong className="text-[var(--pip-ink)] font-semibold">
                POS systems, guest Wi-Fi, staff devices, music systems, and
                security cameras
              </strong>{" "}
              at the same time.
            </p>

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
            <Link href="/restaurants">
              <span className="group/link inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--pip-ink)] no-underline">
                <span
                  aria-hidden="true"
                  className="text-[var(--pip-orange)] text-[17px] transition-transform duration-200 group-hover/link:translate-x-0.5"
                >
                  →
                </span>
                <span className="underline-offset-4 group-hover/link:underline">
                  Explore restaurant environments
                </span>
              </span>
            </Link>
          </div>
        </div>

        <Surface
          tone="light"
          padding="sm"
          radius="lg"
          border
          shadow={false}
          className="group overflow-hidden"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/home/designed-for-restaurants/restaurant-kitchen-tablet-pos-system.webp"
              alt="Chef using an iPad in a busy restaurant kitchen to manage orders and operations"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </Surface>
      </div>
    </Section>
  );
}
