import type { Metadata } from "next";
import PageCta from "@/components/page/PageCta";
import PageHero from "@/components/page/PageHero";
import PageShell from "@/components/page/PageShell";
import DevProcess from "@/components/work/DevProcess";
import WorkGrid from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Our Work | Nexiqa Global",
  description:
    "Explore websites, Shopify stores, applications and digital products Nexiqa Global has turned from ideas into reality.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Work"
        title="Ideas we've turned into"
        highlight="reality"
        description="Explore some of our recent projects and see how we’ve helped businesses build, scale and grow with technology."
      />
      <WorkGrid />
      <DevProcess />
      <PageCta
        title="Have a project in mind?"
        description="Let’s turn your idea into a digital product that works."
        actionLabel="Start a Project"
        actionHref="/contact"
      />
    </PageShell>
  );
}
