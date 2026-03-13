interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  highlight,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-muted max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
