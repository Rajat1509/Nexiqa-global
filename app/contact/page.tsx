import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import WhatWeWorkOn from "@/components/contact/WhatWeWorkOn";
import { PersonLaptopIllustration } from "@/components/page/Illustrations";
import PageCta from "@/components/page/PageCta";
import PageHero from "@/components/page/PageHero";
import PageShell from "@/components/page/PageShell";
import { Section } from "@/components/page/Section";

export const metadata: Metadata = {
  title: "Contact Us | Nexiqa Global",
  description:
    "Have a question, a project idea, or just want to say hello? Get in touch with Nexiqa Global.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        title="Let's get in touch"
        description="Have a question, a project idea, or just want to say hello? We’d love to hear from you. Fill out the form below and we’ll get back to you soon."
      />
      <Section className="pt-0">
        <ContactForm />
      </Section>
      <WhatWeWorkOn />
      <PageCta
        eyebrow="Your idea. Our expertise."
        title="Let’s build it together."
        actionLabel="Start a Project"
        actionHref="/book-a-meeting"
        illustration={<PersonLaptopIllustration />}
      />
    </PageShell>
  );
}
