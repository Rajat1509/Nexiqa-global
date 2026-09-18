import { Building2, Code2, Globe2, Star } from "lucide-react";
import { GlowCard, Section, SectionHeader } from "@/components/page/Section";

const stats = [
  {
    icon: Globe2,
    value: "10+",
    label: "Clients Worldwide",
  },
  {
    icon: Code2,
    value: "25+",
    label: "Projects Delivered",
  },
  {
    icon: Building2,
    value: "5+",
    label: "Industries Served",
  },
  {
    icon: Star,
    value: "99%+",
    label: "Client Satisfaction",
  },
];

function StatsGrid() {
  return (
    <GlowCard className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="grid grid-cols-2 divide-y divide-cyan-500/15 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-4 py-6 text-center sm:py-2"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                <Icon size={20} strokeWidth={1.6} />
              </div>
              <p className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] font-medium text-[#7f9cac]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </GlowCard>
  );
}

export default function StatsStrip({
  className = "",
  contained = true,
}: {
  className?: string;
  contained?: boolean;
}) {
  if (!contained) {
    return (
      <div className={className}>
        <StatsGrid />
      </div>
    );
  }

  return (
    <Section className={className}>
      <SectionHeader
        eyebrow="Our Impact"
        title="Experience that shows in the numbers."
        description="We partner with businesses worldwide to design, build and deliver digital products that perform."
      />
      <StatsGrid />
    </Section>
  );
}
