import Image from "next/image";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";

const bullets = [
  "Designed for live operating environments, not lab conditions",
  "Focused on reliability, not unnecessary complexity",
  "Built to support real business operations day-to-day",
] as const;

export function RealWorldEnvironments() {
  return (
    <Section tone="white" padded="lg">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="max-w-2xl">
          <SectionHeading
            align="left"
            title="Built for Real-World Environments"
          />

          <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-slate-700">
            <p>Small business networks don’t exist in controlled environments.</p>

            <p>
              They operate in busy spaces with real constraints—shared internet
              connections, evolving layouts, competing devices, and constant
              day-to-day use.
            </p>

            <p>
              Our work is designed for those conditions.
            </p>

            <p>
              We focus on practical solutions that improve reliability without
              adding unnecessary complexity—so your network supports your
              business instead of slowing it down.
            </p>
          </div>

          <ul className="mt-8 space-y-3 text-[16px] leading-7 text-slate-700">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-orange)]" />
                <span className="font-medium text-[var(--pip-ink)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--pip-border)] bg-white">
          <Image
            src="/images/sections/restaurant-devices.jpg"
            alt="Small business restaurant environment with connected devices in normal operation"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
