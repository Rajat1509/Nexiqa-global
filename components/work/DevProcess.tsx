import { GlowCard, Section, SectionHeader } from "@/components/page/Section";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand your goals, users and constraints.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create intuitive experiences aligned with your brand.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build, integrate, test and refine the product.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploy, monitor and support after go-live.",
  },
];

export default function DevProcess() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Our Development Process"
        title="A clear path from idea to launch."
      />
      <div className="relative">
        <div className="absolute left-5 right-5 top-5 hidden h-px bg-cyan-500/20 md:block" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <GlowCard key={step.title} className="relative p-5">
              <div className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-[#061b30] text-[11px] font-semibold text-cyan-300">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#7f9cac]">{step.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
