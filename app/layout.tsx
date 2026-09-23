import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexiqaglobal.com"),

  title: {
    default: "Nexiqa Global | Turning Ideas Into Digital Solutions",
    template: "%s | Nexiqa Global",
  },

  description:
    "Nexiqa Global is a digital solutions company specializing in website development, Shopify eCommerce, custom applications, ERP solutions, UI/UX design, and technology support.",

  keywords: [
    "Nexiqa",
    "Nexiqa Global",
    "Nexiqa Global digital solutions",
    "Nexiqa Global IT company",
    "web development company",
    "Shopify development",
    "application development",
    "ERP solutions",
    "UI UX design",
    "digital solutions",
  ],

  authors: [
    {
      name: "Nexiqa Global",
      url: "https://nexiqaglobal.com",
    },
  ],

  creator: "Nexiqa Global",
  publisher: "Nexiqa Global",

  alternates: {
    canonical: "https://nexiqaglobal.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexiqaglobal.com/",
    siteName: "Nexiqa Global",
    title: "Nexiqa Global | Turning Ideas Into Digital Solutions",
    description:
      "Nexiqa Global builds websites, Shopify stores, custom applications, ERP solutions, and digital experiences that help businesses grow.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexiqa Global - Turning Ideas Into Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexiqa Global | Turning Ideas Into Digital Solutions",
    description:
      "Nexiqa Global builds websites, Shopify stores, custom applications, ERP solutions, and digital experiences for modern businesses.",
    images: ["/og-image.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexiqaglobal.com/#organization",
      name: "Nexiqa Global",
      alternateName: "Nexiqa",
      url: "https://nexiqaglobal.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://nexiqaglobal.com/logo.png",
      },
      email: "info@nexiqaglobal.com",
      description:
        "Nexiqa Global is a digital solutions company specializing in website development, Shopify eCommerce, custom applications, ERP solutions, UI/UX design, and technology support.",
    },

    {
      "@type": "WebSite",
      "@id": "https://nexiqaglobal.com/#website",
      url: "https://nexiqaglobal.com/",
      name: "Nexiqa Global",
      alternateName: "Nexiqa",
      publisher: {
        "@id": "https://nexiqaglobal.com/#organization",
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className="font-body bg-bg text-ink antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}