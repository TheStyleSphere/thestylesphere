
import { ArrowUpRight } from "lucide-react";

type EditorialSectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  number?: string;
  showArrow?: boolean;
  alignment: "left" | "center" | "right";
};

export function EditorialSectionHeader({
  eyebrow,
  title,
  description,
  number,
  showArrow = false,
  alignment = "left",
}: EditorialSectionHeaderProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <header className="w-full space-y-4">
      {/* Top meta row */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {number && `${number} / `}
          {eyebrow}
        </span>

        {showArrow && (
          <ArrowUpRight
            className="size-4 text-muted-foreground"
            strokeWidth={1.5}
          />
        )}
      </div>

      {/* Main heading */}
      <div className={`max-w-3xl space-y-3 ${alignmentClasses[alignment]} `}>
      {title && (
        <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
          {title}
        </h2>
      )}

        {description && (
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}