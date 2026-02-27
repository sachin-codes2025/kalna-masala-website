"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { products } from "@/lib/products"

const featured = products.slice(0, 4)

export function FeaturedProducts() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Our Products
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">Popular Spices & Masala</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/products">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {product.category}
                </p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <Button asChild size="sm" className="mt-3 w-full gap-2">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const to = 'feedback@kalpanamasala.com';
                      const subject = `Inquiry about ${product.name}`;
                      const body = `Hello, I am interested in ${product.name}. Please share more details.`;
                      
                      const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1' +
                        '&to=' + encodeURIComponent(to) +
                        '&su=' + encodeURIComponent(subject) +
                        '&body=' + encodeURIComponent(body);
                      
                      window.open(gmailUrl, '_blank');
                    }}
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Inquiry Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
