import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";
import Image from "next/image";

const audiences = [
  {
    title: "Restaurants & cafés",
    image: "coffee-shop-pos-payment-terminal.webp",
    alt: "Barista using a POS payment terminal in a coffee shop environment",
    body: "Environments where POS systems, staff devices, guest Wi-Fi, music, and cameras all depend on the same network.",
  },
  {
    title: "Retail shops",
    image: "retail-shop-owner-tablet-inventory.webp",
    alt: "Retail shop owner using a tablet for inventory management",
    body: "Storefront businesses that rely on stable connectivity for checkout, back-office work, inventory tools, and customer-facing systems.",
  },
  {
    title: "Professional offices",
    image: "office-workspace-laptop-business-network.webp",
    alt: "Professional working on a laptop in a modern office network environment",
    body: "Offices and studios that need reliable wireless coverage, predictable performance, and clean internal connectivity.",
  },
  {
    title: "Other small businesses",
    image: "barbershop-mobile-payment-card-reader.webp",
    alt: "Customer payment using a mobile card reader in a barbershop",
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
            className="group/card h-full bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[var(--pip-ink)] hover:shadow-sm"
            padding="lg"
            radius="md"
            border
            shadow={false}
          >
            <div className="flex h-full flex-col">
              <div className="mb-5 aspect-[16/10] overflow-hidden rounded-md">
                <Image
                  src={`/images/home/who-we-serve/${audience.image}`}
                  alt={audience.alt}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
                />
              </div>

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
