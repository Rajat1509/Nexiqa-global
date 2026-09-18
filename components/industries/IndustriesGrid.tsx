import {
  ArrowRight,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { GlowCard, Section, SectionHeader } from "@/components/page/Section";

export const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Scalable platforms for growing online businesses.",
    href: "/industries#ecommerce",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Modern solutions for property businesses.",
    href: "/industries#real-estate",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Digital platforms for better learning experiences.",
    href: "/industries#education",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Secure systems for better patient care.",
    href: "/industries#healthcare",
  },
  {
    icon: Landmark,
    title: "Finance",
    description: "Reliable platforms for financial services.",
    href: "/industries#finance",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Smarter supply chain and delivery systems.",
    href: "/industries#logistics",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Digital experiences for travel businesses.",
    href: "/industries#travel",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Digital transformation for production businesses.",
    href: "/industries#manufacturing",
  },
];

export default function IndustriesGrid() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Industries We Serve"
        title="From startups to established enterprises, we partner with businesses across sectors."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <GlowCard
              key={industry.title}
              className="group relative min-h-[148px] scroll-mt-24 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div id={industry.href.split("#")[1]} className="absolute -top-24" />
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg text-cyan-400">
                <Icon size={22} strokeWidth={1.6} />
              </div>
              <h3 className="text-base font-semibold text-white">{industry.title}</h3>
              <p className="mt-1.5 max-w-[200px] text-[13px] leading-6 text-[#7f9cac]">
                {industry.description}
              </p>
              <Link
                href={industry.href}
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-cyan-400 opacity-0 transition group-hover:opacity-100"
              >
                Learn More
                <ArrowRight size={12} />
              </Link>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
