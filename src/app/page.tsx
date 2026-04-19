import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Problems from "@/components/home/Problems";
import HowWeHelp from "@/components/home/HowWeHelp";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeServe from "@/components/home/WhoWeServe";
import RestaurantEnvironments from "@/components/home/RestaurantEnvironments";
import ServingSanFrancisco from "@/components/home/ServingSanFrancisco";
import FinalCta from "@/components/home/FinalCta";


export const metadata: Metadata = {
  title:
    "Reliable Wi-Fi & Network Infrastructure for San Francisco Restaurants and Small Businesses",
  description:
    "Reliable Wi-Fi, network troubleshooting, and infrastructure upgrades for San Francisco restaurants, retail shops, and offices.",
  openGraph: {
    title:
      "Wi-Fi & Network Infrastructure for San Francisco Businesses",
    description:
      "Reliable Wi-Fi, network troubleshooting, and infrastructure upgrades for San Francisco restaurants, retail shops, and offices.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <Problems />
      <HowWeHelp />
      <WhyChooseUs />
      <WhoWeServe />
      <RestaurantEnvironments />
      <ServingSanFrancisco />
      <FinalCta />
    </main>
  );
}
