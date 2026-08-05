import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CircuitField from "./CircuitField";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 lg:pt-48 lg:pb-36 overflow-hidden grid-lines">
      <div className="absolute inset-0 bg-radial-glow" />
      <CircuitField />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-cyan mb-6">Web · Commerce · Apps · ERP</p>
          <h1 className="font-display font-semibold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
            Turning ideas into
            <br />
            <span className="text-gradient">digital solutions</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            Nexiqa Global partners with ambitious businesses to design, build, and scale
            the software that runs them &mdash; from the first line of code to the systems
            that keep growing companies running. Powering businesses. Building futures.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-meeting"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-medium text-bg shadow-glow hover:shadow-glow-strong transition-shadow"
            >
              Book a Meeting
              <ArrowUpRight size={16} />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink hover:border-cyan/50 hover:bg-surface transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
