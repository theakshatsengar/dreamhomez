import Image from "next/image"

export function BlogPostContent() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-serif italic">
              The intersection of luxury and sustainability is no longer a contradiction—it&apos;s the future of interior
              design. As we move through 2024, discerning clients are increasingly seeking spaces that reflect both
              their refined taste and their environmental values.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-6">
              The Rise of Conscious Luxury
            </h2>

            <p>
              Today&apos;s luxury consumers are more informed and environmentally conscious than ever before. They understand
              that true luxury lies not just in premium materials and craftsmanship, but in the knowledge that their
              choices contribute to a more sustainable future. This shift has fundamentally changed how we approach
              high-end interior design.
            </p>

            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Sustainable luxury living room"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg my-8"
            />

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-6">
              Key Sustainable Materials Making Waves
            </h2>

            <p>
              The materials we choose define the character of a space. In 2024, we&apos;re seeing remarkable innovations in
              sustainable luxury materials that don&apos;t compromise on beauty or quality:
            </p>

            <ul className="space-y-3 ml-6">
              <li>
                <strong>Reclaimed Hardwoods:</strong> Salvaged from historic buildings and structures, these woods carry
                stories and character that new materials simply cannot match.
              </li>
              <li>
                <strong>Recycled Metals:</strong> From copper to brass, recycled metals offer the same luxurious finish
                while reducing environmental impact.
              </li>
              <li>
                <strong>Bio-based Composites:</strong> New materials made from agricultural waste and natural fibers are
                revolutionizing furniture and fixture design.
              </li>
              <li>
                <strong>Low-VOC Finishes:</strong> Premium paints and stains that maintain air quality without
                sacrificing durability or appearance.
              </li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg">
              &quot;Sustainable design isn&apos;t about limitation—it&apos;s about innovation. When we embrace eco-conscious materials,
              we often discover solutions that are more beautiful and meaningful than conventional alternatives.&quot;
            </blockquote>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-6">
              Design Strategies for Sustainable Luxury
            </h2>

            <p>
              Creating sustainable luxury spaces requires a thoughtful approach that considers the entire lifecycle of
              design decisions. Here are the key strategies we employ:
            </p>

            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Sustainable design process"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg my-8"
            />

            <h3 className="text-xl font-serif font-semibold text-foreground mt-8 mb-4">Timeless Design Philosophy</h3>

            <p>
              The most sustainable design is one that doesn&apos;t need to be replaced. We focus on creating timeless
              interiors that will remain beautiful and relevant for decades, using classic proportions, quality
              craftsmanship, and enduring materials.
            </p>

            <h3 className="text-xl font-serif font-semibold text-foreground mt-8 mb-4">Local Sourcing</h3>

            <p>
              Whenever possible, we source materials and furnishings locally, reducing transportation emissions while
              supporting regional artisans and manufacturers. This approach often leads to unique pieces that reflect
              the local character and culture.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-6">Looking Ahead</h2>

            <p>
              As we continue through 2024 and beyond, the integration of sustainability and luxury will only deepen.
              We&apos;re excited to be part of this evolution, creating spaces that are not only beautiful but also
              responsible. The future of luxury design is sustainable, and that future is now.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
