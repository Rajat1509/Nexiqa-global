import Link from "next/link";
import {
  Globe2,
  ShoppingCart,
  Code2,
  Database,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Website Development",
    description:
      "Websites that grow your business, stand out and perform. We design and develop fast, responsive websites that turn visitors into customers.",
    linkText: "Explore Web Development",
    href: "/services/web-development",
  },
  {
    icon: ShoppingCart,
    title: "Shopify eCommerce Development",
    description:
      "eCommerce experiences built to convert. From store development and theme customization to Shopify development and integrations, we build for growth.",
    linkText: "Explore Shopify Development",
    href: "/services/shopify-development",
  },
  {
    icon: Code2,
    title: "Application Development",
    description:
      "Software built around your business. We create scalable web and mobile applications that streamline processes and solve real problems.",
    linkText: "Explore Application Development",
    href: "/services/application-development",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description:
      "Bring your business operations together. Build smarter workflows with ERP systems that manage resources, operations, data and processes in one place.",
    linkText: "Explore ERP Solutions",
    href: "/services/erp-solutions",
  },
];

export default function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020d18] py-20 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[350px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col items-start">
          {/* Eyebrow */}
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
            WHAT WE BUILD
          </p>

          {/* Heading */}
          <h2 className="max-w-[460px] font-display text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl sm:leading-[1.2] lg:text-[42px]">
            <span className="block">Digital solutions built</span>
            <span className="block">around your business</span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[420px] text-[15px] leading-7 text-slate-400">
            Every business has different goals, customers and challenges.
            We combine strategy, design and technology to create digital
            solutions that are practical, scalable and built to deliver
            real business value.
          </p>

          {/* Button */}
          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-400 px-6 py-3 text-[13px] font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,190,255,0.12)]"
          >
            View All Services

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative rounded-xl border border-cyan-500/20 bg-[#031a29] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[#041e2f] hover:shadow-[0_10px_35px_rgba(0,170,255,0.07)] sm:p-6"
              >
                {/* Icon */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/[0.07]">
                  <Icon
                    className="h-5 w-5 text-cyan-400"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-semibold leading-tight text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[13px] leading-6 text-slate-400">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
                  {service.linkText}

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}