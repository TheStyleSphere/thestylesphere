"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-[var(--color-background)]">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-12">
        {/* Brand */}
        <a
          href="/"
          onClick={closeMenu}
          className="shrink-0 font-[family-name:var(--font-dm-serif)] text-2xl tracking-[-0.03em] text-[var(--color-foreground)]"
        >
          Style Sphere
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          <a
            href="#about"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            About
          </a>

          <a
            href="#consultation"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Individuals
          </a>

          <a
            href="#organisations"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Organisations
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Contact
          </a>
        </nav>

        {/* Desktop consultation button */}
        <a
          href="https://wa.me/917044782364?text=Hey%20I%20would%20like%20to%20book%20a%20consultation%20and%20know%20more%20about%20the%20style%20sphere"
          className="hidden min-h-10 items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 text-sm font-semibold text-[var(--color-background)] transition-colors hover:bg-[var(--color-accent)] lg:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Consultation
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--color-border)] px-4 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-foreground)] lg:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--color-border)] px-6 py-6 sm:px-10 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <a
              href="#about"
              onClick={closeMenu}
              className="text-lg font-medium text-[var(--color-foreground)]"
            >
              About
            </a>

            <a
              href="#consultation"
              onClick={closeMenu}
              className="text-lg font-medium text-[var(--color-foreground)]"
            >
              Individuals
            </a>

            <a
              href="#organisations"
              onClick={closeMenu}
              className="text-lg font-medium text-[var(--color-foreground)]"
            >
              Organisations
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-lg font-medium text-[var(--color-foreground)]"
            >
              Contact
            </a>

            <a
              href="#consultation"
              onClick={closeMenu}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-foreground)] px-6 text-sm font-semibold text-[var(--color-background)] transition-colors hover:bg-[var(--color-accent)]"
            >
              Book a Consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}