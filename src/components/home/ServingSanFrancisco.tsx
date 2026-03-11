import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";

export default function ServingSanFrancisco() {
  return (
    <Section tone="light" padded="lg">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          align="center"
          title="Serving San Francisco Businesses"
          body="San Francisco environments present unique networking challenges — dense wireless conditions, mixed-use buildings, older construction, and evolving equipment layouts."
        />

        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-[17px] leading-relaxed text-slate-700">
          <p>
            PluggedIn Pros provides on-site assessments, troubleshooting, and
            infrastructure improvements for businesses across San Francisco.
          </p>

          <p>
            Networks are designed and stabilized with the realities of the
            environment in mind — not treated like a generic small-office setup.
          </p>
        </div>
      </div>
    </Section>
  );
}
