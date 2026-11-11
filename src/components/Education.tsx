import { Section, Row } from "./Section"
import { education as e } from "@/data/content"

export function Education() {
  return (
    <Section id="education" title="Education">
      <dl>
        <Row label={e.duration}>
          <p className="text-xl font-medium">{e.degree}</p>
          <p className="text-muted-foreground">{e.school}</p>
          <p className="mt-3 font-serif text-lg">{e.result}</p>
        </Row>
      </dl>
    </Section>
  )
}
