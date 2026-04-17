import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";
import PlugIcon from "@/components/icons/PlugIcon";
import Image from "next/image";

const reasons = [
  {
    title: "Deep infrastructure background",
    body: "Built on decades of experience supporting networked systems and real-world business operations.",
  },
  {
    title: "Restaurant & small-business experience",
    body: "Hands-on experience in busy operational environments where reliable connectivity matters every day.",
  },
  {
    title: "Structured problem solving",
    body: "Root causes are identified and addressed rather than masked by temporary fixes.",
  },
  {
    title: "Focused expertise",
    body: "Dedicated exclusively to Wi-Fi and network infrastructure.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section tone="white" padded="lg">
      <SectionHeading
        align="center"
        title="Why Small Businesses Choose PluggedIn Pros"
        body="Reliable networks require thoughtful design, structured troubleshooting, and practical experience."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="max-w-[34rem] mx-auto lg:mx-0">
          <ul className="space-y-6">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-2">
                <PlugIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--pip-orange)]" />

                <div>
                  <h3 className="text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                    {reason.title}
                  </h3>

                  <p className="mt-1.5 text-[17px] leading-relaxed text-slate-700">
                    {reason.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Surface
          tone="light"
          padding="sm"
          radius="md"
          border
          shadow={false}
          className="group h-fit self-center overflow-hidden"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/home/why-choose-us/network-rack-patch-cables-technician.webp"
              alt="Technician organizing patch cables in a network rack"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </Surface>
      </div>
    </Section>
  );
}
