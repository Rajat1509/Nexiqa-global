"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Handshake,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import { GlowCard } from "@/components/page/Section";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/lib/contact";

const services = [
  "Website Development",
  "Shopify eCommerce Development",
  "Application Development",
  "ERP Solutions",
  "Not sure yet",
];

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <GlowCard className="p-5 sm:p-7">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400">
          Get Started
        </p>
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Book a meeting</h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#7f9cac]">
          Fill in a few details and we&apos;ll get back to you with available
          time slots and a confirmation email.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            <Field label="Company name">
              <Input
                icon={<Building2 size={14} />}
                placeholder="Your company"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
              />
            </Field>
            <Field label="Service you're interested in">
              <Select
                icon={<MessageCircle size={14} />}
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Preferred date">
              <Input
                icon={<CalendarDays size={14} />}
                type="date"
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
              />
            </Field>
          </div>

          <Field label="Preferred time">
            <Select
              icon={<Clock3 size={14} />}
              value={form.time}
              onChange={(e) => updateField("time", e.target.value)}
            >
              <option value="">Select a time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Tell us about your project (optional)">
            <textarea
              rows={5}
              maxLength={500}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Share your goals, requirements, timeline, or any questions you have..."
              className="h-28 w-full resize-none rounded-lg border border-[#07517c] bg-[#05253a]/80 px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#5b7d93] focus:border-cyan-500/80"
            />
            <div className="mt-1 text-right text-[10px] text-slate-500">
              {form.message.length}/500
            </div>
          </Field>

          <button
            type="submit"
            disabled={submitted}
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-xs font-semibold text-[#00121f] transition hover:scale-[1.02] disabled:opacity-80"
          >
            {submitted ? (
              <>
                <CheckCircle2 size={15} />
                Meeting Booked
              </>
            ) : (
              <>
                <CalendarDays size={14} />
                Book Meeting
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>
      </GlowCard>

      <div className="flex flex-col gap-4">
        <GlowCard className="p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
              <CalendarDays size={16} />
            </div>
            <h2 className="text-base font-semibold text-white">What to expect</h2>
          </div>
          <div className="space-y-0">
            <InfoItem
              icon={<Clock3 size={15} />}
              title="A focused 30-minute call"
              description="to understand your goals and scope."
            />
            <InfoItem
              icon={<CalendarDays size={15} />}
              title="A follow-up email"
              description="with next steps and, where useful, a rough estimate."
            />
            <InfoItem
              icon={<Mail size={15} />}
              title="No obligation"
              description="It's a conversation, not a sales pitch."
              last
            />
          </div>
        </GlowCard>

        <GlowCard className="p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
              <Send size={16} />
            </div>
            <h2 className="text-base font-semibold text-white">
              Prefer to reach out directly?
            </h2>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:info@nexiqaglobal.com"
              className="flex items-start gap-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 text-cyan-400">
                <Mail size={14} />
              </div>
              <div>
                <p className="text-sm font-medium text-cyan-300">
                  info@nexiqaglobal.com
                </p>
                <p className="mt-0.5 text-xs text-[#7f9cac]">
                  We&apos;ll get back to you within 1 business day.
                </p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/nexiqa.global/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 text-cyan-400">
                <Instagram size={14} />
              </div>
              <div>
                <p className="text-sm font-medium text-cyan-300">@nexiqa.global</p>
                <p className="mt-0.5 text-xs text-[#7f9cac]">
                  Follow us for updates and insights.
                </p>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 text-cyan-400">
                <MessageCircle size={14} />
              </div>
              <div>
                <p className="text-sm font-medium text-cyan-300">WhatsApp</p>
                <p className="mt-0.5 text-xs text-[#7f9cac]">
                  Chat on WhatsApp.
                </p>
              </div>
            </a>
            <a href={TEL_URL} className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 text-cyan-400">
                <Phone size={14} />
              </div>
              <div>
                <p className="text-sm font-medium text-cyan-300">{PHONE_DISPLAY}</p>
                <p className="mt-0.5 text-xs text-[#7f9cac]">
                  Tap to call us directly.
                </p>
              </div>
            </a>
          </div>
        </GlowCard>

        <GlowCard className="flex items-center justify-between gap-3 p-5 sm:p-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-400">
              <Handshake size={16} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Have a unique requirement?
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#7f9cac]">
                Use the form or reach out directly — we&apos;re here to help.
              </p>
            </div>
          </div>
          <ArrowRight size={16} className="shrink-0 text-cyan-400" />
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
    <div className="min-w-0">
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
  icon,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { icon?: React.ReactNode }) {
  return (
    <div className="relative">
      {icon ? (
        <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-cyan-500">
          {icon}
        </span>
      ) : null}
      <select
        {...props}
        className="h-11 w-full appearance-none rounded-lg border border-[#07517c] bg-[#05253a]/80 px-3 pl-10 pr-9 text-sm text-slate-300 outline-none transition focus:border-cyan-500/80"
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

function InfoItem({
  icon,
  title,
  description,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div className={`flex gap-3 py-3 ${last ? "" : "border-b border-cyan-500/15"}`}>
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-200">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-[#7f9cac]">{description}</p>
      </div>
    </div>
  );
}
