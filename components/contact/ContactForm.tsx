"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import { GlowCard } from "@/components/page/Section";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/lib/contact";

const serviceOptions = [
  "Website Development",
  "Shopify & eCommerce",
  "Application Development",
  "UI/UX Design",
  "ERP Solutions",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <GlowCard className="p-5 sm:p-6">
        <h2 className="text-base font-semibold text-white">Send us a message</h2>
        <p className="mt-1 text-xs leading-relaxed text-[#7f9cac]">
          Tell us what you&apos;re working on and we&apos;ll get back to you as
          soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <Field label="Your name" required>
            <Input
              icon={<User size={14} />}
              placeholder="John Doe"
              required
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </Field>
          <Field label="Email address" required>
            <Input
              icon={<Mail size={14} />}
              type="email"
              placeholder="john@example.com"
              required
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </Field>
          <Field label="Phone number">
            <Input
              icon={<Phone size={14} />}
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </Field>
          <Field label="Service">
            <Select
              value={form.service}
              onChange={(e) => updateField("service", e.target.value)}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Tell us about your project" required>
            <textarea
              required
              rows={5}
              maxLength={500}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Share your requirements, goals, timeline..."
              className="h-28 w-full resize-none rounded-lg border border-[#07517c] bg-[#05253a]/80 px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#5b7d93] focus:border-cyan-500/80"
            />
            <div className="mt-1 text-right text-[10px] text-slate-500">
              {form.message.length}/500
            </div>
          </Field>
          <button
            type="submit"
            disabled={submitted}
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 text-xs font-semibold text-[#00121f] transition hover:scale-[1.02] disabled:opacity-80"
          >
            {submitted ? (
              <>
                <CheckCircle2 size={14} />
                Message Sent
              </>
            ) : (
              <>
                <Send size={13} />
                Send Message
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>
      </GlowCard>

      <div className="flex flex-col gap-4">
        <GlowCard className="p-5 sm:p-6">
          <h2 className="mb-5 text-base font-semibold text-white">Contact information</h2>
          <div className="space-y-4">
            <InfoRow
              icon={<Mail size={15} />}
              title="Email"
              value="info@nexiqaglobal.com"
              href="mailto:info@nexiqaglobal.com"
            />
            <InfoRow
              icon={<MessageCircle size={15} />}
              title="WhatsApp"
              value="Chat on WhatsApp"
              href={WHATSAPP_URL}
              external
            />
            <InfoRow
              icon={<Phone size={15} />}
              title="Call"
              value={PHONE_DISPLAY}
              href={TEL_URL}
            />
            <InfoRow
              icon={<Instagram size={15} />}
              title="Instagram"
              value="@nexiqa.global"
              href="https://www.instagram.com/nexiqa.global/"
              external
            />
            <InfoRow
              icon={<Clock3 size={15} />}
              title="Response time"
              value="Usually within one business day"
            />
          </div>
        </GlowCard>
        <GlowCard className="p-5 sm:p-6">
          <h2 className="text-base font-semibold text-white">Prefer a quick chat?</h2>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-[#7f9cac]">
            Book a meeting with us to discuss your project in detail.
          </p>
          <Link
            href="/book-a-meeting"
            className="mt-4 inline-flex h-9 items-center gap-2 rounded-full border border-cyan-400 px-4 text-xs font-medium text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Book a Meeting
            <ArrowRight size={13} />
          </Link>
        </GlowCard>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-300">
        {label}
        {required ? <span className="ml-0.5 text-cyan-400">*</span> : null}
      </label>
      {children}
    </div>
  );
}

function Input({
  icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) {
  return (
    <div className="relative">
      {icon ? (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500">
          {icon}
        </span>
      ) : null}
      <input
        {...props}
        className="h-11 w-full rounded-lg border border-[#07517c] bg-[#05253a]/80 pl-10 pr-3 text-sm text-white outline-none placeholder:text-[#5b7d93] transition focus:border-cyan-500/80"
      />
    </div>
  );
}

function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        {...props}
        className="h-11 w-full appearance-none rounded-lg border border-[#07517c] bg-[#05253a]/80 px-3 pr-9 text-sm text-slate-300 outline-none transition focus:border-cyan-500/80"
      >
        {children}
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cyan-500"
      />
    </div>
  );
}

function InfoRow({
  icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-slate-200">{title}</p>
        <p className="mt-0.5 text-xs text-[#7f9cac]">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 transition-colors hover:text-white"
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3">{content}</div>;
}
