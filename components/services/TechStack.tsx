import {
  Code2,
  Database,
  FileCode2,
  Globe2,
  Layers3,
  Palette,
  Server,
  ShoppingBag,
  Wind,
} from "lucide-react";
import { GlowCard, Section, SectionHeader } from "@/components/page/Section";

const technologies = [
  { name: "React", icon: Layers3 },
  { name: "Next.js", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "Shopify", icon: ShoppingBag },
  { name: "MongoDB", icon: Database },
  { name: "TypeScript", icon: FileCode2 },
  { name: "HTML", icon: Globe2 },
  { name: "CSS", icon: Palette },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind CSS", icon: Wind },
];

export default function TechStack() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Technology Stack"
        title="The tools we use to build reliable and scalable solutions."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <GlowCard
              key={tech.name}
              className="flex min-h-[96px] flex-col items-center justify-center gap-2 px-3 py-4 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a2944] text-cyan-400">
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <span className="text-[13px] font-medium text-white/85">{tech.name}</span>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
