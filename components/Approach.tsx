"use client";

import {
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Layers3,
  Palette,
  Server,
  ShoppingBag,
} from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    icon: Code2,
  },
  {
    name: "React",
    icon: Layers3,
  },
  {
    name: "Node.js",
    icon: Server,
  },
  {
    name: "TypeScript",
    icon: FileCode2,
  },
  {
    name: "Shopify",
    icon: ShoppingBag,
  },
  {
    name: "Git",
    icon: GitBranch,
  },
  {
    name: "HTML",
    icon: Globe2,
  },
  {
    name: "CSS",
    icon: Palette,
  },
  {
    name: "PostgreSQL",
    icon: Database,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, users and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define solution, architecture, scope and roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create intuitive experiences aligned with your brand.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop, integrate, test and refine.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, monitor and optimize.",
  },
  {
    number: "06",
    title: "Grow",
    description: "Improve and evolve with your needs.",
  },
];

export default function TechnologyProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-line bg-[#020f1d] py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* =====================================================
            TECHNOLOGY
        ====================================================== */}
        <div>
          {/* Heading */}
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
              Technology
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[42px]">
              Built with modern technology
            </h2>

            <p className="mt-4 max-w-lg text-[15px] leading-7 text-muted">
              We choose technologies based on the problem we&apos;re solving —
              not because a particular tool is fashionable.
            </p>
          </div>

          {/* Technology Cards */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="group flex min-h-[96px] flex-col items-center justify-center rounded-xl border border-cyan/10 bg-[#061b30] px-3 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/25 hover:bg-[#08233c]"
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a2944] text-cyan shadow-[0_0_15px_rgba(0,174,255,0.08)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Small decorative dot */}
                  <div className="mt-1.5 flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-cyan/60" />
                  </div>

                  {/* Name */}
                  <span className="mt-1.5 text-[12px] font-medium text-white/80">
                    {technology.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            HOW WE WORK
        ====================================================== */}
        <div className="mt-16 sm:mt-20 lg:mt-20">
          {/* Heading */}
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
              How We Work
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[42px]">
              A process built for clarity
            </h2>

            <p className="mt-4 max-w-lg text-[15px] leading-7 text-muted">
              Great digital products don&apos;t happen by accident. We keep
              the process transparent, collaborative and focused on outcomes.
            </p>
          </div>

          {/* =================================================
              DESKTOP PROCESS
          ================================================== */}
          <div className="relative mt-12 hidden md:block">
            {/* Connecting line */}
            <div className="absolute left-[22px] right-[22px] top-5 h-px bg-cyan/20" />

            <div className="relative grid grid-cols-6 gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  {/* Number Circle */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan/50 bg-[#061b30] shadow-[0_0_15px_rgba(0,174,255,0.10)]">
                    <span className="text-[11px] font-semibold text-cyan">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="mt-5 pr-2">
                    <h3 className="font-display text-[15px] font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET PROCESS
          ================================================== */}
          <div className="relative mt-8 md:hidden">
            {/* Vertical line */}
            <div className="absolute bottom-4 left-[15px] top-4 w-px bg-cyan/20" />

            <div className="space-y-7">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex gap-5"
                >
                  {/* Number */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/50 bg-[#061b30] shadow-[0_0_15px_rgba(0,174,255,0.10)]">
                    <span className="text-[11px] font-semibold text-cyan">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-0.5">
                    <h3 className="font-display text-[15px] font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}