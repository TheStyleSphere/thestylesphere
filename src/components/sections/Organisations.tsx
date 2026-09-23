import Image from "next/image";
import { trainingAreas, audiences } from "@/data/siteContent";
import { ArrowUpRight } from "lucide-react";

export default function Organisations() {
  return (
  <>
    <section
      id="organisations-details"
      className="bg-[var(--color-surface)] px-6 py-24 text-[var(--color-foreground)] sm:px-10 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              For Organisations
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-5xl font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Build people who don&apos;t just know — they know how to show up.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              Technical expertise is only one part of professional success.
              Style Sphere helps people communicate clearly, work confidently
              with others, and navigate professional situations with greater
              awareness.
            </p>
          </div>
        </div>

        {/* Editorial Image */}
        <div className="relative mt-20 min-h-[26rem] overflow-hidden sm:min-h-[34rem] lg:mt-28 lg:min-h-[42rem]">
          <Image
            src="/images/organisations-editorial.jpg"
            alt="Professionals engaged in a conversation"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </div>

        {/* Programme Index */}
        <div className="mt-24 lg:mt-32">
          <div className="mb-8 flex items-end justify-between border-b border-[var(--color-border)] pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Programmes
            </p>

            <span className="hidden text-xs uppercase tracking-[0.16em] text-[var(--color-muted)] sm:block">
              Development Areas
            </span>
          </div>

          <div>
            {trainingAreas.map((area, index) => (
              <div
                key={area}
                className="group grid border-b border-[var(--color-border)] py-7 transition-colors sm:py-9 lg:grid-cols-12 lg:items-center"
              >
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Programme */}
                <div className="mt-3 lg:col-span-8 lg:mt-0">
                  <h3 className="max-w-3xl font-[family-name:var(--font-dm-serif)] text-3xl leading-tight tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                    {area}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="mt-5 flex justify-end lg:col-span-2 lg:mt-0">
                  <span
                    aria-hidden="true"
                    className="text-xl text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement + Audience */}
        <div className="mt-24 grid gap-14 lg:mt-32 lg:grid-cols-12 lg:gap-0">
          {/* Statement */}
          <div className="lg:col-span-5">
            <p className="max-w-lg font-[family-name:var(--font-dm-serif)] text-3xl leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Practical programmes that turn knowledge into confident action.
            </p>
          </div>

          {/* Audience + CTA */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Designed For
            </p>

            <div className="mt-7 space-y-0 border-t border-[var(--color-border)]">
              {audiences.map((audience, index) => (
                <div
                  key={audience}
                  className="flex items-center gap-5 border-b border-[var(--color-border)] py-4"
                >
                  <span className="text-xs tracking-[0.12em] text-[var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-[var(--color-foreground)] sm:text-base">
                    {audience}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/917044782364?text=Hey%20I%20would%20like%20to%20book%20a%20consultation%20for%20organisations%20and%20know%20more%20about%20the%20style%20sphere"
              className="mt-10 inline-flex min-h-14 items-center justify-center gap-4 bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-[var(--color-background)] transition-transform duration-300 ease-in-out hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Bring Style Sphere to your Organisation</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[var(--color-surface)] px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="max-w-xl font-[family-name:var(--font-dm-serif)] text-3xl leading-tight tracking-[-0.02em] text-[var(--color-foreground)] sm:text-4xl">
          Ready to make a stronger impression?
        </p>

        <span
          aria-hidden="true"
          className="mt-8 text-2xl text-[var(--color-accent)]"
        >
          ↓
        </span>
      </div>
    </section>
  </>
  );
}