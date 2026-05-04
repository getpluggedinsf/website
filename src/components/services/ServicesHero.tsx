import Section from "@/components/layout/Section";
import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type ServicesHeroProps = {
  breadcrumb?: BreadcrumbItem[];
};

export function ServicesHero({ breadcrumb }: ServicesHeroProps) {
  return (
    <Section tone="warm" padded={breadcrumb?.length ? "md" : "lg"}>
      {breadcrumb && breadcrumb.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-sm text-slate-500"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumb.map((item, index) => {
              const isCurrent = index === breadcrumb.length - 1;

              return (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-slate-400">
                      /
                    </span>
                  )}

                  {item.href && !isCurrent ? (
                    <Link
                      href={item.href}
                      className="no-underline transition hover:text-[var(--pip-ink)] hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isCurrent ? "page" : undefined}
                      className="text-slate-600"
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* LEFT: TEXT */}
        <div className="max-w-[42rem]">
          <h1 className="font-heading tracking-heading text-[2rem] font-semibold leading-[1.05] text-[var(--pip-ink)] sm:text-[2.25rem] lg:text-[2.55rem]">
            Our Wi-Fi & Network Infrastructure Services
          </h1>

          <div className="mt-6 max-w-xl space-y-4 text-[18px] leading-[1.75] text-slate-700">
            <p>
              We help San Francisco small businesses design, stabilize, and improve the
              network infrastructure their operations depend on every day.
            </p>
            <p>
              Most projects begin with a structured evaluation to understand how your
              current network is performing — and what’s needed to improve reliability,
              coverage, and capacity.
            </p>
          </div>

<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
  <Link
    href="/contact?intent=assessment"
    className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[var(--pip-orange)] px-6 py-3.5 text-[16px] font-semibold text-white no-underline transition hover:brightness-110 sm:w-fit"
  >
    Request a Network Reliability Review
  </Link>

  <Link href="/contact?intent=general">
    <span className="group/link inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--pip-ink)] no-underline">
      <span
        aria-hidden="true"
        className="text-[17px] text-[var(--pip-orange)] transition-transform duration-200 group-hover/link:translate-x-0.5"
      >
        →
      </span>
      <span className="underline-offset-4 group-hover/link:underline">
        Or just reach out
      </span>
    </span>
  </Link>
</div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full">
          <div className="group/image relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/services/hero/busy-restaurant-network-environment-small-business-wifi-v1.webp"
              alt="Busy restaurant interior with staff and customers in a fast-paced environment, representing real-world conditions where reliable Wi-Fi and network performance are essential for small business operations."
              fill
              className="object-cover transition duration-300 group-hover/image:scale-[1.03]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
