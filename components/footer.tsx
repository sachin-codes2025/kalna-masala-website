import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/Kalna Masala.png"
                alt="Kalna Masala"
                width={180}
                height={60}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Premium quality Indian spices and masala blends. Authentic flavors crafted with
              tradition in Pune, Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <nav className="mt-3 flex flex-col gap-2" aria-label="Footer navigation">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/shipping", label: "Shipping Policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Info
            </h4>
            <div className="mt-3 flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Survey No. 79-28B, Office No. 104, I Floor, Kundan Heritage, Old Mumbai-Pune
                  Highway, Bopodi, Pune - 411020, Maharashtra
                </span>
              </div>
              <a
                href="mailto:feedback@kalpanamasala.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                feedback@kalpanamasala.com
              </a>
              <a
                href="https://www.kalpanamasala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Globe className="h-4 w-4 shrink-0 text-primary" />
                www.kalpanamasala.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Kalna Masala. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
