import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageCta from "@/components/page/PageCta";
import PageShell from "@/components/page/PageShell";
import type { ServicePage } from "@/lib/services";

export default function ServiceDetail({ service }: { service: ServicePage }) {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 text-[13px] font-medium text-[#7f9cac]">
              <Link href="/services" className="text-cyan-400 hover:text-cyan-300">
                Services
              </Link>
              <span className="mx-2 text-[#3d5a6b]">/</span>
              <span className="text-white">{service.breadcrumb}</span>
            </p>

            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[52px]">
              {service.title}
              <br />
              <span className="text-cyan-400 [text-shadow:0_0_28px_rgba(0,200,255,0.2)]">
                {service.highlight}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#7f9cac]">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book-a-meeting"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10c9ed] to-[#3977f6] px-6 py-3 text-[13px] font-semibold text-[#03111b] shadow-[0_0_22px_rgba(0,174,255,0.28)] transition hover:scale-[1.02]"
              >
                Get Started
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-cyan-400/10"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {service.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-cyan-500/20 bg-[#031a29]/90 px-6 py-5 shadow-[0_0_30px_rgba(0,140,255,0.04)]"
              >
                <p className="text-base font-semibold text-white">{item.title}</p>
                {item.description ? (
                  <p className="mt-1 text-[13px] leading-6 text-[#7f9cac]">
                    {item.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-6 sm:px-8 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          What We Offer
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.offers.map((offer) => (
            <article
              key={offer.title}
              className="rounded-xl border border-cyan-500/20 bg-[#031a29]/90 p-6 transition hover:border-cyan-400/40"
            >
              <h3 className="text-base font-semibold text-white">{offer.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#7f9cac]">
                {offer.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-8 lg:py-20">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Our Process
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {service.process.map((step, index) => (
            <div key={step.title} className="relative">
              {index < service.process.length - 1 ? (
                <div className="pointer-events-none absolute left-11 top-5 hidden h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-cyan-500/40 to-transparent lg:block" />
              ) : null}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-[12px] font-semibold text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 max-w-[180px] text-[13px] leading-6 text-[#7f9cac]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PageCta title={service.ctaTitle} description={service.ctaDescription} />
    </PageShell>
  );
}
