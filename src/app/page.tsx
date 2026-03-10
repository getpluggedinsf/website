import Hero from "@/components/home/Hero";
import Problems from "@/components/home/Problems";
import HowWeHelp from "@/components/home/HowWeHelp";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeServe from "@/components/home/WhoWeServe";
import RestaurantEnvironments from "@/components/home/RestaurantEnvironments";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <Problems />
      <HowWeHelp />
      <WhyChooseUs />
      <WhoWeServe />
      <RestaurantEnvironments />
    </main>
  );
}
