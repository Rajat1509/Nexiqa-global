"use client";

import Link from "next/link";
import React from "react";

function ShopifyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 7.5 7 21h10l1.5-13.5-3-1.5-1.5-3h-4l-1.5 3-3 1.5Z"
        fill="#95BF47"
      />
      <path
        d="M12 6c.8-1.5 1.6-2.3 2.4-2.3.5 0 .9.3 1.1.8"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 10c.9-.6 2-.8 3.1-.5 1.5.4 2.4 1.3 2.4 2.5 0 1.8-1.6 2.4-3.2 2.8-1.1.3-1.8.6-1.8 1.3 0 .5.5.8 1.2.8.8 0 1.7-.3 2.5-.8"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-black text-[12px] font-semibold text-white">
      N
    </div>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

function LaptopMockup() {
  return (
    <div className="relative mx-auto h-[350px] w-full max-w-[570px]">
      {/* Blue atmospheric glow */}
      <div className="absolute left-[30%] top-[12%] h-[250px] w-[280px] rounded-full bg-cyan-500/20 blur-[80px]" />

      <div className="absolute left-[10%] top-[18%] h-[210px] w-[430px] rotate-[-3deg] rounded-[50%] border border-cyan-500/20" />

      <div className="absolute right-[2%] top-[3%] h-[260px] w-[280px] rounded-full border border-blue-400/20" />

      {/* Laptop */}
      <div className="absolute left-[12%] top-[18%] z-10 w-[420px]">
        {/* Screen */}
        <div className="relative h-[235px] overflow-hidden rounded-[10px] border-[3px] border-[#071522] bg-[#020d18] shadow-[0_0_35px_rgba(0,157,255,0.35)]">
          {/* Screen glow */}
          <div className="absolute right-[-50px] top-[-50px] h-[200px] w-[200px] rounded-full bg-blue-500/20 blur-[60px]" />

          {/* Browser top bar */}
          <div className="relative flex h-7 items-center border-b border-cyan-900/40 bg-[#041421] px-3">
            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
            </div>

            <div className="mx-auto h-3 w-40 rounded bg-[#0b2435]" />
          </div>

          {/* Website content */}
          <div className="relative flex h-full">
            {/* Sidebar */}
            <div className="w-[82px] border-r border-cyan-900/30 bg-[#03111d] p-3">
              <div className="mb-5 h-2 w-12 rounded bg-cyan-400/50" />

              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className={`mb-3 h-1.5 rounded ${
                    item === 1
                      ? "w-12 bg-cyan-400/60"
                      : "w-9 bg-slate-600/50"
                  }`}
                />
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5">
              <div className="mb-2 text-[7px] uppercase tracking-[0.18em] text-cyan-400">
                Digital Solutions
              </div>

              <div className="max-w-[180px] text-[18px] font-semibold leading-[1.05] text-white">
                Better
                <br />
                Digital Solutions
                <br />
                <span className="text-cyan-400">for Your Business</span>
              </div>

              <div className="mt-3 h-1 w-32 rounded bg-slate-700" />
              <div className="mt-1 h-1 w-24 rounded bg-slate-700/70" />

              <button className="mt-4 rounded border border-cyan-400/50 bg-cyan-400/10 px-3 py-1 text-[6px] text-cyan-300">
                GET STARTED
              </button>

              {/* Cards */}
              <div className="mt-5 flex gap-2">
                <div className="h-12 w-20 rounded border border-cyan-800/40 bg-cyan-500/5" />
                <div className="h-12 w-20 rounded border border-cyan-800/40 bg-cyan-500/5" />
                <div className="h-12 w-20 rounded border border-cyan-800/40 bg-cyan-500/5" />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative mx-auto h-[12px] w-[470px] rounded-b-[60%] bg-gradient-to-b from-[#54778c] via-[#183649] to-[#06111a] shadow-[0_8px_25px_rgba(0,145,220,0.3)]">
          <div className="absolute left-1/2 top-0 h-[4px] w-[110px] -translate-x-1/2 rounded-b-full bg-[#87a6b6]/60" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-[5px] right-[8%] z-20 h-[145px] w-[73px] rounded-[11px] border-[3px] border-[#172b3a] bg-[#020a11] shadow-[0_0_25px_rgba(0,172,255,0.35)]">
        <div className="absolute left-1/2 top-[4px] h-[5px] w-[22px] -translate-x-1/2 rounded-full bg-black" />

        <div className="m-1.5 mt-3 h-[128px] overflow-hidden rounded-[6px] bg-[#061725]">
          <div className="h-5 border-b border-cyan-800/30 bg-[#092335]" />

          <div className="p-2">
            <div className="text-[6px] font-semibold text-white">
              Digital
              <br />
              Solutions
            </div>

            <div className="mt-2 h-1 w-10 rounded bg-cyan-400/60" />
            <div className="mt-1 h-1 w-7 rounded bg-slate-600" />

            <div className="mt-3 h-12 rounded border border-cyan-800/40 bg-cyan-500/5" />

            <div className="mt-2 h-1 w-12 rounded bg-slate-600" />
            <div className="mt-1 h-1 w-8 rounded bg-slate-700" />
          </div>
        </div>
      </div>

      {/* Shopify badge */}
      <div className="absolute left-[25%] top-[2%] z-30 flex items-center gap-2 rounded-lg border border-cyan-700/40 bg-[#031725]/90 px-3 py-2 shadow-[0_0_20px_rgba(0,153,255,0.15)] backdrop-blur">
        <ShopifyIcon />
        <span className="text-[10px] font-medium text-white">Shopify</span>
      </div>

      {/* Next.js badge */}
      <div className="absolute right-[11%] top-0 z-30 flex items-center gap-2 rounded-lg border border-cyan-700/40 bg-[#031725]/90 px-3 py-2 shadow-[0_0_20px_rgba(0,153,255,0.15)] backdrop-blur">
        <NextIcon />
        <span className="text-[9px] font-medium text-white">Next.js</span>
      </div>

      {/* Custom Apps badge */}
      <div className="absolute bottom-[42px] left-[5%] z-30 flex items-center gap-2 rounded-lg border border-cyan-700/40 bg-[#031725]/95 px-3 py-2 shadow-[0_0_20px_rgba(0,153,255,0.15)] backdrop-blur">
        <div className="text-cyan-400">
          <CodeIcon />
        </div>
        <span className="text-[9px] font-medium text-white">
          Custom Apps
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020d18] pt-[72px]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[52%] top-[-150px] h-[450px] w-[550px] rounded-full bg-blue-600/10 blur-[110px]" />

        <div className="absolute bottom-0 left-1/2 h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-700/40 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(0,112,190,0.12),transparent_35%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-[1280px] items-center px-6 py-16 sm:px-8 lg:min-h-[620px] lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* Left */}
          <div className="relative z-10 max-w-[580px]">
            {/* Eyebrow */}
            <div className="mb-4 font-mono text-[11px] font-bold tracking-[0.22em] text-cyan-400">
              WEB • COMMERCE • APPS • ERP
            </div>

            {/* Heading */}
            <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Turning ideas into
              <br />
              <span className="text-cyan-400 [text-shadow:0_0_25px_rgba(0,200,255,0.18)]">
                digital solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#7f9cac]">
              Nexiqa Global helps businesses turn ideas into high-performing
              digital experiences — from websites and Shopify stores to custom
              applications and ERP solutions. We design, build, and scale
              technology around the way your business works.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-[13px] font-semibold text-[#03111c] shadow-[0_0_25px_rgba(0,174,255,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(0,174,255,0.4)]"
              >
                Start a Project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-cyan-400/60 bg-[#031725]/40 px-6 py-3 text-[13px] font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/5"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Bottom statement */}
            <div className="mt-7 flex items-center gap-2 text-[13px] text-[#8ca2ae]">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M4 14c4.5-1 6.5-3 8-7 1.5 4 3.5 5.5 8 4" />
                <path d="M5 19c5-1 8-3 11-7" />
              </svg>

              <span>Powering businesses. Building futures.</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <LaptopMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
