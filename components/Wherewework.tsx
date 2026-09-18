"use client";

import {
  ArrowUpRight,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  ShoppingCart,
  Truck,
} from "lucide-react";

const industries = [
  {
    title: "E-commerce",
    description: "Online stores & marketplaces",
    icon: ShoppingCart,
  },
  {
    title: "Finance & Fintech",
    description: "Secure and scalable financial solutions",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    description: "Better care through smarter systems",
    icon: HeartPulse,
  },
  {
    title: "Real Estate",
    description: "Property platforms & listing solutions",
    icon: Building2,
  },
  {
    title: "Education",
    description: "Learning platforms & digital classrooms",
    icon: GraduationCap,
  },
  {
    title: "Logistics & Supply Chain",
    description: "Smarter supply chain management",
    icon: Truck,
  },
  {
    title: "Hospitality & Travel",
    description: "Booking, reservations & travel platforms",
    icon: Hotel,
  },
  {
    title: "Manufacturing",
    description: "Modern systems for smarter operations",
    icon: Factory,
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden border-t border-line bg-[#020f1d] py-20 sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
              Where We Work
            </p>

            {/* Heading */}
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[42px]">
              Technology that adapts to your industry
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
              Different industries have different challenges, workflows and
              objectives.
              <br className="hidden sm:block" />
              We create digital solutions that adapt to the way your business
              actually operates.
            </p>
          </div>

          {/* View All Industries */}
          <a
            href="/industries"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-cyan transition-colors hover:text-white"
          >
            View All Industries
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* =====================================================
            INDUSTRY GRID
        ====================================================== */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <a
                key={industry.title}
                href="/industries"
                className="group relative min-h-[132px] overflow-hidden rounded-xl border border-cyan/10 bg-[#061b30] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/25 hover:bg-[#08223a] hover:shadow-[0_10px_35px_rgba(0,174,255,0.08)]"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan/5 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-8 w-8 items-center justify-center rounded-md text-cyan">
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="relative mt-3">
                  <h3 className="font-display text-[15px] font-medium text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-1.5 max-w-[220px] text-[13px] leading-5 text-muted">
                    {industry.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={13}
                  className="absolute bottom-4 right-4 text-cyan/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}