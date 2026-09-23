"use client";

import { useEffect, useState } from "react";

export function ServiceBookingPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const section = document.getElementById("services-preview");

    if (!section) return;

    // Don't show the prompt again during the same session.
   if (sessionStorage.getItem("service-booking-prompt-shown")) {
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            setIsVisible(true);
            sessionStorage.setItem("service-booking-prompt-shown", "true");
          }, 3000);

          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  function handleClose() {
    setIsClosing(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  }

  if (!isVisible) return null;

  const whatsappMessage = encodeURIComponent(
    "Hi Sukanya, I'd like to book a 10-minute conversation to learn more about Style Sphere."
  );

  const whatsappUrl = `https://wa.me/917044782364?text=${whatsappMessage}`;

  return (
    <div
      className={`
        fixed bottom-24 right-5 z-40
        w-[calc(100%-2.5rem)] max-w-sm
        transition-all duration-500 ease-out
        sm:bottom-28 sm:right-7
        ${isClosing
          ? "translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
        }
      `}
    >
      <div
        className="
          relative
          overflow-hidden
          border border-[var(--color-border)]
          bg-[var(--color-background)]
          p-6
          shadow-[0_20px_60px_rgba(35,50,40,0.16)]
          sm:p-7
        "
      >
        {/* Decorative accent */}
        <div
          aria-hidden="true"
          className="
            absolute left-0 top-0
            h-full w-1
            bg-[#7b3445]
          "
        />

        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close booking prompt"
          className="
            absolute right-4 top-4
            flex h-7 w-7 items-center justify-center
            text-lg font-light
            text-[var(--color-muted)]
            transition-colors duration-200
            hover:text-[var(--color-foreground)]
          "
        >
          ×
        </button>

        <div className="pr-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="
                relative flex h-2 w-2
              "
            >
              <span
                className="
                  absolute inline-flex
                  h-full w-full
                  animate-[cta-pulse_4s_ease-out_infinite]
                  rounded-full
                  bg-[#7b3445]
                "
              />

              <span
                className="
                  relative inline-flex
                  h-2 w-2
                  rounded-full
                  bg-[#7b3445]
                "
              />
            </span>

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Not sure where to start?
            </p>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-4
              font-[family-name:var(--font-dm-serif)]
              text-3xl leading-[1.05]
              text-[var(--color-foreground)]
            "
          >
            Start with a conversation.
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-xs
              text-sm leading-6
              text-[var(--color-muted)]
            "
          >
            A 10-minute conversation can help you understand where to begin
            and what would make the biggest practical difference.
          </p>

          {/* CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              mt-6
              inline-flex items-center gap-3
              border border-[var(--color-foreground)]
              bg-[var(--color-foreground)]
              px-5 py-3
              text-sm font-medium
              text-[var(--color-background)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            <span>Book a 10-minute demo</span>

            <span
              aria-hidden="true"
              className="
                text-base
                transition-transform duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            >
              ↗
            </span>
          </a>

          <p className="mt-3 text-[11px] text-[var(--color-muted)]">
            No pressure. Just a conversation.
          </p>
        </div>
      </div>
    </div>
  );
}