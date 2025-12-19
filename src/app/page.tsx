import AIModulesSection from "@/components/ai-module/ai-module";
import BrandShow from "@/components/brands/brands";
import HeroSection from "@/components/home/hero";
import ModulesSection from "@/components/modules/modules";
import NextStepsSection from "@/components/next-step/next-step";
import TechnicalRequirementsSection from "@/components/technical-requirements/technical-requirements";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ModulesSection/>
      <AIModulesSection/>
      <BrandShow/>
      <TechnicalRequirementsSection/>
      <NextStepsSection />
    </>
  );
}
