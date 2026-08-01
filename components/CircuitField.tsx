export default function CircuitField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2B5CFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* static circuit paths */}
        <path d="M0 620 H260 L320 560 H540 L600 620 H860 L920 560 H1440" stroke="url(#lineGrad)" strokeWidth="1.5" />
        <path d="M0 180 H180 L240 240 H460 L520 180 H760" stroke="url(#lineGrad)" strokeWidth="1.5" />
        <path d="M1440 320 H1180 L1120 380 H900 L840 320 H620" stroke="url(#lineGrad)" strokeWidth="1.5" />

        {/* animated dashed traveling lines */}
        <path
          d="M0 620 H260 L320 560 H540 L600 620 H860 L920 560 H1440"
          stroke="#67E8F9"
          strokeWidth="2"
          strokeDasharray="6 14"
          className="animate-dash"
          opacity="0.8"
        />
        <path
          d="M1440 320 H1180 L1120 380 H900 L840 320 H620"
          stroke="#67E8F9"
          strokeWidth="2"
          strokeDasharray="6 14"
          className="animate-dash"
          opacity="0.6"
        />

        {/* nodes */}
        {[
          [260, 620], [540, 620], [860, 620], [920, 560],
          [240, 240], [520, 180],
          [1120, 380], [900, 320],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#22D3EE"
            className="animate-pulse-slow"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
