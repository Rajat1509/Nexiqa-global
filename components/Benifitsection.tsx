"use client";

import React from "react";

type Benefit = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    number: "01",
    title: "Business-First",
    description: "Solutions designed around your goals.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M7 8.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M17 8.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
        <path d="M2.5 21v-3.5A4.5 4.5 0 0 1 7 13h0a4.5 4.5 0 0 1 4.5 4.5V21" />
        <path d="M12.5 21v-3.5A4.5 4.5 0 0 1 17 13h0a4.5 4.5 0 0 1 4.5 4.5V21" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Built for Performance",
    description: "Fast, responsive and scalable experiences.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <rect x="5" y="2" width="14" height="20" rx="2.5" />
        <path d="M9 5h6" />
        <path d="M8 17h8" />
        <circle cx="12" cy="19" r=".7" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Modern Technology",
    description: "Reliable technologies built for long-term growth.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m8 10 4-2 4 2-4 2-4-2Z" />
        <path d="M8 14l4 2 4-2" />
        <path d="M12 12v4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description: "Support beyond launch.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 8h3v3H8z" />
        <path d="M13 8h3" />
        <path d="M13 11h3" />
        <path d="M8 14h3" />
        <path d="M8 17h3" />
        <path d="M14 14h2v3h-2z" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative w-full overflow-hidden border-y border-[#062a40] bg-[#020f1b]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[700px] -translate-x-1/2 rounded-full bg-[#006ca8]/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,36,57,0.25),transparent_25%,transparent_75%,rgba(0,36,57,0.25))]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-8 sm:px-8 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 divide-y divide-[#0a2b3e] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="group flex items-start gap-4 py-6 first:pt-0 last:pb-0 sm:px-6 sm:py-2 lg:px-7 first:lg:pl-0 last:lg:pr-0"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#064b6e] bg-[#06253a]/70 text-[#00a8ee] shadow-[inset_0_0_15px_rgba(0,148,210,0.08)] transition-all duration-300 group-hover:border-[#087eae] group-hover:bg-[#07324b]">
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-mono text-xs font-medium tracking-wider text-[#009bdc]">
                    {benefit.number}
                  </span>

                  <h3 className="text-sm font-semibold tracking-wide text-white">
                    {benefit.title}
                  </h3>
                </div>

                <p className="max-w-[210px] text-[13px] leading-5 text-[#7893a4]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
