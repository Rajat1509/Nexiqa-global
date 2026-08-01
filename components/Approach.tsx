const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We learn your business, your users, and what success looks like before any design or code work begins.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Interfaces and system architecture are planned together, so the product looks right and holds up under real use.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Clean, tested code shipped in focused iterations, with regular check-ins so there are no surprises at launch.",
  },
  {
    n: "04",
    title: "Support",
    desc: "Post-launch, we monitor, maintain, and extend the product as your business and its needs keep growing.",
  },
];

export default function Approach() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-cyan mb-4">How we work</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl">A process built for clarity</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.n} className="relative pl-6 border-l border-line md:pl-0 md:border-l-0">
              <div className="hidden md:block h-px w-full bg-line mb-8 relative">
                <div className="absolute -top-2 left-0 h-4 w-4 rounded-full bg-bg border-2 border-cyan" />
              </div>
              <p className="font-mono text-xs text-cyan mb-3">{step.n}</p>
              <h3 className="font-display font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
