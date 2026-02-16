"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CodeBlockProps {
    code: string
    language?: string
}

export default function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy text: ", err)
        }
    }

    return (
        <Card className="my-4 relative group overflow-hidden border-border/50 bg-muted/50">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-background/50 hover:bg-background/80 backdrop-blur text-muted-foreground hover:text-foreground"
                    onClick={copyToClipboard}
                >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy code</span>
                </Button>
            </div>
            <CardContent className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                    <code>{code}</code>
                </pre>
            </CardContent>
        </Card>
    )
}
