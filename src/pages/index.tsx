import { HeroSection } from "@/components/hero-section";
import { ExpSection } from "@/components/exp-section";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <ExpSection />
    </DefaultLayout>
  );
}
