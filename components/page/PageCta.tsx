import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PageCta({
  eyebrow,
  title,
  description,
  actionLabel = "Book a Meeting",
  actionHref = "/book-a-meeting",
  illustration,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  illustration?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-16 sm:px-8 lg:px-8 lg:pb-20">
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#031a29]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-32 w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[70px]" />
          <div className="absolute bottom-0 right-10 h-40 w-64 rounded-full bg-blue-600/15 blur-[70px]" />
        </div>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-40 0 C180 80 240 170 520 220" stroke="rgba(0,174,255,0.14)" />
          <path d="M1240 0 C980 80 920 170 680 220" stroke="rgba(0,174,255,0.14)" />
        </svg>
        <div className="relative z-10 px-6 py-10 text-center sm:px-10 sm:py-12">
          {illustration ? (
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[280px] opacity-40 lg:block">
              {illustration}
            </div>
          ) : null}
          <div className="relative mx-auto max-w-xl">
            {eyebrow ? (
              <p className="text-sm font-semibold text-cyan-300 sm:text-base">{eyebrow}</p>
            ) : null}
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-[#7f9cac]">{description}</p>
            ) : null}
            <Link
              href={actionHref}
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c9ed] to-[#3977f6] px-6 py-3 text-[13px] font-semibold text-[#03111b] shadow-[0_0_22px_rgba(0,174,255,0.28)] transition hover:scale-[1.02]"
            >
              {actionLabel}
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
