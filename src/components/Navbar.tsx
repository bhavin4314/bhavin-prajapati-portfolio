import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { navLinks, profile } from "@/data/content"

function useActiveSection() {
  const [active, setActive] = useState("")
  useEffect(() => {
    const els = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: "-35% 0px -60% 0px" }
    )
    els.forEach((el) => io.observe(el))
    const onScroll = () => window.scrollY < 200 && setActive("")
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  return active
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const dark = mounted && resolvedTheme === "dark"
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {dark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
      <span>{dark ? "Light theme" : "Dark theme"}</span>
    </button>
  )
}

export function Navbar() {
  const active = useActiveSection()

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      {/* Desktop rail */}
      <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col justify-between border-r border-border px-8 py-10 lg:flex">
        <div>
          <a href="#top" className="block text-lg font-semibold leading-tight tracking-tight">
            {profile.name}
          </a>
          <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
        </div>

        <nav aria-label="Sections">
          <ul className="space-y-1">
            {navLinks.map((l) => {
              const on = active === l.id
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`group flex items-center gap-3 py-1.5 transition-colors ${
                      on ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-px bg-current transition-all duration-300 ${on ? "w-6" : "w-3 group-hover:w-5"}`}
                    />
                    {l.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <ThemeToggle />
      </aside>

      {/* Mobile bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="font-semibold tracking-tight">
            {profile.name}
          </a>
          <ThemeToggle />
        </div>
        <nav aria-label="Sections" className="overflow-x-auto px-5 pb-2">
          <ul className="flex gap-5 whitespace-nowrap text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "true" : undefined}
                  className={active === l.id ? "text-primary" : "text-muted-foreground"}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
