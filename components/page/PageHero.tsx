import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  actions = [],
  illustration,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  highlight?: string;
  description: string;
  actions?: HeroAction[];
  illustration?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className={`mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20 ${
          illustration ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
        }`}
      >
        <div className="relative z-10 max-w-xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="text-cyan-400 [text-shadow:0_0_28px_rgba(0,200,255,0.2)]">
                  {highlight}
                </span>
              </>
            ) : null}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#7f9cac]">
            {description}
          </p>
          {children}
          {actions.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {actions.map((action) =>
                action.variant === "secondary" ? (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-cyan-400/10"
                  >
                    {action.label}
                  </Link>
                ) : (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c9ed] to-[#3977f6] px-6 py-3 text-[13px] font-semibold text-[#03111b] shadow-[0_0_22px_rgba(0,174,255,0.28)] transition hover:scale-[1.02]"
                  >
                    {action.label}
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                )
              )}
            </div>
          )}
        </div>
        {illustration ? (
          <div className="relative hidden min-h-[280px] lg:block">{illustration}</div>
        ) : null}
      </div>
    </section>
  );
}

export function HeroButtonRow({
  primary,
  secondary,
}: {
  primary?: HeroAction;
  secondary?: HeroAction;
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {primary && (
        <Link
          href={primary.href}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c9ed] to-[#3977f6] px-6 py-3 text-[13px] font-semibold text-[#03111b] shadow-[0_0_22px_rgba(0,174,255,0.28)] transition hover:scale-[1.02]"
        >
          {primary.label}
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
      {secondary && (
        <Link
          href={secondary.href}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-cyan-400/10"
        >
          {secondary.label}
        </Link>
      )}
    </div>
  );
}
