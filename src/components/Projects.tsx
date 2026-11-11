import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Section } from "./Section"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  featuredProjects,
  moreProjects,
  scopeLayers,
  type FeaturedProject,
  type MoreProject,
} from "@/data/content"

const badge = "inline-block border border-border px-2.5 py-1 text-sm text-muted-foreground"

type Item =
  | { kind: "featured"; p: FeaturedProject }
  | { kind: "more"; p: MoreProject }

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1.5 pl-5 font-serif text-lg leading-relaxed marker:text-primary">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Card({
  title,
  label,
  summary,
  stack,
  large,
  onOpen,
}: {
  title: string
  label: string
  summary: string
  stack: string[]
  large?: boolean
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="group flex h-full w-full flex-col items-start border border-border p-6 text-left transition-colors hover:border-primary focus-visible:border-primary md:p-8"
    >
      <span className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-primary">{label}</span>
        <span className={badge}>Client project</span>
      </span>
      <span
        className={`mt-3 block font-semibold tracking-tight transition-colors group-hover:text-primary ${
          large ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        {title}
      </span>
      <span className="mt-2 block font-serif text-lg leading-snug text-muted-foreground">{summary}</span>
      <span className="mt-4 block text-sm">
        <span className="text-muted-foreground">Built with </span>
        {stack.join(", ")}
      </span>
      <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-primary">
        View details <ArrowUpRight aria-hidden className="h-4 w-4" />
      </span>
    </button>
  )
}

function FeaturedBody({ p }: { p: FeaturedProject }) {
  return (
    <dl className="space-y-6">
      <div>
        <dt className="font-medium">Problem and users</dt>
        <dd className="mt-2 font-serif text-lg leading-relaxed">{p.problem}</dd>
      </div>
      <div>
        <dt className="font-medium">What I built on the frontend</dt>
        <dd>
          <Bullets items={p.frontend} />
        </dd>
      </div>
      <div>
        <dt className="font-medium">What I built on the backend</dt>
        <dd>
          <Bullets items={p.backend} />
        </dd>
      </div>
      <div>
        <dt className="font-medium">Stack</dt>
        <dd className="mt-2">{p.stack.join(", ")}</dd>
      </div>
      <div>
        <dt className="font-medium">Full-stack scope</dt>
        <dd>
          <ul className="mt-2 flex flex-wrap gap-2">
            {scopeLayers.map((l) => {
              const on = p.scope.includes(l)
              return (
                <li
                  key={l}
                  className={`border px-3 py-1 text-sm ${
                    on ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"
                  }`}
                >
                  {l}
                  {!on && <span className="sr-only"> (not part of this project)</span>}
                </li>
              )
            })}
          </ul>
        </dd>
      </div>
    </dl>
  )
}

export function Projects() {
  const [item, setItem] = useState<Item | null>(null)

  const title = item?.p.title ?? ""
  const label = item ? (item.kind === "featured" ? "Full-stack" : item.p.badge) : ""

  return (
    <Section id="projects" title="Projects">
      <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Featured full-stack work
      </h3>
      <ul className="mt-6 grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((p) => (
          <li key={p.id}>
            <Card
              large
              title={p.title}
              label="Full-stack"
              summary={p.problem}
              stack={p.stack}
              onOpen={() => setItem({ kind: "featured", p })}
            />
          </li>
        ))}
      </ul>

      <h3 className="mt-16 text-sm font-medium uppercase tracking-widest text-muted-foreground">More work</h3>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {moreProjects.map((p) => (
          <li key={p.id}>
            <Card
              title={p.title}
              label={p.badge}
              summary={p.summary}
              stack={p.stack}
              onOpen={() => setItem({ kind: "more", p })}
            />
          </li>
        ))}
      </ul>

      <Dialog open={!!item} onOpenChange={(o) => !o && setItem(null)}>
        <DialogContent className="max-h-[90svh] max-w-2xl overflow-y-auto">
          {item && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-primary">{label}</span>
                  <span className={badge}>Client project</span>
                </div>
                <DialogTitle className="text-left text-2xl font-semibold tracking-tight">{title}</DialogTitle>
                <DialogDescription className="sr-only">Project details</DialogDescription>
              </DialogHeader>
              {item.kind === "featured" ? (
                <FeaturedBody p={item.p} />
              ) : (
                <div className="space-y-4">
                  <p className="font-serif text-lg leading-relaxed">{item.p.summary}</p>
                  <p>
                    <span className="text-muted-foreground">Built with </span>
                    {item.p.stack.join(", ")}
                  </p>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  )
}
