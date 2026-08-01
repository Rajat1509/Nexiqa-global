import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="py-24 lg:py-28 border-t border-line relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">
          Let&apos;s build something{" "}
          <span className="text-gradient">extraordinary</span> together
        </h2>
        <p className="mt-5 text-muted max-w-xl mx-auto">
          Tell us about your project and we&apos;ll come prepared with ideas, not just questions.
        </p>
        <div className="mt-9">
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-medium text-bg shadow-glow hover:shadow-glow-strong transition-shadow"
          >
            Book a Meeting
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
