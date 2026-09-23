"use client";

import { pillars } from "@/data/siteContent";
import { useState, useEffect } from "react";
import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";

export default function BiggerPicture() {
  const [activePillar, setActivePillar] = useState(pillars[0]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const activeIndex = pillars.findIndex(
    (pillar) => pillar.title === activePillar.title
  );

    useEffect(() => {
    if (hasInteracted) return;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
        setActivePillar((current) => {
        const currentIndex = pillars.findIndex(
            (pillar) => pillar.title === current.title
        );

        const nextIndex = (currentIndex + 1) % pillars.length;

        return pillars[nextIndex];
        });
    }, 5000);

    return () => clearInterval(interval);
    }, [hasInteracted]);

  const handlePillarClick = (pillar: (typeof pillars)[number]) => {
    setHasInteracted(true);
    setActivePillar(pillar);
  };

  return (
    <section
      id="about"
      className="bg-[var(--color-surface)] px-6 py-24 text-[var(--color-foreground)] sm:px-10 sm:py-32 lg:px-12 lg:py-40"
    >
    <div className="mx-auto max-w-7xl">
      <EditorialSectionHeader
          number="02"
          eyebrow="the bigger picture"
          title="Your image is more than what you wear."
          description="The way people experience you is shaped by more than appearance.
                      It also comes through in your body language, communication,
                      behaviour, and professional presence."
          alignment="left"
      />

      <div className="grid mt-10 items-stretch gap-0 lg:grid-cols-[1.2fr_1fr]">
          

          {/* Cross navigation */}
          <div className="relative flex min-h-[420px] items-center justify-center bg-[var(--color-surface)] p-6 sm:p-10 lg:min-h-[520px] lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-foreground)]/[0.1] sm:size-[440px] lg:size-[500px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 size-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-foreground)]/[0.1] sm:size-[280px] lg:size-[320px]"
            />

            <div className="relative grid w-full max-w-[460px] grid-cols-3 grid-rows-3 items-center justify-items-center gap-4 sm:gap-6">

              {pillars.map((pillar) => {
                const isActive = activePillar.title === pillar.title;

                return (
                  <button
                    key={pillar.title}
                    onClick={() => handlePillarClick(pillar)}
                    className={`
                      relative z-10
                      rounded-full
                      px-5 py-3
                      text-center text-sm font-medium tracking-wide
                      transition-all duration-300
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--color-accent)]
                      focus-visible:ring-offset-4
                      focus-visible:ring-offset-[var(--color-background)]
                      ${
                        pillar.position === "top" &&
                        "col-start-2 row-start-1"
                      }
                      ${
                        pillar.position === "left" &&
                        "col-start-1 row-start-2"
                      }
                      ${
                        pillar.position === "right" &&
                        "col-start-3 row-start-2"
                      }
                      ${
                        pillar.position === "bottom" &&
                        "col-start-2 row-start-3"
                      }
                      ${
                        isActive
                          ? "bg-[var(--color-foreground)] text-[var(--color-background)] shadow-sm"
                          : "text-[var(--color-foreground)] hover:text-[var(--color-accent)]"
                      }
                    `}
                  >
                    {pillar.title}
                  </button>
                );
              })}

              <div className="relative col-start-2 row-start-2 flex size-36 items-center justify-center sm:size-44">

                {/* Base cross */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--color-foreground)]/25"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--color-foreground)]/25"
                />

                {/* Active connector arms */}
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 origin-bottom bg-[var(--color-accent)]/90 transition-transform duration-500 ${
                    activePillar.position === "top"
                      ? "scale-y-100"
                      : "scale-y-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-1/2 h-1/2 w-px -translate-x-1/2 origin-top bg-[var(--color-accent)]/90 transition-transform duration-500 ${
                    activePillar.position === "bottom"
                      ? "scale-y-100"
                      : "scale-y-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 origin-right bg-[var(--color-accent)]/90 transition-transform duration-500 ${
                    activePillar.position === "left"
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2 origin-left bg-[var(--color-accent)]/90 transition-transform duration-500 ${
                    activePillar.position === "right"
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />

                {/* Centre point */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]"
                />
              </div>
            </div>

            {/* 5. Idle progress indicator */}
            {!hasInteracted && (
              <div className="absolute bottom-6 left-1/2 flex w-32 -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8">
                <div className="h-px w-full overflow-hidden bg-[var(--color-foreground)]/10">
                  <div
                    key={activePillar.title}
                    className="h-full origin-left bg-[var(--color-accent)] motion-safe:animate-[progress_5s_linear]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Article */}
          <article className="relative bg-[var(--color-surface-warm)] border-[2px] border-[var(--color-foreground)] p-8 sm:p-10 lg:p-14">
              <span 
                aria-hidden= "true"
                className="pointer-events-none absolute right-8 top-6 text-[8rem] font-light leading-none tracking-tight text-[var(--color-accent)]/[0.12] sm:right-10 sm:top-8 sm:text-[10rem] lg:right-12 lg:top-10">
                  {String(activeIndex + 1).padStart(2, "0")}
              </span>
            <div className="relative flex h-full max-w-xl flex-col justify-center">

              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  The 4 Pillars
                </p>
              </div>

              <div
                key={activePillar.title}
                className="motion-safe:animate-[fadeIn_400ms_ease-out]"
              >
                  <h3 className="mb-6 text-3xl font-medium text-[var(--color-foreground)] sm:text-4xl">
                      {activePillar.title}
                  </h3>

                  <div className="space-y-4 text-base leading-8 text-[var(--color-muted-foreground)]">
                      <p>{activePillar.description}</p>
                  </div>
              </div>

            </div>
          </article>

      </div>
      <div className="mt-16 flex flex-col gap-6 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-[var(--color-accent)] sm:text-xl">
              These areas work together. A stronger image comes from understanding
              how they connect—not from changing only one piece.
            </p>

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Appearance · Presence · Expression
            </span>
      </div>
    </div>
    </section>
  );
}