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

// export const metadata: Metadata = {
//   title: "Nexiqa Global | Turning Ideas Into Digital Solutions",
//   description:
//     "Nexiqa Global builds websites, Shopify stores, custom applications, and ERP systems that power businesses and build futures. Partner with us for your next digital project.",
//   icons: {
//     icon: "/logo.png",
//   },
// };


import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexiqaglobal.com"),

  title: {
    default: "Nexiqa Global | Web, Shopify & Software Development",
    template: "%s | Nexiqa Global",
  },

  description:
    "Nexiqa Global builds websites, Shopify stores, custom applications, and ERP solutions for businesses. Partner with us for your next digital project.",

  keywords: [
    "Web Development",
    "Shopify Development",
    "Shopify Store Development",
    "Custom Software Development",
    "ERP Solutions",
    "Application Development",
    "Web Development Company India",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Nexiqa Global | Web, Shopify & Software Development",
    description:
      "Websites, Shopify stores, custom applications, and ERP solutions that help businesses grow.",
    url: "https://nexiqaglobal.com",
    siteName: "Nexiqa Global",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nexiqa Global",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexiqa Global | Web, Shopify & Software Development",
    description:
      "Websites, Shopify stores, custom applications, and ERP solutions for businesses.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-bg text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
