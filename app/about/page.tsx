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
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFRUXFRcVFRcXGBcWFRcXFxgXHR0YFxoYHSggGB0lHRcXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0fHx0tLSsrLy0vKy0vLS0tLS0tLS0tNy0rLS4tLS0tLS0tLS0tLS0tLS0tKy0tLS0tKy0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAABAgADBAUGBwj/xAA7EAABAwMCAwcCBAYBAwUAAAABAAIRAxIhBDEFQVEGEyJhcYGRMrFCodHwBxQjUsHhcjOS8VNic6LS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAKhEBAQACAgIABAYCAwAAAAAAAAECEQMSITEEE0HRIlGBofDxYXEUI0L/2gAMAwEAAhEDEQA/ALmp0oCYL5r6qFGEIRAQQFQIooAAoomQIoUVEACgKYeaBhAECjChQCFFHBQoBapCJSkoAFJQIUCgkKFQISoIQlKMqSqAhKKBwgBQIRQQBQolAqgQgSihKAEIBEqIhSEEZQVQAUEUFQqiJKio6gCZNCaFlokIgJoRAQLChCYhCFAIUKaFECQoAmhByAIFMSpCBIUITQhKBSFE1qBEIFKCJCgagQqFEhGFAikJoS2oAVEYQtQKQhCchABArt0AmhKUChROoqisoQnQQIVITFQKoRAp3JYQKEqZS1UKQomlRUdhoTAKIooAKEJiVFAIQhMogVSUyBUAhABEqQiggAmQKIWECE6CKW1AtTKQoEhCE4RhAhalhXBmVWazLrLm3xNsi6OsboEtULVa4QlKCuEpVhyhCBIQhOUiCFKU0IEIhSEITJVUBQhQqIAh+/JFBAChCKkqoWEC1OlKoVRF3ooiuwHKSqQ5G9Ta6XShcqrlLlNi1SVXehemxaSoXKouQvQW3KSFVd5oEoq25QlUlyneKC0uQlVF6koLLlHOVdyIKCwFWtVLFzeKdpqVA2hveOyCGkANIB+s7j4Qk218c4mNPSviXHwsHIuIMT5dV841ese6o6rcbiS4H8QImAOgAMD2zCv4nr6teH1fFvAEQARsBOfXllYHPhrsgObAA+ojlMHn6cp8lvGN+o9v2a7Qmse7q23xLXYF0WggjYu5yIBzgRn0Lmr5MByJzu7yLieU+Qx6r0/ZntM1rRRr+G3DH/hj+0x75/8AJlx/JLHrSEHIzOZ+MpJWNsoUIQJSkoGJQKUuSlyqCVJSlyUlA8oEpbkCVdhpQlC5LciaMgo4pSUDShcllQlVDyokBUVVtvUvWe5TvFhvTRepeqLlA9TZpov90A5U3oB6bNL7lL1RepcmzS4vQuVVyBcmzS29G9Uh6l6mzS65C5VB6hcmzS25F1UNBLiABkkmAFnrahtNjqlQ2sbgnmXGYY0c3GDjyJMAEjxXFuK1K4gwGScct93ZyQMfKslqyOrxztNd4KBNvNwkXTj/ALYMrzx8XgnLgZORy3PSTPwMlSlT3yYM7bCIgY3Gx6YTNbcN3Ym7z33jcbmPMBb1I3DsZAABgjz8WDvjYRsN/JV0BLnCY2DgYy/bfntMyeaqe4AE3m7ywdsxHKT8qyqPCSI+vYYL5EbgTiQfKDGZV0b/AGZ2MdBOCSA0ZBxk4zuBPymfTgABwOAS7mBg7f8AcmeR4RJAGAJB8OLS3qJ98qjT025BIlxgtxGAcH0/ytufieHU4ZxR2mdcA4giCwmG5584jrH3XvNNqW1Gh7CC0iR5eR6EbEcl8vfV3DpjwjbyxjnuQtfD+J1aDpYcDxObIhw6Y3gGOvwFjLA7SvpDiklUaDVsr0u9pTbMEH6mSTbeBjIEgiRy3Tly43c9r4NchckLkC5DRi5C5I5yBKu00eUC5ISllXaLZSgqu5C5Ni25S5VShcqLrlA5VAoXJtNLrlFSHKKjRcjKEKQstDcpcpCEIoypcgpCgYFKXIKIGuQuSwplA5KIKRcninHGUiACHODoe3IIEcjHpnO6slvot17dgp6VKc8vRebo9qw0f1ae5JBDo8JMjl0IHstTu1bLPBSeTBtM+EickkD12lOta63Xh6HtL2bq1+Hsdp2uqd3Xe+pTGXuaWgS0AS4tj6RnOJiD8wfVDcHbLfQ5yZx0xHVfeP4WcSdV09S8NBbVMWuu8Ja2D5ZDsHp89rj3ZDRaw3aig0v/APUbNOp0y5kF3o6V6scN4x4/nXDKyvzjTdMjkZ8Mn9cA7dcBGhTIaWyXZjwkQTjr7ZI6r6xxD+C9MmdPrKjMzFVjavtc0sI+CuJV/hBrmYZU01QTvdUY7niCwjmefNS8dnp0x+Iwvt4Not/FJxOMy4eczBA3VApkgXGGzAkmcxzIiYnHn5L11b+F3FG4FFrsbtrUt56PcOXkqaX8OOKCZ0pOcTW08RzP/VxlOli/NwrzZIe20SfFj1bPrkidx0VL3Y2mSOoM46Y5le1b/DLiThmnSaRGXVKY858BdHMe61U/4Q6yp/1q+npjH0mpUOPIsHLG6TGply4/m8BTENAkxIAn6vIbeZUYwgtkSZDI3IOeR5mcRvJX1/R/wk04AFfUVakcqYbRBHQlxe4j4XreDdnNJpM6egxjojvDLqkf/I+XAeQgK9b9WbzYz15fPux3ZWvp9NqNRqAaXeUoZRIh0SHX1G/hMiADnJmFUXL3nbTXNpaSo55ObWiNyXECAPk+xXgKTw5ocNiFw5pJY6cFuUtpi5C5QhKVydklLKhSlEElAlBBVkS5CUIQhEMHIShCiokokoQjCqBKiaFEG6FIVtqhaiqy1QhWwhaoKi1QhW2oWoqq1QtVhCBQV2ogIlqp12tFFtxY9w5lrZA/5Zx/pFWGBJkQMnO3r0XN47wFtds22vIEPgk49CAfecLynEdX3ksY51lxcGncNBODG8Ty/Llu4W7VPDnXNcyARIMRB+kAevlhbmGWPnbFymXjTl66i+gTTOQwBx+nLXEC4yZ3MQDieS38L0NfuzVDAKYBmo/wtOJFkjx7YtBK9N2b1kA3tb3pcfFEw0RaBORzMdcrVxrTnUEte4hobPPIHOOY3HTl0jx8vxn4/l9dfnf593p4eHKTvtxuyfaatpdUxzWf03FrK2MFhIk+rckR5jmvvrNUOePt7FfBNRomQ51IvxMggnYSQCcHpOxOxOV7/wDhn2tZqaPcOJ72kAPFAL6ewcMmY2PoOq9vw3JvxJ4eT4zDz2vt9CD0b1i7tvLHoSPslLHcnn3AP2AXreHTbf8Auf8ASQvWJxqf3N+D/wDpVufU6s+D+qm102l6rL/3lYXOqf3N+HfqqnXnep8Af5lTazFvdU/eyzP1beWT5Z+TyWN9NvMl3qTHxsuP2i48zT0ieezQI9JjoJUuWlmLyXbbiZ1Wp7ltVgZR3BPh7yM3ESf/AG7YyvM8WbrWNinTeAx0scxwqYMTLQJPPdsQSidG2o8uaT4iSSBBMmSTnfMruN4TUsHd1ZMbPBHtIJ+y8F5eTt2x1/qvb0w69bdf6eaocW1IqA1GVi1rQHMFO0mBEkWzk59ei9fpCyq25riAeTmlrhvydnkuVS4nV09QsrOIdEw4i0g8xJAjzHQrtaAuq/1R9MQCTjB/2d+hzhY5OTktn4Nf5n9N8eOM/wDWw/lD1HwgdIeoW2oyCBvgE5BGehBMhU6WqH02PBkOuG2PCYwZzO/LcLHfJ26xn/lOp/Iphox1P5BalWazes+iTPKs3HGKxpG9D7n9EwpAbAD2n7oP1MbCVX/PeQC15rO5GlsqpzXT9ILet2fghUO1x6j2EpP509fy/wBK9U7ND9K0+Xp+iwgwSOhI+FedST1P5KhlLM9TK6YSz2zlZfR0FYGqLow6RCMJ4UIUaVwpCchS1BXCFqsKCCshKWq2QNwT5NIBPuflUNrC6wkB9t1u/hBAk7YkhRVNXUsaWtLgCTAHOYn7Lpv0VAlorFrmgvlpc8NcQN3tYZ5tInZeO7TO7uu2uWF4LyWMZIa36RjBMmOsL3er4Zdc6JDYk+RmDbOcc+XNZ5JZqmOU8x4mt2VpuqMc3+mwMay1oLXXgNDnOLiTLsk+3vsbohTDKbCH2iALpJLnPPkBuAAf7Z5rscbc5jXl57sgBz6lQ2OquxDQRkkEgRiCc5K6XDxQGnpl91XDnU2sF7X5LhIkW3HO43id5z3y+tT16jxjOD1nVnBoA7sG6qbyymYJyQ2TBERBC6Wmq120zTreOoCWXgODnGYyDknIxA5YnfPw0ao1P69ItY+X02gUopbkXty9jYgQ4AiBPNdbW6SrTa11QstdJDQAHsdvJeYuLsfSYwN8lc+bG5eLp14+WS7jxwaWudSkmetQOeASABa2XGJHh+rPmrNPwyrptQ11MkPaC9rrH0zYASXW1AC5sDJEj/HV1GlP81Tr02Frw9jmuBDbXNtaGkOgFoDQ2c4AETlXV+Hva65rmtphho1GVBUqtrNc04L7ZA2JO4LpGMn0YzCfX24cnJnb5np7Hgva4PAFXwP/APqfQlehZxFp2K/P9CvVpi0ViWhzofEXAEi4XeIDeNowvR8L4i+mGNvqQWtOSHEYyDJncEz0IXpmVxn4q4Tj+Zf+uV9ddrB1SO1Y6r5jV7YtBtDtsElwG3pP3WfU9rXxIezaeZUvNHox+A5b/cfT360dVlr8RaBJK+ZUe0depU7sEZBgtaXzBHIEdfRdShw2q8H+YqGD+FsSP+TuR/4+eSuXJzTFJ8NlvWna4l2nYDDDc7y2914btHrTUcWklzyA6OQEmI88FdLiZpUmFrYjzJ3xtKzca7I1qoZVoOpvcGwWzaXZkWk4PPeN15f+Th3nzLqfR1z4Lhjes3XH4frXUzPJeo4b2ipucGmWnzj/AAV4TjD61N1lUPputGHC2YnIjDh57LLwesGvl07+0QZ917MuPHLHtHDg1ln0y+v7Ps1TSUtSy1wuG4gkEHqC0g/nlcrRaNtJ0WwW7eJx+LiZBXO4BxUhwAnbGek/4XouJObVDXtw5vTmP9b/ACvP7jfJhlxZda5vGOH13g9w8MBwWRBIxJa/JnfGN8FW6ekykwMbMNbHj3DjknERkkwt+kc6BsVdXoMqth4PkRuD/n0WbPouPLdarz1XUycZ8zt7dUtpO5+Nlor6Y03Wn1nr+iUBbmMNqu59/wA0e6HRXwpC0KbEbFaApaqK4UTkKQqhAEE8KIOoQpaU5CMDkoqssQhWFC1BXCjXROxkEZExPPOx805H6IWoKy1cDiXZ19SqKoNrJtJyHXQcNI23Bj9V6K1UapjixzWm0kEBw3E8wrKl8uHqtO6gGW99XudDwZdaJEW55id4Ahe14Pqu9pgG5jmi0gG0vp4xOeWOcFcDs/pKrGhlV4eS/DrXVHNBP0gOdD/Qg7roVaL2i6XBzdokNplznS1wIhpMHwjH2UymyVv4jwOrq6fcvrAU72mpILnVG04Nk4OBzkxkgFX6nhQZSpUKb207GgOta1zmlwkOpueQGnwO8RaesbLPpeJyJeCC3JcAbROJJH07q7V0xVy6HAm7YWkwBOPRYt1jpOu8venA7TamlSt7uq5lUkljmuc57jgEHIDwYAM45J28SJDg2qXudJc60tMG2WBgcbWyzYEbmec6O0XDhqDSdUph5pXWkucZuLfwzkyAdvWVz9fp3EklpY0ul1vhGSfC1rfpGwx0+MyYyRrHc9sWqrA85Obv6QhrfNwgNGD4ruc4V3Zbit1K1peW5JbfiHkxaPwxnw77HyODXcH7wAU7ySMB73weRJbDhOxnbljdbqnDaZpBveuom6w900lwhrskWkubJGRnzC1lZovm+WGq2n3jiQ1js9214NerbjLoJAlwGfNokfSM/FKDZLHT5Agu8LZLja0h1subgch5EA6Pg5o/19Q4U7R3jLCX95UaSW94HAObkiCdiD1K5rdFqatb+ZY0BjKeHE92HNbE2X5dJkgea3Nb3v8AX7NfMsw1J+n3V6bhwqVAAzTvZvfTLmEAR+EOyTtzjnGy79LsBTcZNVzWj6mNhzo6Sfp95WDhXA23PeHupGC9jLXuufP0eEgBs7En2XQ0PA3s1Q1lzqfOo0Bzy6W+Jvh3BOw5QPbnycnnxk6cU8ev3ddoo0W2UWBjR8nzJOT7rkU+K99XdTYZDGEkDImf0n9hNqtJWqkud/SY4hoDiGudJwJOxM+q1VuEU9I8N01p7ym0nvHNPi3IJGGnfGV497luXt7O07SRRV072EfU4Oc1zoOwH4RGInJgmduabScTbRcO8qNY2C/kGw4iA3pAIJJ6p6+nua6kww3OGvneARIb5bfJ3Wrh3BaNRx/mAKhgkBxLZJOYLY+Fzyxxz8ZLnlrHw6+t01DU0wKtNlRpy2RMSN2nceoXH13YvT1GBrXOp25bFpjyyASD5lU67SPpOig91NuwYYeBHTnHLJSX6mCHVGNPVoIPwSV5uPg5+K648/H8/Ryvy75secpU30NR3Z8RpvaGkYDxuOsXCBHJes0WuuzUpvpEZNwBZHM3NJA9TC5mi4da81H1HPOSJwATz+Fqr1pBAzPx7lfXly+7z82Uz1/hfVe6gxwa92PpLoeY5RdJdjqsNHiGof8AU4geUA/LQFcyiTBPt0WlrAFuRxZ2UFeGqwN+FFoIQonKFqqFhRQhBAIQITEKQqFhREoqo6wUcEYUBWWikKAJkJQIf31UtRKEoAgAmAQQR0Au+ojNpw0+RIz8A+6HfFjTBHjaWuEZAkbkjE52MxOyJHNOyqMXNDgA4DkZPUiC7PWUTTyZfrKrntpWMDcB9QEOIcchvhIMEdJiN4XqOE6Kq2kGOrMeWua6rUAFMS6QGNefqbkCS0ZtMbrRS1RpG1jm5H12w5pMAlpi/A+5xnIYWNc5tVpIBguN7Ht8xg7gz4mn2WvGtM3e9tWucGNLmuFUNIviBbJcAA4kXmW9BMg84WUcQb/cW+RXPdTBaAXODQbmi4uI367mOgSBroMNpkmRJEuAP4s7HEyOfRc7jK1LY30XUg4OZaHB10tMG7rgrQ2sBLg1pcTJcZJJ8zuVwu5LpBBMyJHh5ZI6SY3MRtK2CgymW2OuItOQ6wwZt3EztyWbg12aNbRp1mGnVbcDuNpgzi0iNldon06QY1jZFNttNrxc1ogDAnfAzvzWOteajqjSxpOzAyWNxGxPv6qnTact3cXb+W/2jos9Ku46FDUBrrj4szBHhPlA5KqnWIfcXkmSQLW2tGcAEZAnnJWaIBkknkLMGd87CPNMR4fxX3YENttjeZ68oWLxN96z8X4eyu2HvqbkzDZ8W4HID0WbhvBtLQcHNa9zgIlztvTkPZdCwkbpe5/eV0mNk1PTNu7todqwNmge6z1Nedjb6QD95TCgERSA2Ck44d7+bM+qTtMb4wFS9jj0H5rolqQsWpjE2yN00/UZ/fRWtoDkrrVIW4hG00SESgqgFISmIQtQBBEqQiBCVNHqogCEKQjKogKCgUVR12/p90evqoostAf1ShFRAg5oBRRAf8KE7IKIFn7hQclFEEd+/hF5wTz6+6CiAkYB5z+qWpp2ndoOYznmiogLWAYAEZ+6er4aQtgTVAMAZAa4gHyljfz6mYoozkTvCXOGMGBAA+wVI1b3EMMWg48LQcR+ICfzUURXR4NmsAQCCx0ggHYSN/QLzzeI1bxTvNjiSW4iZ5YxsMBRRZ+rUdUD9+xQlRRbRP8ASDv3+SKiBAUAPuoooIFH/wCf8qKKhGD7hR+yiiARv6pGlRREEj9+yiiiAEJf39kFFQoTIKIC/YIKKKo//9k="
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
