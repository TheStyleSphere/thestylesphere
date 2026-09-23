export default function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <h4
              className="font-[family-name:var(--font-dm-serif)] text-3xl tracking-[-0.03em]"
            >
              Style Sphere
            </h4>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#cbd4c7]">
              Helping individuals and organisations build a stronger,
              more intentional image and professional presence.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#aebda5]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              <a
                href="#about"
                className="text-sm text-[#e2e8df] transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#consultation"
                className="text-sm text-[#e2e8df] transition-colors hover:text-white"
              >
                Individuals
              </a>

              <a
                href="#organisations"
                className="text-sm text-[#e2e8df] transition-colors hover:text-white"
              >
                Organisations
              </a>

              <a
                href="#contact"
                className="text-sm text-[#e2e8df] transition-colors hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#aebda5]">
              Start a conversation
            </p>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:thestylesphere19@gmail.com"
                className="group block"
              >
                <span className="block text-xs uppercase tracking-[0.12em] text-[#aebda5]">
                  Email
                </span>

                <span className="mt-1 block text-sm text-[var(--color-background)] transition-colors group-hover:text-[#cbd4c7]">
                  thestylesphere19@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917044782364"
                className="group block"
              >
                <span className="block text-xs uppercase tracking-[0.12em] text-[#aebda5]">
                  Phone
                </span>

                <span className="mt-1 block text-sm text-[var(--color-background)] transition-colors group-hover:text-[#cbd4c7]">
                  +91 7044782364
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#435143] pt-6 text-xs text-[#aebda5] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Style Sphere. All rights reserved.
          </p>

          <p>Personal image · Professional presence</p>
        </div>
      </div>
    </footer>
  );
}