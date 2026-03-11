import Hero from "@/components/home/Hero";
import Problems from "@/components/home/Problems";
import HowWeHelp from "@/components/home/HowWeHelp";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeServe from "@/components/home/WhoWeServe";
import RestaurantEnvironments from "@/components/home/RestaurantEnvironments";
import ServingSanFrancisco from "@/components/home/ServingSanFrancisco";
import FinalCta from "@/components/home/FinalCta";

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
