import { Section, Row } from "./Section"
import { skills } from "@/data/content"

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl>
        {skills.map((s) => (
          <Row key={s.title} label={s.title}>
            <p className="text-lg">{s.items.join(", ")}</p>
          </Row>
        ))}
      </dl>
    </Section>
  )
}
