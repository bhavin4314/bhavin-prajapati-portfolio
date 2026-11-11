import { Section, Row } from "./Section"
import { experiences } from "@/data/content"

export function Experience() {
  return (
    <Section id="experience" title="Work">
      <dl>
        {experiences.map((e) => (
          <Row key={e.duration} label={e.duration}>
            <p className="text-xl font-medium">{e.title}</p>
            <p className="text-muted-foreground">
              {e.company}, {e.location}
            </p>
            <ul className="mt-3 max-w-[60ch] list-disc space-y-1.5 pl-5 font-serif text-lg leading-relaxed marker:text-primary">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Row>
        ))}
      </dl>
    </Section>
  )
}
