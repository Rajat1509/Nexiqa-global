import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlowCard, Section, SectionHeader } from "@/components/page/Section";

export default function AboutStory() {
  return (
    <Section>
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <SectionHeader
            eyebrow="Our Story"
            title="We started with a simple belief — great technology can solve real problems."
          />
          <p className="max-w-xl text-[15px] leading-7 text-[#7f9cac]">
            Nexiqa Global was founded by a team of passionate developers and
            problem-solvers who believed that every business deserves meaningful
            digital experiences. We started small, focusing on helping clients
            turn ideas into scalable, high-performing websites and mobile
            solutions.
          </p>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Learn More About Us
            <ArrowRight size={14} />
          </Link>
        </div>
        <GlowCard className="overflow-hidden p-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Nexiqa team collaborating around a laptop"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031a29]/50 to-transparent" />
          </div>
        </GlowCard>
      </div>
    </Section>
  );
}
