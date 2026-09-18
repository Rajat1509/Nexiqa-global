export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020d18] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-120px] h-[280px] w-[640px] -translate-x-1/2 rounded-full bg-[#006dff]/12 blur-[110px]" />
        <div className="absolute right-[-80px] top-[18%] h-[320px] w-[320px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
        <div className="absolute bottom-[-120px] left-1/2 h-[280px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,150,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,150,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute left-0 top-[22%] h-px w-44 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute right-0 top-[48%] h-px w-40 bg-gradient-to-l from-transparent via-blue-500/25 to-transparent" />
        <span className="absolute left-[8%] top-[42%] h-1 w-1 rounded-full bg-cyan-400" />
        <span className="absolute right-[10%] top-[16%] h-1 w-1 rounded-full bg-blue-400" />
      </div>
      <div className="relative pt-[72px]">{children}</div>
    </div>
  );
}
