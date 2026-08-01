import { Rocket, ShieldCheck, TrendingUp, Headset } from "lucide-react";

const items = [
  { icon: Rocket, label: "Innovative Solutions" },
  { icon: ShieldCheck, label: "Reliable & Secure" },
  { icon: TrendingUp, label: "Scalable & Future Ready" },
  { icon: Headset, label: "Dedicated Support" },
];

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-elevated">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={20} className="text-cyan shrink-0" />
            <span className="text-sm text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
