import { Section } from "./Section"
import { howIBuild } from "@/data/content"

export function HowIBuild() {
  return (
    <Section id="how-i-build" title="How I build">
      <ul className="grid gap-x-10 md:grid-cols-2">
        {howIBuild.map((h) => (
          <li key={h.title} className="border-t border-border py-6">
            <h3 className="text-xl font-semibold tracking-tight">{h.title}</h3>
            <p className="mt-2 font-serif text-lg leading-snug">{h.text}</p>
            <p className="mt-3 text-sm text-muted-foreground">In: {h.project}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
