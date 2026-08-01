import {
  ShoppingCart,
  Stethoscope,
  Building2,
  Landmark,
  GraduationCap,
  Truck,
  Hotel,
  Factory,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    desc: "Storefronts and platforms built to convert browsers into customers.",
  },
  {
    icon: Landmark,
    title: "Finance & Fintech",
    desc: "Secure, compliant systems for payments, lending, and reporting.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Patient-first portals and workflows that protect sensitive data.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Listings, CRMs, and booking tools for agencies and developers.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Learning platforms and admin systems built for scale.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    desc: "ERP and tracking systems that keep operations moving.",
  },
  {
    icon: Hotel,
    title: "Hospitality & Travel",
    desc: "Booking engines and guest experiences that feel effortless.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Resource planning and inventory systems built for the floor.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 border-t border-line bg-elevated relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-cyan mb-4">Where we work</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl">Industries We Serve</h2>
          <p className="mt-4 text-muted leading-relaxed">
            We adapt our engineering and design process to the reality of each industry &mdash;
            its data, its compliance needs, and the people who use it every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {industries.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-elevated p-7 hover:bg-surface-hover transition-colors"
            >
              <Icon size={20} className="text-cyan mb-4" />
              <h3 className="font-display font-medium text-sm mb-2">{title}</h3>
              <p className="text-xs text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
