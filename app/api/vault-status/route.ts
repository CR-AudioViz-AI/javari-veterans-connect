// app/api/vault-status/route.ts
// Proves the vault is actually serving this app rather than assuming it.
// An app that falls back to process.env looks identical to one reading the
// vault until something is rotated — this endpoint tells them apart.
import { NextResponse } from 'next/server'
import { cacheStats } from '@/lib/platform-secrets/getSecret'

export const dynamic = 'force-dynamic'

export async function GET(): Promise<NextResponse> {
  const stats = cacheStats()
  return NextResponse.json({
    vaultServing: stats.size > 0,
    keysFromVault: stats.size,
    // Names only — never values.
    keys: stats.keys.slice(0, 40),
    checkedAt: new Date().toISOString(),
  })
}
