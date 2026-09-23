import { consultationAreas } from "@/data/siteContent";
import Image from "next/image";

export default function Individuals() {
  return (
    <section
      id="individuals-details"
      className="bg-[var(--color-background)] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-0">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              For individuals
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Personal Image &amp; Presence Consultation
            </p>

            <h2 className="mt-5 max-w-4xl font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.02] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-6xl lg:text-7xl">
              Start with what makes the biggest practical difference.
            </h2>
          </div>
        </div>

        {/* Main editorial feature */}
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:items-stretch lg:gap-0">
          {/* Image */}
          <div className="relative min-h-[30rem] overflow-hidden bg-[#e5e9e1] lg:col-span-6 lg:min-h-[42rem]">
            <Image
              src="/images/individual-style.jpg"
              alt="A personalised style consultation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-between bg-[var(--color-accent)] p-8 text-[var(--color-background)] sm:p-12 lg:col-span-6 lg:p-16">
            <div>
              <p className="max-w-lg text-base leading-7 text-[var(--background)] sm:text-lg">
                A 90-minute personalised consultation designed around your
                needs, your lifestyle, and the situations in which you want to
                feel more confident.
              </p>

              <p className="mt-8 max-w-lg text-base leading-7 text-[var(--background)] sm:text-lg">
                Depending on what you need, we may explore your personal style,
                dressing choices, grooming, body language, communication,
                self-presentation, or professional etiquette.
              </p>
            </div>

            <div className="mt-16">
              <a
                href="https://wa.me/917044782364?text=Hey%20I%20would%20like%20to%20book%20a%20consultation%20and%20know%20more%20about%20the%20style%20sphere"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-background)] px-6 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:bg-[#dce6d6]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Consultation areas */}
        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              What we may explore
            </p>

            <p className="mt-5 max-w-sm text-base leading-7 text-[var(--color-muted)]">
              The consultation is shaped around your priorities. These are
              possible areas—not a fixed checklist everyone must complete.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-[var(--color-border)]">
              {consultationAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-start gap-5 border-b border-[var(--color-border)] py-5 sm:gap-8 sm:py-6"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-accent)] border rounded-full p-2 border-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-xl text-lg leading-7 text-[var(--color-foreground)] sm:text-xl">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing message */}
        <div className="mt-20 grid gap-8 border-t border-[var(--color-border)] pt-8 lg:mt-28 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-5">
            <p className="font-[family-name:var(--font-dm-serif)] text-3xl leading-tight tracking-[-0.02em] text-[var(--color-foreground)] sm:text-4xl">
              This is not about giving you a list of rules to follow.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              You leave with greater clarity about what works, what may be
              getting in your way, and the practical next steps that make sense
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}