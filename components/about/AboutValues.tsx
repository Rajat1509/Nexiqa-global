import { Handshake, Sparkles, Users, Award } from "lucide-react";
import { GlowCard, Section, SectionHeader } from "@/components/page/Section";

const values = [
  {
    icon: Handshake,
    title: "Client Focus",
    description: "Your success is our success.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We look for what's next.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Better ideas. Together.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality in every line.",
  },
];

export default function AboutValues() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Our Values"
        title="The principles that guide us"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <GlowCard
              key={value.title}
              className="p-5 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-500/10 text-cyan-400">
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <h3 className="text-base font-semibold text-white">{value.title}</h3>
              <p className="mt-1.5 text-[13px] leading-6 text-[#7f9cac]">{value.description}</p>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
