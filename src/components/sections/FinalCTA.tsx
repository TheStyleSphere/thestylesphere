export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-[#f5f2ec] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
          {/* Heading */}
          <div className="lg:col-span-7">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Take the next step
            </p>

            <h2 className="max-w-4xl font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.02] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-6xl lg:text-8xl">
              Let's make it intentional.
            </h2>
          </div>

          {/* Supporting text */}
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-16">
            <p className="max-w-md text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              Whether you are looking to develop your personal image or
              strengthen professional presence across your organisation, the
              next step starts with a conversation.
            </p>
          </div>
        </div>

        {/* Two audience paths */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:mt-28">
          <a
            href="https://wa.me/917044782364?text=Hey%20I%20would%20like%20to%20book%20a%20consultation%20and%20know%20more%20about%20the%20style%20sphere"
            className="group flex min-h-72 flex-col justify-between border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition-colors duration-300 hover:border-[var(--color-accent)] sm:p-8"
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                For individuals
              </span>

              <span className="text-xl text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-[-0.02em] text-[var(--color-foreground)] sm:text-5xl">
                Book a Consultation
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                Explore the changes that could make the biggest difference to
                your personal image and presence.
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/917044782364?text=Hey%20I%20would%20like%20to%20book%20a%20consultation%20for%20organisations%20and%20know%20more%20about%20the%20style%20sphere"
            className="group flex min-h-72 flex-col justify-between border border-[var(--color-foreground)] bg-[var(--color-accent)] p-6 text-[var(--color-background)] transition-colors duration-300 hover:bg-[#3b1c21] sm:p-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-background)]">
                For organisations
              </span>

              <span className="text-xl text-[var(--color-background)] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
                Bring Style Sphere to your Organisation
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-background)]">
                Build communication, confidence, presence, and professional
                skills through practical programmes and workshops.
              </p>
            </div>
          </a>
        </div>
        {/* Contact details */}
        <div className="mt-16 border-t border-[var(--color-border)] pt-8 lg:mt-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Get in touch
              </p>

              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Start with a conversation about what you need.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
              <a
                href="mailto:thestylesphere19@gmail.com"
                className="group"
              >
                <span className="block text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  Email
                </span>

                <span className="mt-1 block text-sm font-medium text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
                  thestylesphere19@gmail.com
                </span>
              </a>

              <a
                href="tel:+917044782364"
                className="group"
              >
                <span className="block text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  Phone
                </span>

                <span className="mt-1 block text-sm font-medium text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
                  +91 7044782364
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}