import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import BookingProcess, { bookingHighlights } from "@/components/booking/BookingProcess";
import { CalendarMeetingIllustration } from "@/components/page/Illustrations";
import PageHero from "@/components/page/PageHero";
import PageShell from "@/components/page/PageShell";
import { Section } from "@/components/page/Section";

export const metadata: Metadata = {
  title: "Book a Meeting | Nexiqa Global",
  description:
    "Schedule a free consultation with Nexiqa Global to discuss your website, Shopify store, application, or ERP project.",
};

export default function BookAMeeting() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Book a Meeting"
        title="Let's discuss your"
        highlight="next big idea"
        description="Schedule a free consultation with our team to talk about your website, Shopify store, application, or ERP project. We'll understand your goals, share our expertise, and suggest the best way forward."
        illustration={<CalendarMeetingIllustration />}
      >
        <div className="mt-6 flex flex-wrap gap-5">
          {bookingHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <Icon size={16} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-[11px] text-[#7f9cac]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </PageHero>

      <Section className="pt-6">
        <BookingForm />
      </Section>

      <BookingProcess />
    </PageShell>
  );
}
