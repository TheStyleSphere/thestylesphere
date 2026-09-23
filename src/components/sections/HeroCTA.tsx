export function HeroCTA() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 lg:px-12 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          The Style Sphere Approach
        </p>

        <p className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-dm-serif)] text-3xl leading-[1.1] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
          How you present yourself shapes how you&apos;re experienced.
        </p>

        <nav
          aria-label="Explore Style Sphere"
          className="mt-10 flex flex-col items-center justify-center sm:flex-row"
        >
          <a
            href="#individuals-details"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span className="mr-2 text-[var(--color-muted)]">01</span>
            For Individuals
          </a>

          <span
            aria-hidden="true"
            className="hidden h-4 w-px bg-[var(--color-border)] sm:block"
          />

          <a
            href="#organisations-details"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span className="mr-2 text-[var(--color-muted)]">02</span>
            For Organisations
          </a>

          <span
            aria-hidden="true"
            className="hidden h-4 w-px bg-[var(--color-border)] sm:block"
          />

          <a
            href="#about"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground)] transition-colors hover:text-[var(--color-accent)]"
          >
            About Style Sphere
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </a>
        </nav>
      </div>
    </section>
  );
}