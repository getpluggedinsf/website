import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const services = [
  {
    step: "01",
    title: "Wi-Fi & Network Reliability Assessment",
    body: "A structured evaluation of coverage, interference, equipment limitations, and network design issues to identify the root causes of instability.",
    href: "/services/network-assessment",
    image: "/images/home/how-we-help/wifi-network-diagnostics-tablet-cafe.webp",
    alt: "Technician analyzing Wi-Fi network diagnostics on a tablet in a café",
  },
  {
    step: "02",
    title: "Network Troubleshooting & Stabilization",
    body: "Diagnosis and stabilization of unstable networks through configuration changes, tuning, and targeted fixes so critical systems operate reliably during normal business operations.",
    href: "/services/network-troubleshooting",
    image: "/images/home/how-we-help/network-rack-ethernet-cable-troubleshooting.webp",
    alt: "Technician troubleshooting ethernet connections in a network rack",
  },
  {
    step: "03",
    title: "Network Design, Installation & Upgrades",
    body: "Business-grade network upgrades for environments where existing equipment cannot deliver reliable performance, expansion to eliminate coverage gaps, and design and installation for new sites.",
    href: "/services/network-installation",
    image: "/images/home/how-we-help/wifi-access-point-installation-ceiling-technician.webp",
    alt: "Technician installing a ceiling-mounted Wi-Fi access point",
  },
];

export default function HowWeHelp() {
  return (
    <Section tone="mid" padded="lg">
      <SectionHeading
        align="center"
        title="How We Help"
        body="Our work typically begins with understanding the environment, then stabilizing existing systems or improving infrastructure based on what the network actually needs."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <Surface
            key={service.title}
            className="group h-full overflow-hidden"
            padding="md"
            radius="md"
            border
            shadow={false}
          >
            <div className="flex h-full flex-col">
              <div className="mb-4 aspect-[16/9] overflow-hidden rounded-md">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="text-sm font-semibold tracking-[0.08em] text-[var(--pip-orange)]">
                {service.step}
              </div>

              <h3 className="mt-2 text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                {service.title}
              </h3>

              <p className="mt-3 text-[16px] leading-[1.75] text-slate-700">
                {service.body}
              </p>

              <div className="mt-auto pt-6">
                <Link href={service.href}>
                  <span className="group/link inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--pip-ink)] no-underline">
                    <span
                      aria-hidden="true"
                      className="text-[var(--pip-orange)] text-base font-bold transition-transform duration-200 group-hover/link:translate-x-0.5"
                    >
                      →
                    </span>
                    <span className="underline-offset-4 group-hover/link:underline">
                      Learn more
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </Surface>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <p className="text-center text-base font-medium leading-relaxed text-[var(--pip-ink)] md:text-lg">
          Start with the environment, resolve the instability, and make
          improvements that fit how the business actually operates.
        </p>
      </div>
    </Section>
  );
}
