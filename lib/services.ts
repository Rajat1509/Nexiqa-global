export type ServiceHighlight = {
  title: string;
  description?: string;
};

export type ServiceOffer = {
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServicePage = {
  slug: string;
  name: string;
  breadcrumb: string;
  title: string;
  highlight: string;
  description: string;
  metaDescription: string;
  highlights: ServiceHighlight[];
  offers: ServiceOffer[];
  process: ServiceStep[];
  ctaTitle: string;
  ctaDescription: string;
};

export const services: ServicePage[] = [
  {
    slug: "web-development",
    name: "Website Development",
    breadcrumb: "Website Development",
    title: "Modern Websites for",
    highlight: "Growing Businesses.",
    description:
      "We build fast, secure and scalable websites that represent your brand, engage your customers and deliver real business results. From simple landing pages to complex web platforms, we've got you covered.",
    metaDescription:
      "Custom, high-performance websites from Nexiqa Global — designed to represent your brand, convert visitors and grow with your business.",
    highlights: [
      { title: "Beautiful Design." },
      { title: "Powerful Performance." },
      { title: "Real Results." },
    ],
    offers: [
      {
        title: "Custom Website Development",
        description:
          "Tailored, unique and future-ready websites for your brand.",
      },
      {
        title: "CMS Development",
        description: "WordPress, Webflow and headless CMS solutions.",
      },
      {
        title: "E-commerce Websites",
        description: "Custom storefronts designed to sell and grow.",
      },
      {
        title: "Website Redesign",
        description: "Modernize your site for better performance and UX.",
      },
      {
        title: "Landing Pages",
        description: "High-converting pages for your campaigns and products.",
      },
      {
        title: "Website Maintenance",
        description: "Keep your website secure, updated and running smoothly.",
      },
    ],
    process: [
      {
        title: "Discover",
        description: "Understand your goals and audience.",
      },
      {
        title: "Plan",
        description: "Create a clear roadmap and architecture.",
      },
      {
        title: "Design",
        description: "Craft intuitive and beautiful UX/UI designs.",
      },
      {
        title: "Develop",
        description: "Build with clean, scalable code.",
      },
      {
        title: "Launch",
        description: "Test, optimize and go live.",
      },
    ],
    ctaTitle: "Let's build a website that works for your business.",
    ctaDescription:
      "Get in touch today and take the first step towards your digital presence.",
  },
  {
    slug: "shopify-development",
    name: "Shopify eCommerce Development",
    breadcrumb: "Shopify eCommerce Development",
    title: "Build Your Dream Store",
    highlight: "on Shopify.",
    description:
      "We create high-converting Shopify stores that are beautiful, secure and optimized for sales. From custom themes to advanced integrations, we help turn your products into a thriving business.",
    metaDescription:
      "High-converting Shopify stores from Nexiqa Global — custom themes, apps, migrations and ongoing support built to sell.",
    highlights: [
      { title: "More Sales." },
      { title: "Better Experiences." },
      { title: "Built on Shopify." },
    ],
    offers: [
      {
        title: "Custom Shopify Stores",
        description: "Unique, high-converting stores tailored to your brand.",
      },
      {
        title: "Theme Customization",
        description: "Modify existing themes or build custom themes from scratch.",
      },
      {
        title: "App Integration",
        description:
          "Add powerful features with Shopify apps and third-party integrations.",
      },
      {
        title: "Migration to Shopify",
        description: "Move from any platform seamlessly with zero data loss.",
      },
      {
        title: "Shopify Plus",
        description: "Enterprise-grade solutions for high-growth brands.",
      },
      {
        title: "Ongoing Support",
        description: "Keep your store secure, updated and performing.",
      },
    ],
    process: [
      {
        title: "Discover",
        description: "Understand your business goals and online needs.",
      },
      {
        title: "Design",
        description: "Plan the store structure, UX and aesthetics.",
      },
      {
        title: "Develop",
        description: "Build, customize and integrate apps & themes.",
      },
      {
        title: "Launch",
        description: "Ensure performance, security and functionality.",
      },
      {
        title: "Test",
        description: "Go live, train your team, and provide ongoing support.",
      },
    ],
    ctaTitle: "Ready to grow your online business?",
    ctaDescription: "Let's create a Shopify store that sells.",
  },
  {
    slug: "application-development",
    name: "Application Development",
    breadcrumb: "Application Development",
    title: "Custom Applications for",
    highlight: "Real Business Needs.",
    description:
      "We build scalable, secure and high-performance applications that solve real problems. From mobile apps to enterprise systems, we turn your ideas into powerful digital products.",
    metaDescription:
      "Custom web and mobile applications from Nexiqa Global — built around your workflows, data and growth plans.",
    highlights: [
      { title: "Scalable." },
      { title: "Secure." },
      { title: "Built for Growth." },
    ],
    offers: [
      {
        title: "Web Applications",
        description: "Custom dashboards and web apps for any industry.",
      },
      {
        title: "Mobile Applications",
        description:
          "Native and cross-platform apps that deliver exceptional user experiences.",
      },
      {
        title: "API Development",
        description: "Secure and scalable APIs for seamless integrations.",
      },
      {
        title: "SaaS Solutions",
        description: "Cloud-based products for long-term growth.",
      },
      {
        title: "System Integration",
        description: "Connect your apps and platforms for better efficiency.",
      },
      {
        title: "App Support & Maintenance",
        description:
          "Keep your applications secure, updated and running smoothly.",
      },
    ],
    process: [
      {
        title: "Discover",
        description: "Understand your needs and technical requirements.",
      },
      {
        title: "Plan",
        description: "Design architecture and tech stack.",
      },
      {
        title: "Develop",
        description: "Build and iterate core features.",
      },
      {
        title: "Test",
        description: "Ensure quality, security and performance.",
      },
      {
        title: "Deploy",
        description: "Launch and provide ongoing support.",
      },
    ],
    ctaTitle: "Have an idea for an app?",
    ctaDescription: "Let's turn it into a powerful digital product.",
  },
  {
    slug: "erp-solutions",
    name: "ERP Solutions",
    breadcrumb: "ERP Solutions",
    title: "Smarter Operations.",
    highlight: "Stronger Businesses.",
    description:
      "Our ERP solutions help you streamline operations, automate workflows and gain real-time visibility. Build a more efficient, scalable and future-ready business with a unified system.",
    metaDescription:
      "ERP systems from Nexiqa Global that connect inventory, sales, finance, HR and reporting in one place.",
    highlights: [
      { title: "Integrate." },
      { title: "Automate." },
      { title: "Grow." },
    ],
    offers: [
      {
        title: "Inventory Management",
        description: "Track stock, reduce waste and improve accuracy.",
      },
      {
        title: "Sales & CRM",
        description: "Manage leads, customers and deals in one place.",
      },
      {
        title: "Financial Management",
        description: "Automate accounting, invoicing and reporting.",
      },
      {
        title: "HR & Payroll",
        description: "Manage staff, attendance and payroll in one system.",
      },
      {
        title: "Supply Chain Management",
        description:
          "Optimize your supply chain from procurement to delivery.",
      },
      {
        title: "Reporting & Analytics",
        description: "Make better decisions with real-time insights.",
      },
    ],
    process: [
      {
        title: "Discover",
        description: "Understand your business processes and needs.",
      },
      {
        title: "Design",
        description: "Map workflows and system architecture.",
      },
      {
        title: "Develop",
        description: "Build, customize and integrate.",
      },
      {
        title: "Test",
        description: "Validate data, security and performance.",
      },
      {
        title: "Launch",
        description: "Go live with training and support.",
      },
    ],
    ctaTitle: "Ready to streamline your operations?",
    ctaDescription: "Let's build an ERP solution tailored to your business.",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    breadcrumb: "UI/UX Design",
    title: "Design Experiences",
    highlight: "That People Love.",
    description:
      "We create intuitive, modern and user-centric designs that help your brand stand out. From research to wireframes and prototypes, we design experiences that convert.",
    metaDescription:
      "UI/UX design from Nexiqa Global — research, wireframes, interfaces and design systems that make products easier to use.",
    highlights: [
      { title: "Better Experiences." },
      { title: "Higher Engagement." },
      { title: "Greater Impact." },
    ],
    offers: [
      {
        title: "UX Research",
        description: "Understand your users and their needs.",
      },
      {
        title: "Wireframing & Prototyping",
        description: "Plan and test ideas before you build.",
      },
      {
        title: "UI Design",
        description: "Beautiful, consistent interfaces that look and feel professional.",
      },
      {
        title: "Mobile & Web Design",
        description: "Responsive designs that work across all devices.",
      },
      {
        title: "Design Systems",
        description:
          "Scalable design tokens and reusable component language.",
      },
      {
        title: "Usability Testing",
        description: "Test, refine and perfect the experience.",
      },
    ],
    process: [
      {
        title: "Discover",
        description: "Understand your users, goals and brand.",
      },
      {
        title: "Design",
        description: "Create wireframes and visual designs.",
      },
      {
        title: "Prototype",
        description: "Build interactive prototypes.",
      },
      {
        title: "Test",
        description: "User testing and refinement.",
      },
      {
        title: "Deliver",
        description: "Final designs and development handoff.",
      },
    ],
    ctaTitle: "Ready to create an exceptional user experience?",
    ctaDescription: "Let's design something your users will love.",
  },
  {
    slug: "support-maintenance",
    name: "Support & Maintenance",
    breadcrumb: "Support & Maintenance",
    title: "Keep Your Digital Products",
    highlight: "Running Smoothly.",
    description:
      "We provide proactive support and maintenance to ensure your website, application or platform stays secure, up to date and performs at its best — always.",
    metaDescription:
      "Ongoing support and maintenance from Nexiqa Global — monitoring, security, performance and updates after launch.",
    highlights: [
      { title: "Prevent Issues." },
      { title: "Reduce Downtime." },
      { title: "Maximize Performance." },
    ],
    offers: [
      {
        title: "24/7 Monitoring",
        description: "Detect and resolve issues before they impact users.",
      },
      {
        title: "Security Updates",
        description: "Keep your systems protected against threats.",
      },
      {
        title: "Performance Optimization",
        description: "Keep your site and apps fast, reliable and running smoothly.",
      },
      {
        title: "Bug Fixes",
        description: "Fast resolution for any issues.",
      },
      {
        title: "Technical Support",
        description: "Help whenever you need it most.",
      },
      {
        title: "Version Upgrades",
        description: "Stay current with the latest features and technology.",
      },
    ],
    process: [
      {
        title: "Monitor",
        description: "Track performance and security 24/7.",
      },
      {
        title: "Identify",
        description: "Detect and diagnose issues fast.",
      },
      {
        title: "Resolve",
        description: "Fix problems before they impact users.",
      },
      {
        title: "Optimize",
        description: "Improve speed, reliability and UX.",
      },
      {
        title: "Report",
        description: "Keep you informed with regular updates.",
      },
    ],
    ctaTitle: "Need ongoing support?",
    ctaDescription: "We're here to keep your digital products running at their best.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}
