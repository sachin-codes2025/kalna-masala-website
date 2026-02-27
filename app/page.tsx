import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhySection } from "@/components/home/why-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <FeaturedProducts />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
