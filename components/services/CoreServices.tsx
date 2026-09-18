import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  ShoppingBag,
  Smartphone,
  Palette,
  Database,
  Headset,
} from "lucide-react";
import { GlowCard, Section, SectionHeader } from "@/components/page/Section";

const services = [
  {
    icon: Globe2,
    title: "Website Development",
    description: "Custom, high-performance websites built to represent your brand and convert visitors.",
    href: "/services/web-development",
  },
  {
    icon: ShoppingBag,
    title: "Shopify & Ecommerce",
    description: "Powerful Shopify stores and custom ecommerce systems that shoppers love.",
    href: "/services/shopify-development",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Web & mobile applications tailored to your workflows, data and teams.",
    href: "/services/application-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that turns complex products into simple experiences.",
    href: "/services/ui-ux-design",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "Streamline operations with systems that connect people, data and processes.",
    href: "/services/erp-solutions",
  },
  {
    icon: Headset,
    title: "Support & Maintenance",
    description: "Keep your platforms secure, fast and evolving long after launch.",
    href: "/services/support-maintenance",
  },
];

export default function CoreServices() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Our Core Services"
        title="We offer a complete range of technology services designed to help you grow, adapt and thrive."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <GlowCard
              key={service.title}
              className="flex min-h-[180px] flex-col p-5 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <h3 className="text-base font-semibold text-white">{service.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-6 text-[#7f9cac]">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Learn More
                <ArrowRight size={13} />
              </Link>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
