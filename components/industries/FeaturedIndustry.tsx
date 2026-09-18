import { GlowCard, Section } from "@/components/page/Section";
import { PhonesIllustration } from "@/components/page/Illustrations";

export default function FeaturedIndustry() {
  return (
    <Section>
      <GlowCard className="overflow-hidden">
        <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              Featured
            </p>
            <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              E-commerce
            </h3>
            <p className="mt-3 max-w-lg text-[15px] leading-7 text-[#7f9cac]">
              From high-converting storefronts to custom Shopify experiences,
              we help brands sell more with platforms built around their
              products, customers and growth goals.
            </p>
            <ul className="mt-5 space-y-2 text-[13px] text-[#9bb0bd]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Conversion-focused store design
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Custom Shopify themes and apps
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Payments, inventory and operations
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <PhonesIllustration />
          </div>
        </div>
      </GlowCard>
    </Section>
  );
}
