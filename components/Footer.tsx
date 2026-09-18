"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Mail,
  Facebook,
  Linkedin,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

type FooterSectionProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

function FooterSection({
  title,
  children,
  isOpen,
  onToggle,
}: FooterSectionProps) {
  return (
    <div className="footer-menu-group py-4 sm:py-0">

      {/* Mobile / Tablet Accordion Header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
          w-full
          items-center
          justify-between
          lg:block
          text-left
        "
      >
        <span className="eyebrow text-cyan">
          {title}
        </span>

        {/* Chevron only visible below desktop */}
        <ChevronDown
          size={17}
          className={`
            lg:hidden
            text-muted
            transition-transform
            duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Menu */}
      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          lg:block
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0 mt-0 lg:opacity-100 lg:mt-4"
          }
        `}
      >
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  /*
   * null = all accordion sections closed
   * "services" etc. = currently opened section
   */
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <footer
      id="contact"
      className="border-t border-line bg-elevated"
    >
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-6
          sm:px-8
          lg:px-8
          pt-12
          sm:pt-14
          lg:pt-12
          pb-5
        "
      >

        {/* =========================================
            MAIN FOOTER
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.6fr_1fr_1fr_1.35fr]
            gap-x-8
            lg:gap-x-10
            gap-y-2
            sm:gap-y-8
            lg:gap-y-0
          "
        >

          {/* =========================================
              BRAND
          ========================================== */}

          <div
            className="
              pb-8
              sm:pb-0
              lg:pr-6
            "
          >
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="Nexiqa Global"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-contain"
              />

              <span
                className="
                  font-display
                  font-semibold
                  text-[15px]
                  tracking-tight
                  text-ink
                "
              >
                NEXIQA{" "}
                <span className="font-normal text-muted">
                  GLOBAL
                </span>
              </span>
            </div>

            <p className="text-xs leading-relaxed text-muted max-w-[220px]">
              Powering businesses. Building futures.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-muted max-w-[220px]">
              Digital solutions for businesses ready to
              build, improve and scale.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  text-muted
                  hover:text-cyan
                  transition-colors
                "
              >
                <Linkedin size={16} strokeWidth={1.8} />
              </a>

              <a
                href="https://www.instagram.com/nexiqa.global/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  text-muted
                  hover:text-cyan
                  transition-colors
                "
              >
                <Instagram size={16} strokeWidth={1.8} />
              </a>

              {/* X */}
              <a
                href="https://x.com/NexiqaGlobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="
                  text-muted
                  hover:text-cyan
                  transition-colors
                "
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/nexiqa.global/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  text-muted
                  hover:text-cyan
                  transition-colors
                "
              >
                <Facebook size={16} strokeWidth={1.8} />
              </a>

            </div>
          </div>


          {/* =========================================
              SERVICES
          ========================================== */}

          <FooterSection
            title="Services"
            isOpen={openSection === "services"}
            onToggle={() => toggleSection("services")}
          >
            <ul className="space-y-2.5 text-xs text-muted">

              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-ink transition-colors"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/shopify-development"
                  className="hover:text-ink transition-colors"
                >
                  Shopify Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/application-development"
                  className="hover:text-ink transition-colors"
                >
                  Application Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/erp-solutions"
                  className="hover:text-ink transition-colors"
                >
                  ERP Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="hover:text-ink transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>

              <li>
                <Link
                  href="/services/support-maintenance"
                  className="hover:text-ink transition-colors"
                >
                  Support & Maintenance
                </Link>
              </li>

            </ul>
          </FooterSection>


          {/* =========================================
              COMPANY
          ========================================== */}

          <FooterSection
            title="Company"
            isOpen={openSection === "company"}
            onToggle={() => toggleSection("company")}
          >
            <ul className="space-y-2.5 text-xs text-muted">

              <li>
                <Link
                  href="/about"
                  className="hover:text-ink transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/work"
                  className="hover:text-ink transition-colors"
                >
                  Our Work
                </Link>
              </li>

              <li>
                <Link
                  href="/#process"
                  className="hover:text-ink transition-colors"
                >
                  Our Process
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-ink transition-colors"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </FooterSection>


          {/* =========================================
              CONNECT
          ========================================== */}

          <FooterSection
            title="Connect"
            isOpen={openSection === "connect"}
            onToggle={() => toggleSection("connect")}
          >
            <ul className="space-y-3 text-xs text-muted">

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/nexiqa.global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-ink
                    transition-colors
                  "
                >
                  <Instagram
                    size={14}
                    className="text-cyan shrink-0"
                    strokeWidth={1.8}
                  />

                  <span>
                    @nexiqa.global
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@nexiqaglobal.com"
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-ink
                    transition-colors
                  "
                >
                  <Mail
                    size={14}
                    className="text-cyan shrink-0"
                    strokeWidth={1.8}
                  />

                  <span className="break-all">
                    info@nexiqaglobal.com
                  </span>
                </a>
              </li>

              {/* Website */}
              <li>
                <a
                  href="https://www.nexiqaglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-ink
                    transition-colors
                  "
                >
                  <Globe
                    size={14}
                    className="text-cyan shrink-0"
                    strokeWidth={1.8}
                  />

                  <span>
                    www.nexiqaglobal.com
                  </span>
                </a>
              </li>

            </ul>
          </FooterSection>

        </div>


        {/* =========================================
            BOTTOM BAR
        ========================================== */}

        <div
          className="
            mt-8
            sm:mt-10
            pt-5
            border-t
            border-line
          "
        >
          <div className="flex items-center justify-center text-center sm:justify-start sm:text-left">
            <p className="text-[10px] sm:text-xs text-muted">
              © {new Date().getFullYear()} Nexiqa Global.
              All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}