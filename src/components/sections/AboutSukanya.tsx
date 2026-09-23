import Image from "next/image";

export function AboutSukanya() {
  return (
    <section className="bg-[var(--color-background)] px-6 py-20 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              About
            </p>
          </div>

          {/* Editorial image */}
          <div className="mt-10 lg:col-span-5 lg:col-start-4 lg:mt-0">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e3dc]">
              <Image
                src="/images/sukanya-about.jpg"
                alt="Sukanya Saha"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>

            <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Sukanya Saha · Soft Skills & Professional Development
            </p>
          </div>

          {/* Text */}
          <div className="mt-12 lg:col-span-4 lg:col-start-9 lg:mt-20">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Practical development for a stronger professional presence.
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
              Sukanya Saha is a Soft Skills and Professional Development
              Trainer with a background in Human Resources and experience
              working with individuals and teams. Her areas of training
              include communication skills, interpersonal skills, confidence
              building, workplace etiquette, professional behaviour,
              presentation skills, and professional presence. With a practical
              and engaging approach, she focuses on helping participants
              become more confident, effective, and professional in their
              workplace interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}