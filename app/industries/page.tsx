import type { Metadata } from "next";
import FeaturedIndustry from "@/components/industries/FeaturedIndustry";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import { CityIllustration } from "@/components/page/Illustrations";
import PageCta from "@/components/page/PageCta";
import PageHero from "@/components/page/PageHero";
import PageShell from "@/components/page/PageShell";

export const metadata: Metadata = {
  title: "Industries | Nexiqa Global",
  description:
    "Industry-specific digital solutions for ecommerce, real estate, education, healthcare, finance, logistics, travel and manufacturing.",
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Industry-specific solutions"
        highlight="for a digital future"
        description="We understand that every industry has unique challenges. That’s why we build tailored digital solutions to help you work smarter, scale faster and grow with technology."
        actions={[{ href: "/services", label: "Our Services" }]}
        illustration={<CityIllustration />}
      />
      <IndustriesGrid />
      <FeaturedIndustry />
      <PageCta
        title="Ready to transform your industry?"
        description="Let’s build a solution that fits the way your business actually works."
        actionLabel="Start a Project"
        actionHref="/contact"
      />
    </PageShell>
  );
}
