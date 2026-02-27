import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Kalna Masala",
  description:
    "Get in touch with Kalna Masala for enquiries, bulk orders, or feedback. Based in Pune, Maharashtra.",
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value:
      "Survey No. 79-28B, Office No. 104, I Floor, Kundan Heritage, Old Mumbai-Pune Highway, Bopodi, Pune \u2013 411020, Maharashtra",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "feedback@kalpanamasala.com",
    href: "mailto:feedback@kalpanamasala.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.kalpanamasala.com",
    href: "https://www.kalpanamasala.com",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="border-b border-border bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Have a question, want to place a bulk order, or share feedback? We
              would love to hear from you.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Contact info */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Kalna Masala
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We are always happy to assist you. Reach out to us through any
                  of the following channels.
                </p>

                <div className="mt-8 flex flex-col gap-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="mt-0.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-3">
                <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Send Us a Message
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill out the form below and it will open your email client
                    to send us your message directly.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
