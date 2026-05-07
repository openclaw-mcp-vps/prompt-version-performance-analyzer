import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Version Performance Analyzer — A/B Test AI Prompts with Cost Tracking',
  description: 'Compare prompt variations side-by-side with response quality metrics and token cost analysis. Built for AI product managers and developers optimizing LLM costs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="363cab46-1ec1-466e-bec1-d078f34f8056"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
