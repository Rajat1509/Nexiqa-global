import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  Handshake,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { Section } from "@/components/page/Section";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Book a meeting",
    description: "Choose a convenient time for a quick chat.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Discuss your needs",
    description: "Tell us about your project, goals and timeline.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Get a tailored plan",
    description: "We'll share our recommendations, tech stack and next steps.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Start building",
    description: "Our team gets to work and keeps you updated at every step.",
  },
];

export default function BookingProcess() {
  return (
    <Section>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
            Our Process
          </p>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-[32px]">
            From conversation to progress
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#7f9cac]">
            We keep the process simple, transparent and focused on your goals.
          </p>
        </div>
        <Link
          href="/about"
          className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Learn more about our process
          <span>→</span>
        </Link>
      </div>

      <div className="relative">
        <div className="absolute left-8 right-8 top-8 hidden h-px bg-cyan-500/20 lg:block" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-[#061b30] text-cyan-300">
                  <Icon size={22} strokeWidth={1.6} />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-[10px] font-semibold text-[#03111b]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-[#7f9cac]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export const bookingHighlights = [
  {
    icon: Clock3,
    title: "30-min call",
    description: "Focused & productive",
  },
  {
    icon: CalendarDays,
    title: "Quick follow-up",
    description: "Within 1 business day",
  },
  {
    icon: Handshake,
    title: "No obligation",
    description: "Just a genuine chat",
  },
];
