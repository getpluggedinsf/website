import Image from "next/image";
import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";

export default function ServingSanFrancisco() {
  return (
    <Section tone="light" padded="lg">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
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
              src="/images/home/serving-sf/san-francisco-small-business-network-environment.webp"
              alt="Interior of a San Francisco small business using modern network infrastructure"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </Surface>

        <div className="max-w-2xl">
          <h2 className="font-heading tracking-heading text-3xl font-bold text-[var(--pip-ink)] md:text-4xl">
            Serving San Francisco Businesses
          </h2>

          <div className="mt-6 space-y-4 text-[17px] leading-[1.8] text-slate-700">
            <p>
              San Francisco environments present{" "}
              <strong className="text-[var(--pip-ink)] font-semibold">
                unique networking challenges
              </strong>{" "}
              — dense wireless conditions, mixed-use buildings, older
              construction, and evolving equipment layouts.
            </p>

            <p>
              PluggedIn Pros provides on-site assessments, troubleshooting, and
              infrastructure improvements for businesses across San Francisco.
            </p>

            <p>
              Networks are designed and stabilized with the realities of the
              environment in mind — not treated like generic small-office
              setups.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
