export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-8 lg:py-20 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#7f9cac]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function GlowCard({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`rounded-xl border border-cyan-500/20 bg-[#031a29]/90 shadow-[0_0_30px_rgba(0,140,255,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
