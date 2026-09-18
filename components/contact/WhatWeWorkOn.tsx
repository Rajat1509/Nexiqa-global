import {
  Code2,
  Globe2,
  Laptop,
  MonitorSmartphone,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { GlowCard, Section } from "@/components/page/Section";

const services = [
  { title: "Website Development", icon: Globe2 },
  { title: "Shopify & eCommerce", icon: ShoppingBag },
  { title: "Application Development", icon: Smartphone },
  { title: "UI/UX Design", icon: MonitorSmartphone },
  { title: "Design", icon: Laptop },
  { title: "ERP Solutions", icon: Code2 },
];

export default function WhatWeWorkOn() {
  return (
    <Section className="pt-4">
      <GlowCard className="p-5 sm:p-6">
        <h2 className="text-base font-semibold text-white">What we work on</h2>
        <p className="mt-1 max-w-xl text-[13px] leading-6 text-[#7f9cac]">
          We build digital solutions for businesses of all sizes, covering a
          variety of industries.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex min-h-[110px] flex-col justify-between rounded-xl border border-cyan-500/20 bg-[#042238]/70 p-4 transition hover:border-cyan-400/50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <Icon size={16} strokeWidth={1.6} />
                </div>
                <p className="mt-4 text-[13px] font-medium leading-snug text-slate-200">
                  {service.title}
                </p>
              </div>
            );
          })}
        </div>
      </GlowCard>
    </Section>
  );
}
