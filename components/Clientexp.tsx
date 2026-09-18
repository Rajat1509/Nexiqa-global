"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Nexiqa understood our requirements and delivered a website that was exactly what we needed. The team was professional, responsive and easy to work with.",
    name: "Avinash Sharma",
    role: "Managing Director, Nehal Academy",
  },
  {
    quote:
      "The Nexiqa team was great to work with. They understood our goals, communicated clearly and delivered a solution that made a real difference to our business.",
    name: "Nilesh Kumar",
    role: "Founder, Mechlergy",
  },
];

const faqs = [
  {
    question: "What services does Nexiqa Global provide?",
    answer:
      "Nexiqa Global provides website development, Shopify eCommerce development, custom application development, and ERP solutions for growing businesses.",
  },
  {
    question: "Do you work with existing websites and Shopify stores?",
    answer:
      "Yes. We work with existing websites and Shopify stores to improve their design, functionality, performance, user experience, and overall business experience.",
  },
  {
    question: "Can you build a website from scratch?",
    answer:
      "Yes. We can build your website from scratch, starting with understanding your business requirements and continuing through design, development, testing, and launch.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We provide ongoing technical support, maintenance, improvements, and development after your website or application has been launched.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Simply get in touch with us and tell us about your business and project requirements. We'll discuss your goals, recommend the right approach, and plan the next steps.",
  },
];

export default function TestimonialsFaq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonial = testimonials[activeTestimonial];

  const previousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((current) => (current === index ? null : index));
  };

  return (
    <section
      id="testimonials-faq"
      className="relative overflow-hidden border-t border-line bg-[#020f1d] py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />

      {/* Decorative background lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-100 80C180 150 270 390 620 500"
          stroke="rgba(0,174,255,0.10)"
          strokeWidth="1"
        />

        <path
          d="M1540 80C1260 150 1170 390 820 500"
          stroke="rgba(0,174,255,0.10)"
          strokeWidth="1"
        />
      </svg>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* =====================================================
              CLIENT STORIES
          ====================================================== */}
          <div>
            {/* Heading */}
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
                Client Stories
              </p>

              <h2 className="mt-3 max-w-md font-display text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-[42px]">
                Built with our clients,
                <br />
                not just for them.
              </h2>
            </div>

            {/* Testimonial Card */}
            <div className="relative min-h-[200px] overflow-hidden rounded-xl border border-cyan/10 bg-[#061b30] p-6 sm:min-h-[220px] sm:p-8">
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/10 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between">
                {/* Quote */}
                <p className="max-w-xl text-[15px] leading-7 text-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Client */}
                <div className="mt-7 flex items-center gap-3">
                  {/* Avatar */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-cyan/40 bg-[#0b2942]">
                    <span className="text-[10px] font-semibold text-cyan">
                      {testimonial.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>

                    <p className="mt-0.5 text-[13px] text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative quote marks */}
                <div className="pointer-events-none absolute bottom-0 right-1 flex items-end gap-1 text-cyan/10">
                  <span className="text-4xl leading-none">&rdquo;</span>
                  <span className="text-4xl leading-none">&rdquo;</span>
                </div>
              </div>
            </div>

            {/* Testimonial controls */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-cyan transition-colors hover:bg-cyan/10"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-cyan transition-colors hover:bg-cyan/10"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Slider dots */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === index
                        ? "w-5 bg-cyan"
                        : "w-1.5 bg-cyan/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              FAQ
          ====================================================== */}
          <div>
            {/* Heading */}
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-[42px]">
                Have questions? We&apos;ve got answers.
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-lg border bg-[#061b30] transition-all duration-300 ${
                      isOpen
                        ? "border-cyan/25"
                        : "border-cyan/10 hover:border-cyan/20"
                    }`}
                  >
                    {/* Question button */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-[14px] font-medium text-white">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center text-cyan transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={15} strokeWidth={2} />
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 text-[13px] leading-6 text-muted">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}