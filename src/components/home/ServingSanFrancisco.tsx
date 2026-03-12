import Image from "next/image";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

export default function ServingSanFrancisco() {
  return (
    <Section tone="light" padded="lg">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <Surface
          tone="white"
          padding="sm"
          radius="lg"
          border
          shadow={false}
          className="overflow-hidden"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/sections/sf-business-environment.jpg"
              alt="Small business environment in San Francisco using connected technology"
              fill
              className="object-cover"
            />
          </div>
        </Surface>

        <div>
          <SectionHeading
            title="Serving San Francisco Businesses"
            body="San Francisco environments present unique networking challenges — dense wireless conditions, mixed-use buildings, older construction, and evolving equipment layouts."
          />

          <div className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-slate-700">
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
