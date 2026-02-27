import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Kalna Masala",
  description:
    "Learn about Kalna Masala's journey in crafting premium quality Indian spices from Pune, Maharashtra.",
}

const values = [
  {
    icon: Award,
    title: "Uncompromised Quality",
    description:
      "Every batch is tested for purity, color, aroma, and flavor before packaging.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "We listen to our customers and continuously improve our products based on their feedback.",
  },
  {
    icon: Clock,
    title: "Timeless Tradition",
    description:
      "Our recipes and blending techniques are rooted in generations of culinary wisdom.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description:
      "Small-batch production ensures every pack of masala is made with attention and care.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="border-b border-border bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Our Story
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              About Kalna Masala
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A legacy of authentic flavors, rooted in Pune, Maharashtra.
            </p>
          </div>
        </section>

        {/* Story section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                  src="/images/about-spices.jpg"
                  alt="Kalna Masala spice production"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  <span className="text-balance">
                    Bringing the Essence of Indian Spices to Your Kitchen
                  </span>
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Kalna Masala was founded with a simple vision: to provide
                    every Indian household with spices that are pure, fresh, and
                    bursting with authentic flavor. Based in Pune, Maharashtra,
                    we have grown from a small family enterprise into a trusted
                    name in the spice industry.
                  </p>
                  <p>
                    Our spices are carefully sourced from the finest farms across
                    India. From the vibrant turmeric fields of Sangli to the
                    aromatic cardamom plantations of Kerala, we handpick every
                    ingredient to ensure unmatched quality.
                  </p>
                  <p>
                    At Kalna Masala, we believe that great food starts with
                    great spices. That is why we grind our spices fresh in small
                    batches, preserving the essential oils and natural flavors
                    that make your dishes truly special.
                  </p>
                </div>
                <Button asChild className="mt-6 gap-2">
                  <Link href="/products">
                    Explore Our Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Our Values
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">What Drives Us Every Day</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg border border-border bg-background p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">Our Mission</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              To be the most trusted spice brand in India by delivering
              consistently pure, fresh, and flavorful spices that honor
              traditional recipes while meeting modern quality standards.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
