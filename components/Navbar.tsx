"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        h-[72px]
        border-b
        transition-all duration-300
        ${
          scrolled
            ? "border-[#0b2b3d] bg-[#020d18]/95 backdrop-blur-xl"
            : "border-[#092234] bg-[#020d18]/90"
        }
      `}
    >
      <nav className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 lg:px-8">
        {/* ───────────────── Logo ───────────────── */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/logo.png"
            alt="Nexiqa Global"
            width={38}
            height={38}
            priority
            className="
              h-[38px]
              w-[38px]
              rounded-full
              object-contain
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />

          <div className="flex items-center">
            <span
              className="
                text-[15px]
                font-semibold
                tracking-[0.03em]
                text-white
              "
            >
              NEXIQA
            </span>

            <span
              className="
                ml-1
                text-[15px]
                font-normal
                tracking-[0.03em]
                text-[#7d94a2]
              "
            >
              GLOBAL
            </span>
          </div>
        </Link>

        {/* ───────────────── Desktop Navigation ───────────────── */}
        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative
                  text-[13px]
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-white
                  ${isActive ? "text-white" : "text-[#8298a6]"}
                `}
              >
                {link.label}
                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    bg-cyan-400
                    transition-all
                    duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* ───────────────── CTA ───────────────── */}
        <div className="hidden md:block">
          <Link
            href="/book-a-meeting"
            className="
              group
              inline-flex
              h-10
              items-center
              gap-1.5
              rounded-full
              bg-gradient-to-r
              from-[#10c9ed]
              to-[#3977f6]
              px-5
              text-[13px]
              font-semibold
              text-[#03111b]
              shadow-[0_0_20px_rgba(0,174,255,0.25)]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_28px_rgba(0,174,255,0.4)]
            "
          >
            Book a Meeting

            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* ───────────────── Mobile Button ───────────────── */}
        <button
          type="button"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-[#123448]
            bg-[#061725]
            text-white
            md:hidden
          "
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* ───────────────── Mobile Menu ───────────────── */}
      {open && (
        <div
          className="
            border-b
            border-[#0b2b3d]
            bg-[#020d18]/98
            px-6
            py-5
            shadow-[0_15px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            md:hidden
          "
        >
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  border-b
                  border-[#0b2535]
                  py-3.5
                  text-sm
                  font-medium
                  text-[#849ba8]
                  transition-colors
                  hover:text-cyan-400
                "
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/book-a-meeting"
              onClick={() => setOpen(false)}
              className="
                mt-5
                inline-flex
                h-10
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#10c9ed]
                to-[#3977f6]
                text-sm
                font-semibold
                text-[#03111b]
                shadow-[0_0_20px_rgba(0,174,255,0.2)]
              "
            >
              Book a Meeting
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
