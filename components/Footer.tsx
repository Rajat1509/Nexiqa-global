import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-elevated">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Nexiqa Global" width={36} height={36} className="h-9 w-9" />
              <span className="font-display font-semibold text-lg">
                NEXIQA <span className="text-muted font-normal">GLOBAL</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Turning ideas into digital solutions. Powering businesses, building futures.
            </p>
          </div>

          <div>
            <p className="eyebrow text-cyan mb-4">Services</p>
            <ul className="space-y-3 text-sm text-muted">
              <li>Website Development</li>
              <li>Shopify eCommerce</li>
              <li>Application Development</li>
              <li>ERP Solutions</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cyan mb-4">Company</p>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="/#industries" className="hover:text-ink transition-colors">Industries</a></li>
              <li><a href="/#work" className="hover:text-ink transition-colors">Approach</a></li>
              <li><Link href="/book-a-meeting" className="hover:text-ink transition-colors">Book a Meeting</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cyan mb-4">Connect</p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Instagram size={15} className="text-cyan" /> @nexiqa.global
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-cyan" /> info@nexiqaglobal.com
              </li>
              <li className="flex items-center gap-2">
                <Globe size={15} className="text-cyan" /> www.nexiqaglobal.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Nexiqa Global. All rights reserved.
          </p>
          <p className="text-xs text-muted eyebrow">Let&apos;s build something extraordinary together</p>
        </div>
      </div>
    </footer>
  );
}
