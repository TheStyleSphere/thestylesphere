import Image from "next/image";
import { services } from "@/data/siteContent";
import { EditorialSectionHeader } from "../ui/EditorialSectionHeader";
import { ServiceBookingPrompt } from "../ui/ServiceBookingPrompt";

export function ServicesPreview() {
  return (
    <section 
      id="services-preview"
      className="bg-[var(--color-surface-warm)] px-6 py-20 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeader
          eyebrow="What I Offer"
          title="Development that starts with where you are."
          alignment="right"
        />

        <div className="mt-20 lg:mt-28">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={service.id}
                id={service.id}
                className={`grid border-t border-[var(--color-border)] lg:grid-cols-12 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative min-h-[28rem] overflow-hidden lg:col-span-6 lg:min-h-[42rem] ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                {/* Content */}
                <div
                  className={`relative flex flex-col justify-center px-2 py-14 sm:px-6 lg:col-span-6 lg:px-14 lg:py-20 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Oversized number */}
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 font-[family-name:var(--font-dm-serif)] text-[8rem] leading-none text-[var(--color-accent-soft)] opacity-50 sm:text-[10rem] lg:right-8 lg:top-6 lg:text-[12rem]"
                  >
                    {service.number}
                  </span>

                  <div className="relative z-10">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {service.eyebrow}
                    </p>

                    <h3 className="mt-7 max-w-lg font-[family-name:var(--font-dm-serif)] text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                      {service.title}
                    </h3>

                    <p className="mt-7 max-w-md text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-9 max-w-md border-t border-[var(--color-border)]">
                      {service.points.map((point, pointIndex) => (
                        <div
                          key={point}
                          className="flex gap-5 border-b border-[var(--color-border)] py-4"
                        >
                          <span className="text-xs text-[var(--color-muted)]">
                            0{pointIndex + 1}
                          </span>

                          <span className="text-sm text-foreground">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`#${service.id}-details`}
                      className="mt-9 inline-flex items-center text-sm font-medium text-[var(--color-accent)] transition-transform hover:translate-x-1"
                    >
                      {service.cta}
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <ServiceBookingPrompt />
    </section>
  );
}