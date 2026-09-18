import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function toProjectHref(slug: string) {
  const value = slug.trim();
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value.replace(/^\/+/, "")}`;
}

const projects = [
  {
    category: "E-commerce",
    service: "Website Development",
    title: "Sotbella",
    slug: "https://sotbella.com/",
    description:
      "A refined fashion e-commerce experience designed to showcase Sotbella’s collections while creating a seamless, intuitive shopping journey. Built around the brand’s aesthetic, products, and customers to drive engagement and conversions.",
    image: "/images/sotbella.jpg",
  },
  {
    category: "E-commerce",
    service: "Shopify Development",
    title: "Surya Living",
    slug: "https://suryaliving.com/",
    description:
      "A conversion-focused Shopify experience designed around the brand's products and customers.",
    image: "/images/surya-living.jpg",
  },
  {
    category: "Business Software",
    service: "Web Application Development",
    title: "Make Your Label",
    slug: "https://makeyourlabel.com/",
    description:
      "A custom digital solution designed to simplify business operations and improve efficiency.",
    image: "/images/make-your-label.jpg",
  },
];

export default function SelectedWork() {
  return (
    <section className="w-full bg-[#020d18] py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              SELECTED WORK
            </p>

            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Ideas we&apos;ve turned into reality
            </h2>

            <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-slate-400">
              From business websites to eCommerce experiences and custom
              applications, we build digital products designed around real
              business needs.
            </p>
          </div>

          <Link
            href="/work"
            className="hidden shrink-0 items-center gap-2 pb-1 text-[13px] font-semibold text-cyan-400 transition-colors hover:text-cyan-300 sm:flex"
          >
            View All Projects
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-cyan-500/20 bg-[#031a29] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_40px_rgba(0,180,255,0.08)]"
            >
              <div className="relative mx-2.5 mt-2.5 aspect-[16/10] overflow-hidden rounded-lg bg-[#052033]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="relative px-5 pb-6 pt-4 pr-14">
                <a
                  href={toProjectHref(project.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website`}
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/50 bg-[#021018]/85 text-cyan-300 shadow-[0_0_16px_rgba(0,174,255,0.28)] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-400 hover:text-[#021018]"
                >
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </a>

                <div className="mb-2 flex flex-wrap items-center gap-2 text-[12px] text-slate-400">
                  <span>{project.category}</span>
                  <span className="text-cyan-500/50">•</span>
                  <span>{project.service}</span>
                </div>

                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-slate-400">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400"
          >
            View All Projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
