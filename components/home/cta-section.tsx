import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
          <span className="text-balance">
            Ready to Elevate Your Cooking?
          </span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
          Get in touch with us for bulk orders, retail enquiries, or to learn
          more about our range of premium spices and masala blends.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="gap-2"
          >
            <a href="mailto:feedback@kalpanamasala.com?subject=General Enquiry&body=Hello Kalna Masala team, I would like to know more about your products.">
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <Link href="/products">
              Browse Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
