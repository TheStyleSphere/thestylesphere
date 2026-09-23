export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-12 lg:px-12 lg:py-20">
        {/* Text content */}
        <div className="relative z-20 lg:mt-[22.5rem] lg:col-span-6 lg:pr-7 editorial:col-span-8 editorial:pr-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Image Consulting • Professional Presence
          </p>

          <h1 className="max-w-full font-[family-name:var(--font-dm-serif)] text-5xl leading-[0.98] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-6xl lg:text-7xl xl:text-8xl">
            Look Good.<br />Feel Good.<br />{" "} 
            <span className="text-[var(--color-accent)]">
                Show Up.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Style Sphere helps you bring out your best through intentional
            choices in style, grooming, communication, and the way you carry
            yourself.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/917044782364?text=Hey%20I%20would%20like%20to%20book%20a%20consultation%20and%20know%20more%20about%20the%20style%20sphere"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-background)] transition-colors hover:bg-[var(--color-accent)]"
              target="_blank"
              rel = "noopener noreferrer"
            >
              Book a Consultation
            </a>

            <a
              href="#organisations-details"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-foreground)]"
            >
              Corporate Training &amp; Workshops
            </a>
          </div>
        </div>

        {/* Editorial image area */}
        <div className="relative z-10 mt-10 flex min-h-[26rem] lg:col-span-6 lg:mt-0 editorial:col-span-4">
          <div className="relative h-full min-h-[36rem] w-full overflow-hidden bg-[#e5e9e1] lg:min-h-0">
            <img
              src="/images/hero.jpg"
              alt="Professional Style and Presence Consulting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}