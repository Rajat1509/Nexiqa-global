import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-[#03172a] py-16 sm:py-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-70" />

      {/* Decorative curved lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 250"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {/* Left curves */}
        <path
          d="M-100 0 C180 70 260 190 570 250"
          stroke="rgba(0, 174, 255, 0.16)"
          strokeWidth="1"
        />

        <path
          d="M-120 20 C180 100 270 205 570 250"
          stroke="rgba(0, 110, 255, 0.10)"
          strokeWidth="1"
        />

        {/* Right curves */}
        <path
          d="M1540 0 C1260 70 1180 190 870 250"
          stroke="rgba(0, 174, 255, 0.16)"
          strokeWidth="1"
        />

        <path
          d="M1560 20 C1260 100 1170 205 870 250"
          stroke="rgba(0, 110, 255, 0.10)"
          strokeWidth="1"
        />
      </svg>

      {/* CTA content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">
          Let&apos;s work together
        </p>

        {/* Heading */}
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Let&apos;s build something{" "}
          <span className="text-gradient">extraordinary</span> together.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-muted">
          Tell us about your project and we&apos;ll come prepared with ideas,
          not just questions.
        </p>

        {/* Button */}
        <div className="mt-7">
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-[13px] font-semibold text-bg shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-strong"
          >
            Start a Project
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Tagline */}
        <p className="mt-4 text-[13px] font-medium text-white/80">
          Powering businesses. Building futures.
        </p>
      </div>
    </section>
  );
}