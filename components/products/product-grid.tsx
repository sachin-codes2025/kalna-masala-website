"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products, categories } from "@/lib/products"
import { cn } from "@/lib/utils"

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
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
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {product.weight.map((w) => (
                    <span
                      key={w}
                      className="rounded bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {w}
                    </span>
                  ))}
                </div>
                <Button asChild size="sm" className="mt-4 w-full gap-2">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const to = 'feedback@kalpanamasala.com';
                      const subject = `Inquiry about ${product.name}`;
                      const body = `Hello Kalna Masala team,\n\nI am interested in ${product.name}. Please share pricing and availability details.\n\nThank you.`;
                      
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

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
