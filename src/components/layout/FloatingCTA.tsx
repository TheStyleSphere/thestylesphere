"use client";

import { useState } from "react";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hi Sukanya, I'd like to book a 10-minute conversation to learn more about Style Sphere."
  );

  const whatsappUrl = `https://wa.me/917044782364?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating CTA */}
      <button
        onClick={() => setIsOpen(true)}
        className="
            group fixed bottom-6 right-6 z-50
            flex items-center gap-4
            border border-[var(--color-accent)]
            bg-[var(--color-background)]
            px-6 py-3.5
            text-sm font-medium
            text-[var(--color-foreground)]
            shadow-[0_8px_30px_rgba(35,50,40,0.14)]
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_35px_rgba(35,50,40,0.2)]
        "
      >
        Book a 10-minute demo
        <span
            className="
            text-lg transition-transform duration-300
            group-hover:translate-x-1 group-hover:-translate-y-1
            "
        >
            ↗
        </span>
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 px-5"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              relative w-full max-w-md
              bg-[var(--color-background)]
              p-8 sm:p-10
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="
                absolute right-5 top-5
                text-2xl font-light
                text-[var(--color-muted)]
                transition-colors
                hover:text-[var(--color-foreground)]
              "
            >
              ×
            </button>

            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Style Sphere
            </p>

            <h2 className="font-[var(--font-dm-serif)] text-3xl leading-tight text-[var(--color-foreground)] sm:text-4xl">
              A quick conversation.
              <br />
              No pressure.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              Book a 10-minute conversation to talk about what you're looking
              for, understand how Style Sphere works, and see where you might
              want to begin.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8 inline-flex
                w-full items-center justify-center
                border border-[var(--color-foreground)]
                bg-[var(--color-foreground)]
                px-6 py-4
                text-sm font-medium
                tracking-wide
                text-[var(--color-background)]
                transition-all duration-300
                hover:bg-transparent
                hover:text-[var(--color-foreground)]
              "
            >
              Continue to WhatsApp
            </a>

            <p className="mt-4 text-center text-xs text-[var(--color-muted)]">
              Usually takes around 10 minutes.
            </p>
          </div>
        </div>
      )}
    </>
  );
}