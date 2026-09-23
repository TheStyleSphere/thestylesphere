"use client";
import { useState } from "react";
import { gaps } from "@/data/siteContent";
import { EditorialSectionHeader } from "@/components/ui/EditorialSectionHeader";

export default function Gaps() {
  const [activeGap, setActiveGap] = useState<string | null>(null);
  return (
    <section className="relative overflow-hidden bg-[var(--color-muted-green)] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Introductory statement */}
        <EditorialSectionHeader 
            number="03"
            eyebrow="The gap"
            alignment="right"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
        <div className="pointer-events-none absolute -right-24 top-4 h-80 w-80 rounded-full bg-[var(--color-accent-green)]/10 lg:h-[42rem] lg:w-[42rem]" />
          <div className="z-10 lg:col-span-7 lg:col-start-6">
            <h2 className="max-w-4xl font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.02] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-6xl lg:text-7xl">
              Being good at what you do isn&apos;t always enough.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--color-accent-green)] sm:text-lg">
              Sometimes the gap is not ability. It is knowing how to express
              your strengths, make a confident impression, and navigate the
              situations that matter.
            </p>
          </div>
        </div>

        {/* Editorial gap panels */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:mt-28">
          {gaps.map((gap, index) => (
            <article
              key={gap.number}
              onClick={() =>
                setActiveGap(activeGap === gap.number ? null : gap.number)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveGap(activeGap === gap.number ? null : gap.number);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={activeGap === gap.number}
              className={`group relative min-h-80 cursor-pointer border border-[var(--color-foreground)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-[var(--color-muted)] sm:p-8 ${
                index % 2 === 1 ? "lg:translate-y-16" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-[family-name:var(--font-dm-serif)] text-4xl leading-none text-[var(--color-accent)]">
                  {gap.number}
                </span>

                <span className="text-right text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {gap.pillar}
                </span>
              </div>

              <div className="mt-20 max-w-md">
                <h3 className="font-[family-name:var(--font-dm-serif)] text-3xl leading-[1.08] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-4xl">
                  {gap.title}
                </h3>

                <div className="relative mt-2 min-h-24 max-w-md">
                  <p
                    className={`text-sm leading-6 text-[var(--color-muted)] transition-opacity duration-300 ${
                      activeGap === gap.number ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {gap.description}
                  </p>

                  <p
                    className={`absolute inset-0 text-sm leading-6 text-[var(--color-accent)] transition-opacity duration-300 ${
                      activeGap === gap.number ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {gap.recognition}
                  </p>
                </div>
                <span className="absolute bottom-6 right-6 text-sm text-[var(--color-accent)]">
                  {activeGap === gap.number ? "−" : "+"}
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] origin-left scale-x-0 bg-[var(--color-muted)] transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>

        {/* Bottom transition */}
        <div className="flex flex-col gap-6 sm: flex-row sm:items-start sm:justify-between mt-32 border-t border-[var(--color-border)] pt-8 lg:mt-48">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            A practical starting point
          </span>

          <p className="max-w-2xl text-lg leading-8 text-[var(--color-accent)] sm:text-xl">
            The goal is not to fix everything at once. It is to identify what
            is holding you back and focus on the changes that make the biggest
            practical difference.
          </p>
        </div>
      </div>
    </section>
  );
}