import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/products/product-grid"

export const metadata: Metadata = {
  title: "Products | Kalpana Masala",
  description:
    "Browse our complete range of premium Indian spices and masala blends. Ground spices, blended masala, and whole spices.",
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="border-b border-border bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Our Collection
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Spices & Masala</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Discover our wide range of freshly ground spices and expertly
              blended masalas. Each product is crafted with care to bring
              authentic Indian flavors to your kitchen.
            </p>
          </div>
        </section>

        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}
