import {
  BriefcaseBusiness,
  Flower2,
  Handshake,
  Layers3,
} from "lucide-react";
import StatsStrip from "@/components/page/StatsStrip";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Business First",
    description:
      "We understand your goals before choosing the technology.",
  },
  {
    icon: Flower2,
    title: "Thoughtful Design",
    description:
      "Interfaces designed to make complex products simple to use.",
  },
  {
    icon: Layers3,
    title: "Engineering That Scales",
    description:
      "Clean, maintainable solutions built for long-term growth.",
  },
  {
    icon: Handshake,
    title: "Partnership Beyond Launch",
    description:
      "We continue to support, improve and evolve your digital products.",
  },
];

export default function WhyNexiq() {
  return (
    <section className="w-full bg-[#020d18] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              WHY NEXIQA GLOBAL?
            </p>

            <h2 className="font-display text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl sm:leading-[1.2] lg:text-[42px]">
              <span className="block">Technology should solve</span>
              <span className="block">problems, not create them.</span>
            </h2>

            <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-400">
              We combine business understanding, thoughtful design and
              modern engineering to build solutions that are useful today
              and ready for tomorrow.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-400 px-6 py-3 text-[13px] font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              Learn More About Us
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5">
                    <Icon
                      className="h-5 w-5 text-cyan-400"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-[230px] text-[13px] leading-6 text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <StatsStrip contained={false} className="mt-14" />
      </div>
    </section>
  );
}
