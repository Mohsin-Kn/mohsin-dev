"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useRef } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

// ─────────────────────────────────────────────────────────
// Get your FREE access key at https://web3forms.com
// Enter your email there → you'll receive the key instantly.
// Replace the placeholder below with your key.
// ─────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "2052ab7e-e4f3-489e-ae52-07752089760a"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setMessage("")
    setSuccess(false)

    try {
      const formData = new FormData(formRef.current!)
      formData.append("access_key", WEB3FORMS_ACCESS_KEY)

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setSuccess(true)
        setMessage("Thanks for your message! I'll get back to you soon.")
        formRef.current?.reset()
      } else {
        setSuccess(false)
        setMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSuccess(false)
      setMessage("Network error. Please check your connection and try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="glass border-border/50 p-8 card-hover">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-foreground/90">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="bg-secondary/50 border-border/50 focus:border-primary input-glow transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground/90">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-secondary/50 border-border/50 focus:border-primary input-glow transition-all"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-foreground/90">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            className="bg-secondary/50 border-border/50 focus:border-primary input-glow transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-foreground/90">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
            rows={5}
            className="bg-secondary/50 border-border/50 focus:border-primary input-glow transition-all resize-none"
          />
        </div>
        <Button
          type="submit"
          className="w-full gradient-bg glow hover:glow-lg transition-all text-white font-medium h-12"
          disabled={pending}
        >
          {pending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </span>
          )}
        </Button>
        {message && (
          <div className={`flex items-center justify-center gap-2 text-sm ${success ? 'text-green-400' : 'text-destructive'}`}>
            {success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            {message}
          </div>
        )}
      </form>
    </Card>
  )
}
