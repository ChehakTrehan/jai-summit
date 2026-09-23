export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {body}
        </p>
      ) : null}
    </div>
  )
}
