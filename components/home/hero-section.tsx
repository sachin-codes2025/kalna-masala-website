import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-spices.jpg"
          alt="Colorful Indian spices in bowls"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col items-start justify-center px-4 py-24 lg:min-h-[600px] lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-secondary">
          Premium Indian Spices
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl">
          <span className="text-balance">
            Authentic Flavors, Crafted with Tradition
          </span>
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-secondary/90 md:text-lg">
          From the heart of Pune, Kalna Masala brings you hand-selected,
          freshly ground spices that transform every meal into a celebration of
          taste.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href="/products">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-background/30 bg-background/10 text-background hover:bg-background/20 hover:text-background">
            <Link href="/about">Our Story</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
