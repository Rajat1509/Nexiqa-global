export function GlobeLaptopIllustration() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[520px]">
      <div className="absolute right-[8%] top-[8%] h-[240px] w-[240px] rounded-full bg-cyan-500/15 blur-[70px]" />
      <svg viewBox="0 0 520 340" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <ellipse cx="330" cy="168" rx="150" ry="150" stroke="rgba(34,211,238,0.18)" />
        <ellipse cx="330" cy="168" rx="118" ry="118" stroke="rgba(34,211,238,0.28)" />
        <circle cx="330" cy="168" r="86" fill="url(#globeFill)" stroke="rgba(56,189,248,0.55)" />
        <ellipse cx="330" cy="168" rx="86" ry="28" stroke="rgba(125,211,252,0.35)" />
        <ellipse cx="330" cy="168" rx="34" ry="86" stroke="rgba(125,211,252,0.35)" />
        <path d="M260 140 C290 110 370 100 400 148 C410 168 390 198 350 210 C310 222 270 190 260 140Z" fill="rgba(14,165,233,0.35)" />
        <path d="M280 190 C310 210 360 220 390 188" stroke="rgba(165,243,252,0.4)" />
        <rect x="188" y="92" width="210" height="138" rx="10" fill="#041421" stroke="rgba(34,211,238,0.55)" />
        <rect x="198" y="102" width="190" height="108" rx="4" fill="#06253a" />
        <rect x="210" y="114" width="70" height="6" rx="2" fill="rgba(34,211,238,0.55)" />
        <rect x="210" y="128" width="120" height="4" rx="2" fill="rgba(148,163,184,0.35)" />
        <rect x="210" y="138" width="96" height="4" rx="2" fill="rgba(148,163,184,0.25)" />
        <rect x="210" y="160" width="52" height="22" rx="4" fill="rgba(34,211,238,0.18)" stroke="rgba(34,211,238,0.4)" />
        <path d="M188 232 H398 L418 248 H168 Z" fill="#1e3a4c" />
        <path d="M40 80 H120" stroke="rgba(34,211,238,0.4)" />
        <path d="M60 96 H150" stroke="rgba(59,130,246,0.35)" />
        <circle cx="120" cy="80" r="3" fill="#22D3EE" />
        <circle cx="150" cy="96" r="3" fill="#60A5FA" />
        <defs>
          <radialGradient id="globeFill" cx="0.35" cy="0.3" r="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#082f49" />
            <stop offset="100%" stopColor="#03111d" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export function DevicesIllustration() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[520px]">
      <div className="absolute right-[12%] top-[10%] h-[220px] w-[260px] rounded-full bg-blue-500/20 blur-[80px]" />
      <svg viewBox="0 0 520 340" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <rect x="90" y="48" width="300" height="196" rx="14" fill="#041421" stroke="rgba(34,211,238,0.5)" />
        <rect x="104" y="62" width="272" height="158" rx="6" fill="#06253a" />
        <rect x="118" y="76" width="80" height="6" rx="2" fill="rgba(34,211,238,0.5)" />
        <rect x="118" y="92" width="150" height="18" rx="3" fill="rgba(255,255,255,0.12)" />
        <rect x="118" y="120" width="110" height="4" rx="2" fill="rgba(148,163,184,0.3)" />
        <rect x="118" y="150" width="70" height="40" rx="6" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.3)" />
        <rect x="198" y="150" width="70" height="40" rx="6" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.25)" />
        <rect x="278" y="150" width="70" height="40" rx="6" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.25)" />
        <path d="M90 248 H390 L410 268 H70 Z" fill="#1e3a4c" />
        <rect x="368" y="118" width="86" height="154" rx="14" fill="#041421" stroke="rgba(34,211,238,0.55)" />
        <rect x="376" y="132" width="70" height="126" rx="6" fill="#06253a" />
        <rect x="386" y="146" width="40" height="5" rx="2" fill="rgba(34,211,238,0.5)" />
        <rect x="386" y="160" width="50" height="28" rx="4" fill="rgba(34,211,238,0.12)" />
      </svg>
    </div>
  );
}

export function CityIllustration() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[520px]">
      <div className="absolute right-[6%] top-[20%] h-[220px] w-[260px] rounded-full bg-cyan-500/18 blur-[80px]" />
      <svg viewBox="0 0 520 340" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <circle cx="360" cy="150" r="118" stroke="rgba(34,211,238,0.18)" />
        <rect x="210" y="90" width="52" height="160" rx="4" fill="#0b2940" stroke="rgba(34,211,238,0.35)" />
        <rect x="272" y="50" width="64" height="200" rx="4" fill="#08324d" stroke="rgba(34,211,238,0.5)" />
        <rect x="346" y="78" width="48" height="172" rx="4" fill="#0b2940" stroke="rgba(34,211,238,0.35)" />
        <rect x="404" y="118" width="42" height="132" rx="4" fill="#072436" stroke="rgba(34,211,238,0.3)" />
        {[0, 1, 2, 3, 4, 5].map((row) =>
          [0, 1].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={286 + col * 18}
              y={70 + row * 22}
              width="10"
              height="12"
              rx="1"
              fill="rgba(34,211,238,0.35)"
            />
          ))
        )}
        <path d="M180 250 H470" stroke="rgba(34,211,238,0.25)" />
        <path d="M40 120 H140" stroke="rgba(34,211,238,0.35)" />
        <circle cx="140" cy="120" r="3" fill="#22D3EE" />
      </svg>
    </div>
  );
}

export function EnvelopeIllustration() {
  return (
    <div className="relative mx-auto h-[280px] w-full max-w-[420px]">
      <div className="absolute right-8 top-8 h-[180px] w-[220px] rounded-full bg-cyan-400/15 blur-[50px]" />
      <svg viewBox="0 0 420 280" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <path d="M40 90 H170" stroke="rgba(34,211,238,0.4)" />
        <path d="M60 250 H200" stroke="rgba(59,130,246,0.3)" />
        <rect x="150" y="36" width="230" height="168" rx="12" fill="#041421" stroke="rgba(34,211,238,0.55)" />
        <rect x="164" y="50" width="202" height="128" rx="6" fill="#06253a" />
        <rect x="214" y="86" width="102" height="68" rx="6" fill="none" stroke="rgba(34,211,238,0.85)" strokeWidth="2" />
        <path d="M214 86 L265 120 L316 86" stroke="rgba(34,211,238,0.85)" strokeWidth="2" />
        <path d="M150 210 H380 L360 236 H170 Z" fill="#1e3a4c" />
      </svg>
    </div>
  );
}

export function PersonLaptopIllustration() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 280 160" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <ellipse cx="170" cy="90" rx="90" ry="50" fill="rgba(37,99,235,0.18)" />
        <rect x="70" y="48" width="90" height="58" rx="6" fill="#041421" stroke="rgba(34,211,238,0.45)" />
        <rect x="78" y="56" width="74" height="36" rx="3" fill="#06253a" />
        <path d="M64 108 H166 L176 118 H54 Z" fill="#1e3a4c" />
        <circle cx="214" cy="58" r="18" fill="#0b1c29" />
        <path d="M180 160 C180 110 248 110 248 160" fill="#0b1c29" />
      </svg>
    </div>
  );
}

export function PhonesIllustration() {
  return (
    <div className="relative h-[220px] w-full max-w-[260px]">
      <svg viewBox="0 0 260 220" className="h-full w-full" fill="none" aria-hidden="true">
        <rect x="40" y="18" width="92" height="176" rx="16" fill="#041421" stroke="rgba(34,211,238,0.5)" />
        <rect x="48" y="32" width="76" height="148" rx="6" fill="#06253a" />
        <rect x="56" y="44" width="40" height="6" rx="2" fill="rgba(34,211,238,0.5)" />
        <rect x="56" y="60" width="60" height="46" rx="6" fill="rgba(34,211,238,0.12)" />
        <rect x="118" y="38" width="92" height="176" rx="16" fill="#083047" stroke="rgba(96,165,250,0.55)" />
        <rect x="126" y="52" width="76" height="148" rx="6" fill="#0b3a55" />
        <rect x="134" y="64" width="44" height="6" rx="2" fill="rgba(125,211,252,0.7)" />
        <rect x="134" y="80" width="60" height="46" rx="6" fill="rgba(56,189,248,0.16)" />
      </svg>
    </div>
  );
}

export function CalendarMeetingIllustration() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[520px]">
      <div className="absolute right-[10%] top-[8%] h-[240px] w-[260px] rounded-full bg-cyan-500/20 blur-[80px]" />
      <svg viewBox="0 0 520 340" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <circle cx="360" cy="150" r="128" stroke="rgba(34,211,238,0.16)" />
        <circle cx="360" cy="150" r="96" stroke="rgba(34,211,238,0.12)" />
        <rect x="168" y="36" width="230" height="210" rx="18" fill="#041421" stroke="rgba(34,211,238,0.55)" />
        <rect x="180" y="50" width="206" height="182" rx="10" fill="#06253a" />
        <text x="198" y="76" fill="#67E8F9" fontSize="11" fontFamily="sans-serif">Choose a time</text>
        <rect x="198" y="90" width="92" height="78" rx="8" fill="rgba(14,165,233,0.12)" stroke="rgba(34,211,238,0.3)" />
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={206 + col * 20}
              y={100 + row * 16}
              width="12"
              height="10"
              rx="2"
              fill={row === 1 && col === 2 ? "#22D3EE" : "rgba(148,163,184,0.25)"}
            />
          ))
        )}
        <rect x="302" y="90" width="68" height="22" rx="11" fill="rgba(34,211,238,0.12)" />
        <rect x="302" y="118" width="68" height="22" rx="11" fill="#22D3EE" />
        <rect x="302" y="146" width="68" height="22" rx="11" fill="rgba(34,211,238,0.12)" />
        <rect x="302" y="174" width="68" height="22" rx="11" fill="rgba(34,211,238,0.12)" />
        <rect x="300" y="168" width="170" height="108" rx="10" fill="#041421" stroke="rgba(96,165,250,0.45)" />
        <rect x="312" y="180" width="146" height="72" rx="4" fill="#06253a" />
        <rect x="324" y="192" width="50" height="5" rx="2" fill="rgba(34,211,238,0.5)" />
        <rect x="324" y="204" width="90" height="4" rx="2" fill="rgba(148,163,184,0.3)" />
        <rect x="324" y="216" width="70" height="4" rx="2" fill="rgba(148,163,184,0.2)" />
        <path d="M300 278 H470 L482 292 H288 Z" fill="#1e3a4c" />
      </svg>
    </div>
  );
}

export function WebsitePreview({ seed = 1 }: { seed?: number }) {
  const accent = seed % 3 === 0 ? "#22d3ee" : seed % 3 === 1 ? "#60a5fa" : "#38bdf8";
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#041421]">
      <div className="flex h-6 items-center gap-1.5 border-b border-cyan-900/40 bg-[#03111d] px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
        <span className="ml-3 h-2 w-24 rounded bg-white/10" />
      </div>
      <div className="grid h-[calc(100%-24px)] grid-cols-[72px_1fr]">
        <div className="space-y-2 border-r border-cyan-900/30 bg-[#03111d] p-3">
          <div className="h-2 w-10 rounded" style={{ background: accent, opacity: 0.7 }} />
          <div className="h-1.5 w-8 rounded bg-white/15" />
          <div className="h-1.5 w-9 rounded bg-white/10" />
          <div className="h-1.5 w-7 rounded bg-white/10" />
        </div>
        <div className="p-4">
          <div className="h-2 w-16 rounded" style={{ background: accent, opacity: 0.8 }} />
          <div className="mt-3 h-6 w-32 rounded bg-white/20" />
          <div className="mt-2 h-2 w-40 rounded bg-white/10" />
          <div className="mt-4 flex gap-2">
            <div className="h-14 flex-1 rounded border border-cyan-500/20 bg-cyan-400/10" />
            <div className="h-14 flex-1 rounded border border-cyan-500/20 bg-cyan-400/5" />
            <div className="h-14 flex-1 rounded border border-cyan-500/20 bg-cyan-400/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
