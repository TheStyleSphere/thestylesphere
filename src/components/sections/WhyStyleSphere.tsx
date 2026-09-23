import { principles } from "@/data/siteContent";
import { EditorialSectionHeader } from "../ui/EditorialSectionHeader";
import Image from "next/image";

export default function WhyStyleSphere() {
  return (
    <section className="bg-[var(--color-surface)] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeader
          number="04"
          eyebrow="Why Style Sphere"
          title="A different approach to personal development."
          description="Many programmes focus on one piece of the picture. Style Sphere
            looks at how appearance, presence, communication, and professional
            behaviour work together in real life."
          alignment="left"
        />

        {/* Editorial image + Principles */}
        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12 lg:items-start lg:gap-0">
          {/* Editorial image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/why-image.jpg"
                alt="A considered everyday personal style"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>

          {/* Principles */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border-t-[2px] border-[var(--color-accent)]">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-6 border-b-[2px] border-[var(--color-accent)] py-8 sm:py-10 lg:grid-cols-6 lg:gap-0"
                >
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span className="inline-flex rounded-full bg-[var(--color-accent-soft)] p-4 text-xs font-semibold tracking-[0.16em] text-[var(--color-accent)]">
                      {principle.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="lg:col-span-5">
                    <h3 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-none tracking-[-0.02em] text-[var(--color-foreground)] sm:text-5xl">
                      {principle.title}
                    </h3>

                    <p className="mt-4 max-w-md text-base leading-7 text-[var(--color-foreground)]">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-5">
            <p className="font-[family-name:var(--font-dm-serif)] text-3xl leading-tight tracking-[-0.02em] text-[var(--color-foreground)] sm:text-4xl">
              The aim is not to make you someone else.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-base leading-7 text-[var(--color-foreground)] sm:text-lg">
              It is to help you understand what already works, recognise what
              may be getting in your way, and make changes that feel natural
              enough to sustain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}