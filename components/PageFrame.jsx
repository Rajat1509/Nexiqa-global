import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import CircuitField from "@/components/CircuitField";

export function PageFrame({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden grid-lines pt-32 sm:pt-40 pb-0">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <CircuitField />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-4xl pt-8 pb-16 sm:pb-20">
          <p className="eyebrow text-cyan mb-4">{eyebrow}</p>
          <h1 className="font-display font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-muted leading-relaxed text-base sm:text-lg max-w-2xl">
            {description}
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl mb-10">
      <p className="eyebrow text-cyan mb-3">{eyebrow}</p>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export function CTA() {
  return (
    <section className="relative mt-20 -mx-6 lg:-mx-10 overflow-hidden border-y border-line">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative px-6 lg:px-10 py-16 sm:py-20 text-center">
        <p className="eyebrow text-cyan mb-3">Let&apos;s work together</p>
        <h2 className="font-display font-semibold text-3xl sm:text-5xl">
          Let&apos;s build something extraordinary together.
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Tell us about your project and we&apos;ll come prepared with ideas,
          not just questions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-7 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
        >
          Start a Project <ArrowRight size={16} />
        </Link>
        <p className="mt-5 text-xs text-muted">Powering businesses. Building futures.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-black/20">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="font-display font-semibold tracking-wide">NEXIQA GLOBAL</div>
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">
              Technology that turns ideas into useful, scalable digital
              experiences.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="LinkedIn" className="text-muted hover:text-cyan"><Linkedin size={16} /></a>
              <a href="https://instagram.com/nexiqa.global" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted hover:text-cyan"><Instagram size={16} /></a>
              <a href="mailto:info@nexiqaglobal.com" aria-label="Email" className="text-muted hover:text-cyan"><Mail size={16} /></a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan mb-4">Services</p>
            <div className="space-y-2 text-sm text-muted">
              <Link href="/services">Website Development</Link>
              <Link href="/services">Shopify & Ecommerce</Link>
              <Link href="/services">Application Development</Link>
              <Link href="/services">UI/UX Design</Link>
              <Link href="/services">ERP Solutions</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan mb-4">Company</p>
            <div className="space-y-2 text-sm text-muted">
              <Link href="/about">About</Link>
              <Link href="/our-work">Our Work</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan mb-4">Contact</p>
            <div className="space-y-2 text-sm text-muted">
              <a href="mailto:info@nexiqaglobal.com">info@nexiqaglobal.com</a>
              <a href="https://instagram.com/nexiqa.global" target="_blank" rel="noreferrer">@nexiqa.global</a>
            </div>
          </div>
        </div>
        <div className="border-t border-line mt-10 pt-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} Nexiqa Global. All rights reserved.</span>
          <span>Privacy Policy &nbsp; | &nbsp; Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
