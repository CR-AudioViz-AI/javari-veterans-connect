// app/layout.tsx — Javari Veterans
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Veterans | Javari by CR AudioViz AI',
  description: 'Veterans resources and benefits — always free',
  keywords: 'Javari Veterans, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Veterans"
          appColor="#1d4ed8"
          appEmoji="🎖️"
          appDesc="Veterans resources and benefits — always free"
      handoffApp="Javari Resume"
      handoffUrl="https://javari-resume-builder.vercel.app"
      handoffPitch="Transitioning? Build a civilian resume →"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
