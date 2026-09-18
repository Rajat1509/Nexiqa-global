import type { Metadata } from "next";
import AboutApproach from "@/components/about/AboutApproach";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import { GlobeLaptopIllustration } from "@/components/page/Illustrations";
import PageCta from "@/components/page/PageCta";
import PageHero from "@/components/page/PageHero";
import PageShell from "@/components/page/PageShell";
import StatsStrip from "@/components/page/StatsStrip";

export const metadata: Metadata = {
  title: "About Us | Nexiqa Global",
  description:
    "Nexiqa Global is a modern technology company helping businesses build websites, applications, ecommerce platforms and ERP systems that perform and scale.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="Innovative Technology. Real"
        highlight="Business Impact."
        description="Nexiqa Global is a modern technology company helping businesses build websites, applications, ecommerce platforms and ERP systems that perform, scale and stay ready for a fast-changing world."
        actions={[
          { href: "/services", label: "Our Services" },
          { href: "/work", label: "Our Work", variant: "secondary" },
        ]}
        illustration={<GlobeLaptopIllustration />}
      />
      <AboutStory />
      <StatsStrip />
      <AboutApproach />
      <AboutValues />
      <PageCta
        title="Ready to build something great?"
        description="Let’s create digital solutions that move your business forward."
        actionLabel="Book a Meeting"
      />
    </PageShell>
  );
}
