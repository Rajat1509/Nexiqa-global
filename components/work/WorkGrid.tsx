"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GlowCard, Section } from "@/components/page/Section";

const filters = ["All", "Web Development", "Shopify", "Mobile App", "UI/UX", "ERP"];

function toProjectHref(slug: string) {
  const value = slug.trim();
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value.replace(/^\/+/, "")}`;
}

const projects = [
  {
    title: "Sotbella",
    slug: "https://sotbella.com/",
    category: "Web Development",
    description: "A refined fashion e-commerce experience designed to showcase Sotbella’s collections while creating a seamless, intuitive shopping journey. Built around the brand’s aesthetic, products, and customers to drive engagement and conversions.",
    type: "photo" as const,
    image: "/images/sotbella.jpg",
  },
  {
    title: "Mechlergy",
    slug: "www.researchmaterials.in",
    category: "Web Development",
    description: "A professional digital platform for a research materials company, designed to showcase its products, capabilities, and industry expertise. Built with a clear, modern interface that helps visitors explore offerings and connect with the business.",
    type: "photo" as const,
    image: "/images/mechlergy.jpg",
    objectPosition: "object-top",
  },
  {
    title: "Sterling Tools Limited",
    slug: "https://stlfasteners.com/",
    category: "Web Development",
    description: "A modern corporate website built for Sterling Tools, showcasing its expertise in fasteners, EV mobility solutions, manufacturing capabilities, and global presence. Designed to communicate the company’s scale, innovation, sustainability, and industry leadership through a structured digital experience.",
    type: "photo" as const,
    image: "/images/sterling-tools.jpg",
    objectPosition: "object-top",
  },
  {
    title: "Surya EU",
    slug: "https://surya.eu/",
    category: "Web Development",
    description: "A visually engaging e-commerce experience for Surya, designed to showcase its diverse rug collections with a premium, home-focused aesthetic. Built around intuitive product discovery, rich collections, and a seamless shopping journey that makes finding the perfect rug effortless.",
    type: "photo" as const,
    image: "/images/surya-eu.jpg",
  },
  {
    title: "Make Your Label",
    slug: "https://makeyourlabel.com/",
    category: "Web Development",
    description: "A custom digital solution designed to simplify business operations and improve efficiency, built around the way the team actually works day to day.",
    type: "photo" as const,
    image: "/images/make-your-label.jpg",
  },
  {
    title: "Surya Living",
    slug: "https://suryaliving.com/",
    category: "Shopify",
    description: "A premium Shopify e-commerce experience built for Surya Living, designed to showcase its extensive collection of rugs and home décor products. Crafted with an elegant, product-focused interface that makes browsing, discovery, and shopping seamless across devices.",
    type: "photo" as const,
    image: "/images/surya-living.jpg",
  },
  {
    title: "Tanz",
    slug: "https://tanzuk.com/",
    category: "Shopify",
    description: "A fashion-forward e-commerce experience for Tanzuk, designed to showcase its apparel collections through a bold, modern, and visually immersive storefront. Built to reflect the brand’s identity while delivering a smooth product discovery and shopping experience across devices.",
    type: "photo" as const,
    image: "/images/tanz.jpg",
  },
  {
    title: "Savoirvivree",
    slug: "https://savoirvivree.co/",
    category: "Shopify",
    description: "A refined fashion e-commerce experience for Savoir Vivree, designed to bring the brand’s distinctive apparel collections to life through a sophisticated and editorial storefront. Built around strong visual storytelling, effortless product discovery, and a seamless shopping journey.",
    type: "photo" as const,
    image: "/images/savoirvivree.jpg",
  },
  {
    title: "Sareta Ardore",
    slug: "https://saretaardore.com/",
    category: "Shopify",
    description: "A sophisticated fashion e-commerce experience for Sareta Ardore, designed around modern luxury and timeless apparel. Built with an elegant, product-focused storefront that highlights the collection while delivering a seamless and premium shopping journey.",
    type: "photo" as const,
    image: "/images/sareta-ardore.jpg",
  },
  {
    title: "Gyros Farm",
    slug: "https://www.gyros.farm/",
    category: "Shopify",
    description: "A premium D2C e-commerce experience for Gyros Organic Farms, bringing together traditional A2 ghee, cold-pressed oils, authentic spices, and natural farm products. Designed with a clean, earthy aesthetic that highlights product purity, traditional sourcing, and a seamless shopping experience.",
    type: "photo" as const,
    image: "/images/gyros-farm.jpg",
  },
  {
    title: "Ventour",
    slug: "https://ventourgroup.com/",
    category: "Shopify",
    description: "A premium fashion e-commerce experience for VENTOUR, bringing together contemporary collections from multiple designer brands under one sophisticated storefront. Designed with a strong editorial aesthetic to showcase statement pieces, curated collections, and a seamless shopping journey.",
    type: "photo" as const,
    image: "/images/ventour.jpg",
  },
];

function ProjectArrow({ href, title }: { href: string; title: string }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${title} website`}
      className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/50 bg-[#021018]/85 text-cyan-300 shadow-[0_0_16px_rgba(0,174,255,0.28)] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-400 hover:text-[#021018]"
    >
      <ArrowUpRight size={16} strokeWidth={2.4} />
    </a>
  );
}

export default function WorkGrid() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <Section>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full border px-3.5 py-1.5 text-[11px] font-medium transition ${
                isActive
                  ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                  : "border-cyan-500/20 bg-[#031a29] text-[#8aa0ad] hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visible.length === 0 ? (
          <GlowCard className="col-span-full px-5 py-10 text-center">
            <p className="text-sm text-[#7f9cac]">
              No projects in this category yet. Check back soon, or start a conversation about yours.
            </p>
          </GlowCard>
        ) : (
          visible.map((project) => (
          <GlowCard
            key={project.title}
            className="group overflow-hidden transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <div className="relative mx-2 mt-2 aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition duration-500 group-hover:scale-[1.03] ${
                  "objectPosition" in project && project.objectPosition
                    ? project.objectPosition
                    : "object-center"
                }`}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative px-5 py-4 pr-14">
              <ProjectArrow href={toProjectHref(project.slug)} title={project.title} />
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-400">
                {project.category}
              </p>
              <h3 className="mt-1.5 text-base font-semibold text-white">{project.title}</h3>
              <p className="mt-1.5 max-w-md text-[13px] leading-6 text-[#7f9cac]">
                {project.description}
              </p>
            </div>
          </GlowCard>
          ))
        )}
      </div>
    </Section>
  );
}
