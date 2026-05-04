import Image from "next/image";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";

export function RealWorldEnvironments() {
  return (
    <Section tone="mid" padded="lg">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="max-w-2xl lg:order-2">
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

            <p>Our work is designed for those conditions. We focus on practical,
               reliable solutions that hold up during real business operations—without
               adding unnecessary complexity—so your network supports your business
               instead of slowing it down.
            </p>
          </div>
        </div>

        <div className="group/image relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--pip-border)] bg-white">
          <Image
            src="/images/services/real-world-environments/restaurant-kitchen-network-reliability-real-world-environment-v1.webp"
            alt="Chef in a busy restaurant kitchen using a tablet during service, representing real-world business environments where reliable network performance is critical"
            fill
            className="object-cover transition duration-300 group-hover/image:scale-[1.02]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
