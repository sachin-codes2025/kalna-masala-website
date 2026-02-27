import { Quote } from "lucide-react"

const testimonials = [
  {
    text: "Kalpana Masala's turmeric and garam masala are exceptional. The aroma fills the kitchen the moment you open the pack. Truly authentic quality!",
    name: "Priya Sharma",
    location: "Pune",
  },
  {
    text: "I have been using Kalpana Masala products for over 3 years. The consistency in quality and freshness is unmatched. Highly recommended!",
    name: "Rajesh Kulkarni",
    location: "Mumbai",
  },
  {
    text: "Finally found spices that taste like they were ground at home. Kalpana Masala's blends make cooking so much easier and flavorful.",
    name: "Anita Deshmukh",
    location: "Nashik",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">What Our Customers Say</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-border bg-card p-6"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
