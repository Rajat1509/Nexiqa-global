import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import CircuitField from "@/components/CircuitField";
import { Mail, Clock, CalendarCheck, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Meeting | Nexiqa Global",
  description:
    "Schedule a free consultation with Nexiqa Global to discuss your website, Shopify store, application, or ERP project.",
};

export default function BookAMeeting() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden grid-lines">
      <div className="absolute inset-0 bg-radial-glow" />
      <CircuitField />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-cyan mb-4">Let&apos;s talk</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl leading-tight">
            Book a meeting with our team
          </h1>
          <p className="mt-5 text-muted leading-relaxed max-w-xl">
            Share a few details about your project and preferred time. We&apos;ll confirm
            your consultation by email, usually within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          <BookingForm />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-surface p-8">
              <h2 className="font-display font-semibold text-lg mb-6">What to expect</h2>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <Clock size={18} className="text-cyan shrink-0 mt-0.5" />
                  <span className="text-sm text-muted">
                    A focused 30-minute call to understand your goals and scope.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CalendarCheck size={18} className="text-cyan shrink-0 mt-0.5" />
                  <span className="text-sm text-muted">
                    A follow-up email with next steps and, where useful, a rough estimate.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-cyan shrink-0 mt-0.5" />
                  <span className="text-sm text-muted">
                    No obligation &mdash; it&apos;s a conversation, not a sales pitch.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-8">
              <h2 className="font-display font-semibold text-lg mb-6">Prefer to reach out directly?</h2>
              <div className="space-y-4 text-sm">
                <a href="mailto:hello@nexiqa.global" className="flex items-center gap-3 text-muted hover:text-ink transition-colors">
                  <Mail size={16} className="text-cyan" /> info@nexiqaglobal.com
                </a>
                <a href="https://instagram.com/nexiqa.global" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-ink transition-colors">
                  <Instagram size={16} className="text-cyan" /> @nexiqa.global
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
