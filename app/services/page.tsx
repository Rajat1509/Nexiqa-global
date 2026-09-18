import type { Metadata } from "next";
import { DevicesIllustration } from "@/components/page/Illustrations";
import PageCta from "@/components/page/PageCta";
import PageHero from "@/components/page/PageHero";
import PageShell from "@/components/page/PageShell";
import CoreServices from "@/components/services/CoreServices";
import TechStack from "@/components/services/TechStack";

export const metadata: Metadata = {
  title: "Our Services | Nexiqa Global",
  description:
    "End-to-end digital solutions from custom websites and Shopify stores to applications, UI/UX and ERP systems.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title="End-to-end digital solutions"
        highlight="for your business"
        description="From custom websites to ecommerce stores, modern applications and ERP systems — we build solutions that help you grow, adapt and thrive."
        actions={[
          { href: "/contact", label: "Start a Project" },
          { href: "/work", label: "Our Work", variant: "secondary" },
        ]}
        illustration={<DevicesIllustration />}
      />
      <CoreServices />
      <TechStack />
      <PageCta
        title="Have a project in mind?"
        description="Tell us what you want to build and we’ll map the right approach."
        actionLabel="Start a Project"
        actionHref="/contact"
      />
    </PageShell>
  );
}
