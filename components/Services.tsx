import { Globe2, ShoppingBag, Smartphone, Settings2 } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Website Development",
    desc: "Modern, responsive, and high-performance websites that represent your brand and drive measurable results.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify eCommerce Development",
    desc: "Build, customize, and scale your online store with powerful Shopify solutions engineered to convert.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    desc: "Custom web and mobile applications tailored to your business needs, built with clean code and seamless performance.",
  },
  {
    icon: Settings2,
    title: "ERP Solutions",
    desc: "Streamline operations, manage resources, and increase efficiency with smart, tailored ERP systems.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-cyan mb-4">What we build</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Four disciplines, one team &mdash; so your website, store, application, and back-office
            systems are designed to work together from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-cyan/40 hover:bg-surface-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-soft border border-cyan/30 mb-6">
                <Icon size={22} className="text-cyan" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
