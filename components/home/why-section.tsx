import { Leaf, ShieldCheck, Truck, Sparkles } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No added colors, preservatives, or artificial flavors. Only pure, natural spices.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorous quality checks at every stage ensure only the best reaches your kitchen.",
  },
  {
    icon: Sparkles,
    title: "Freshly Ground",
    description: "Spices are ground fresh in small batches to preserve maximum aroma and potency.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "We deliver across India through trusted logistics partners for safe, timely delivery.",
  },
]

export function WhySection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">The Kalna Masala Difference</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
