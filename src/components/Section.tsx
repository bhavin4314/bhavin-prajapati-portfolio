import type { ReactNode } from "react"

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border py-16 md:py-24">
      <h2
        id={`${id}-title`}
        className="mb-10 text-4xl font-semibold tracking-tight md:mb-14 md:text-5xl"
        style={{ fontVariationSettings: '"wdth" 90' }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

/** A label-and-detail row used by Work, Skills and Education. */
export function Row({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="grid gap-2 border-b border-border py-6 first:pt-0 last:border-b-0 md:grid-cols-[11rem_1fr] md:gap-8">
      <dt className="text-muted-foreground">{label}</dt>
      <dd>{children}</dd>
    </div>
  )
}
