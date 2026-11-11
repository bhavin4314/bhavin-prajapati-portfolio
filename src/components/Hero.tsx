import { useEffect, useRef } from "react"
import { profile } from "@/data/content"

const LINES = ["Bhavin", "Prajapati"]
const REST = 420
const PEAK = 820
const RADIUS = 240

export function Hero() {
  const letters = useRef<HTMLSpanElement[]>([])

  // Letters gain weight as the pointer approaches. Fine pointers only, and not with reduced motion.
  useEffect(() => {
    const ok =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!ok) return

    let raf = 0
    let x = -9999
    let y = -9999
    const paint = () => {
      raf = 0
      for (const el of letters.current) {
        if (!el) continue
        const r = el.getBoundingClientRect()
        const d = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2))
        const t = Math.max(0, 1 - d / RADIUS)
        el.style.fontVariationSettings = `"wght" ${Math.round(REST + (PEAK - REST) * t * t)}`
      }
    }
    const move = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(paint)
    }
    const leave = () => {
      x = y = -9999
      if (!raf) raf = requestAnimationFrame(paint)
    }
    window.addEventListener("pointermove", move)
    document.documentElement.addEventListener("pointerleave", leave)
    return () => {
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", leave)
      cancelAnimationFrame(raf)
    }
  }, [])

  let n = 0
  return (
    <section id="top" className="flex min-h-[calc(100svh-6rem)] flex-col justify-center pb-16 pt-10 lg:min-h-svh lg:pt-0">
      <h1
        aria-label={profile.name}
        className="select-none text-[clamp(3.75rem,13vw,10.5rem)] leading-[0.88] tracking-[-0.04em]"
      >
        {LINES.map((line) => (
          <span key={line} aria-hidden className="block">
            {[...line].map((ch) => {
              const i = n++
              return (
                <span
                  key={i}
                  ref={(el) => {
                    if (el) letters.current[i] = el
                  }}
                  className="name-letter"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {ch}
                </span>
              )
            })}
          </span>
        ))}
      </h1>

      <p className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
        <span aria-hidden className="h-2 w-2 bg-primary" />
        {profile.availability}
      </p>
      <p className="mt-4 max-w-[30ch] font-serif text-3xl leading-snug md:text-4xl">
        Full Stack Engineer: React, Next.js &amp; Node.js
      </p>
      <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-muted-foreground">
        I build web products end to end: responsive UIs, Express APIs, PostgreSQL and MongoDB data
        layers, real-time features and payments.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href="#projects"
          className="bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          View projects
        </a>
        <a className="prose-link" href={profile.resume} target="_blank" rel="noopener noreferrer">
          Download resume
        </a>
        <a className="prose-link" href={`mailto:${profile.email}`}>Email</a>
        <a className="prose-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="prose-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
