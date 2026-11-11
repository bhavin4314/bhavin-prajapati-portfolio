import { profile } from "@/data/content"

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-8 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} {profile.name}, {profile.role}</p>
      <p className="flex gap-6">
        <a className="hover:text-foreground" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="hover:text-foreground" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  )
}
