'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [pw, setPw] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    })
    setLoading(false)
    if (res.ok) {
      router.push('/admin')
    } else {
      setError(true)
      setPw('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={submit} className="w-full max-w-xs space-y-4">
        <h1
          className="text-acid text-2xl"
          style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}
        >
          Admin
        </h1>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
          autoFocus
          className="w-full bg-surface border border-border px-4 py-3 text-text text-sm outline-none focus:border-acid"
        />
        {error && (
          <p className="text-red-bright text-xs">Wrong password.</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-acid text-background px-4 py-3 text-sm tracking-widest font-semibold hover:bg-acid-dim transition-colors disabled:opacity-50"
          style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}
        >
          {loading ? '...' : 'Enter'}
        </button>
      </form>
    </div>
  )
}
