"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  "Website Development",
  "Shopify eCommerce Development",
  "Application Development",
  "ERP Solutions",
  "Not sure yet",
];

const timeSlots = [
  "Morning (9am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Evening (4pm - 7pm)",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setLoading(true);
  //   // Simulated submission — connect to your booking/email backend here.
  //   setTimeout(() => {
  //     setLoading(false);
  //     setSubmitted(true);
  //   }, 700);
  // }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      preferredDate: (form.elements.namedItem("date") as HTMLInputElement).value,
      preferredTime: (form.elements.namedItem("time") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch(
        "https://rajat-gaur.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to send request."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-surface p-10 flex flex-col items-center text-center">
        <CheckCircle2 size={40} className="text-cyan mb-5" />
        <h2 className="font-display font-semibold text-xl mb-2">Request received</h2>
        <p className="text-sm text-muted max-w-sm">
          Thanks for reaching out. A member of the Nexiqa Global team will confirm your
          meeting time by email shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-surface p-8 sm:p-10 space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Jane Doe"
            className="input"
          />
        </Field>
        <Field label="Email address" htmlFor="email">
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="jane@company.com"
            className="input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company name"
            className="input"
          />
        </Field>
        <Field label="Phone (optional)" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 00000 00000"
            className="input"
          />
        </Field>
      </div>

      <Field label="What are you looking to build?" htmlFor="service">
        <select id="service" name="service" required defaultValue="" className="input">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Preferred date" htmlFor="date">
          <input id="date" name="date" type="date" className="input" />
        </Field>
        <Field label="Preferred time" htmlFor="time">
          <select id="time" name="time" defaultValue="" className="input">
            <option value="" disabled>
              Select a time
            </option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about your project" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A brief overview of your goals, timeline, or anything else we should know."
          className="input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-medium text-bg shadow-glow hover:shadow-glow-strong transition-shadow disabled:opacity-60"
      >
        {loading ? "Sending..." : "Request Meeting"}
        {!loading && <ArrowRight size={16} />}
      </button>

      <style jsx global>{`
        .input {
          width: 100%;
          background: #0a0f1c;
          border: 1px solid rgba(110, 170, 255, 0.14);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #f4f7fb;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .input::placeholder {
          color: #556075;
        }
        .input:focus {
          border-color: rgba(34, 211, 238, 0.5);
        }
        select.input {
          color-scheme: dark;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs text-muted mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
