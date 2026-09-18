import {
  Compass,
  Lightbulb,
  Rocket,
  Settings2,
  Headset,
} from "lucide-react";
import { GlowCard, Section, SectionHeader } from "@/components/page/Section";

const steps = [
  {
    icon: Compass,
    title: "Understand",
    description: "We learn your business, users, challenges and goals.",
  },
  {
    icon: Lightbulb,
    title: "Plan",
    description: "We create a clear roadmap and technical architecture.",
  },
  {
    icon: Settings2,
    title: "Build",
    description: "We design, develop, test and refine the product.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy with care and make sure everything is ready.",
  },
  {
    icon: Headset,
    title: "Support",
    description: "We stay with you after launch to improve and grow.",
  },
];

export default function AboutApproach() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Our Approach"
        title="Strategy. Design. Development. All in sync."
        description="We follow a clear and collaborative process to deliver solutions that are not only functional but also scalable, user-friendly and future-ready."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <GlowCard
              key={step.title}
              className="group p-5 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#7f9cac]">
                {step.description}
              </p>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
