import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Clock,
  Truck,
  CreditCard,
  MapPin,
  PackageCheck,
  Info,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Shipping Policy | Kalpana Masala",
  description:
    "Learn about Kalpana Masala's shipping and delivery policy, including processing times, delivery partners, and more.",
}

const policies = [
  {
    icon: Clock,
    title: "Order Processing",
    description:
      "Orders are usually processed within 24 business hours after payment confirmation.",
  },
  {
    icon: Truck,
    title: "Delivery Time",
    description:
      "Once dispatched, delivery typically takes 1\u20133 business days, depending on the delivery location and courier service availability.",
  },
  {
    icon: CreditCard,
    title: "Shipping Charges",
    description:
      "Shipping charges, if applicable, are displayed at checkout. We strive to keep them minimal for your convenience.",
  },
  {
    icon: PackageCheck,
    title: "Order Tracking",
    description:
      "Tracking details are shared once the order is shipped so you can follow your package every step of the way.",
  },
  {
    icon: MapPin,
    title: "Delivery Variations",
    description:
      "Delivery timelines may vary due to weather, remote locations, or other unforeseen circumstances.",
  },
  {
    icon: Info,
    title: "Policy Updates",
    description:
      "Kalpana Masala reserves the right to update this policy at any time. Please check this page periodically for updates.",
  },
]

const partners = [
  "SkyDot Courier",
  "Delhivery",
  "Ecom Express",
  "Gati",
  "Blue Dart",
  "DTDC",
  "India Post",
  "XpressBees",
  "Shadowfax",
  "Ekart Logistics",
  "Smartr Logistics",
  "Pickrr",
  "Shiprocket",
  "DHL",
]

export default function ShippingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="border-b border-border bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Delivery Information
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Shipping Policy
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              At Kalpana Masala, we strive to ensure safe and timely delivery of
              all orders.
            </p>
          </div>
        </section>

        {/* Policy cards */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {policies.map((policy) => (
                <div
                  key={policy.title}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <policy.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {policy.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logistics partners */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Trusted Partners
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">Our Logistics Partners</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Kalpana Masala partners with reliable logistics providers to
                ensure broad service coverage across India.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Full policy text */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Complete Shipping Policy
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                At Kalpana Masala, we strive to ensure safe and timely delivery
                of all orders. Orders are usually processed within 24 business
                hours after payment confirmation. Once dispatched, delivery
                typically takes 1&ndash;3 business days, depending on the
                delivery location and courier service availability.
              </p>
              <p>
                Kalpana Masala partners with reliable logistics providers
                including SkyDot Courier, Delhivery, Ecom Express, Gati, Blue
                Dart, DTDC, India Post, XpressBees, Shadowfax, Ekart Logistics,
                Smartr Logistics, Pickrr, Shiprocket, and DHL to ensure broad
                service coverage.
              </p>
              <p>
                Shipping charges, if applicable, are displayed at checkout.
                Tracking details are shared once the order is shipped. Delivery
                timelines may vary due to weather, remote locations, or other
                unforeseen circumstances. Kalpana Masala reserves the right to
                update this policy at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
