import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Section } from "./Section"
import { profile } from "@/data/content"

type Status = { kind: "idle" | "sending" } | { kind: "ok" | "error"; text: string }

const field =
  "mt-2 w-full border-0 border-b border-foreground/40 bg-transparent px-0 py-2 text-lg placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-0 focus-visible:outline-none"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<Status>({ kind: "idle" })

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ kind: "sending" })
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setForm({ name: "", email: "", message: "" })
      setStatus({ kind: "ok", text: "Message sent. I'll reply as soon as I can." })
    } catch {
      setStatus({
        kind: "error",
        text: `Message not sent. Try again, or email ${profile.email} directly.`,
      })
    }
  }

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[40ch] font-serif text-2xl leading-snug md:text-3xl">
        Hiring for a full-stack role, or have a project in mind? Write to me at{" "}
        <a className="prose-link break-all" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        , or use the form.
      </p>

      <form onSubmit={submit} className="mt-12 max-w-xl space-y-8">
        <label className="block">
          Name
          <input name="name" required autoComplete="name" value={form.name} onChange={change} className={field} />
        </label>
        <label className="block">
          Email
          <input name="email" type="email" required autoComplete="email" value={form.email} onChange={change} className={field} />
        </label>
        <label className="block">
          Message
          <textarea name="message" required rows={4} value={form.message} onChange={change} className={`${field} resize-y`} />
        </label>

        <div className="flex flex-wrap items-center gap-6">
          <button
            type="submit"
            disabled={status.kind === "sending"}
            className="bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-60"
          >
            {status.kind === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" className={`text-sm ${status.kind === "error" ? "text-destructive" : "text-muted-foreground"}`}>
            {"text" in status ? status.text : ""}
          </p>
        </div>
      </form>
    </Section>
  )
}
