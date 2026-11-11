import { Section } from "./Section"
import { getExperienceLabel } from "@/lib/utils"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[62ch] space-y-6 font-serif text-xl leading-[1.65] md:text-[1.375rem]">
        <p>
          I'm a full-stack web developer with {getExperienceLabel()} years of experience building scalable web
          applications with React.js, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, TypeScript
          and JavaScript. On the frontend I build responsive user interfaces. On the backend I
          design the architecture and API endpoints, integrate REST APIs and third-party services,
          manage databases and work on performance.
        </p>
        <p>
          I own features from the first requirements conversation with the client, through API
          design and the UI, to delivery. I've led full-stack and frontend development on multiple
          projects from planning to release, working with backend developers, QA, designers and
          stakeholders, and I propose technical solutions directly to clients.
        </p>
        <p>
          I review pull requests and mentor other developers, and I work with cross-functional
          teams to ship products that meet the business goal. I also use AI-assisted development
          with GitHub Copilot, Cursor and Claude Code to move faster, improve code quality and
          streamline my engineering workflow.
        </p>
      </div>
    </Section>
  )
}
