import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const audiences = [
  {
    title: "Restaurants & cafés",
    body: "Environments where POS systems, staff devices, guest Wi-Fi, music, and cameras all depend on the same network.",
  },
  {
    title: "Retail shops",
    body: "Storefront businesses that rely on stable connectivity for checkout, back-office work, inventory tools, and customer-facing systems.",
  },
  {
    title: "Professional offices",
    body: "Offices and studios that need reliable wireless coverage, predictable performance, and clean internal connectivity.",
  },
  {
    title: "Other small businesses",
    body: "Device-heavy environments where day-to-day operations depend on networks that work consistently and quietly in the background.",
  },
];

export default function WhoWeServe() {
  return (
    <Section tone="light" padded="lg">
      <SectionHeading
        align="center"
        title="Who We Serve"
        body="PluggedIn Pros works with businesses where reliable connectivity is essential to daily operations."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {audiences.map((audience) => (
          <Surface
            key={audience.title}
            className="h-full"
            padding="lg"
            radius="md"
            border
            shadow={false}
          >
            <div className="flex h-full flex-col">
              <h3 className="text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                {audience.title}
              </h3>

              <p className="mt-4 text-[17px] leading-relaxed text-slate-700">
                {audience.body}
              </p>
            </div>
          </Surface>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <p className="text-center text-base font-medium leading-relaxed text-[var(--pip-ink)] md:text-lg">
          These environments often depend on networks that support staff
          devices, customer access, payment systems, and other connected
          equipment throughout the day.
        </p>
      </div>
    </Section>
  );
}
