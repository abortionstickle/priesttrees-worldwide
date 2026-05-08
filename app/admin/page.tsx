'use client'
import { useRouter } from 'next/navigation'
import { plants } from '@/data/plants'

export default function AdminPage() {
  const router = useRouter()

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-10">
        <h1
          className="text-acid text-4xl"
          style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}
        >
          Admin
        </h1>
        <button
          onClick={logout}
          className="text-muted text-xs tracking-widest hover:text-acid transition-colors"
          style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}
        >
          Log Out
        </button>
      </div>

      <div className="mb-6 text-muted text-sm">
        {plants.length} plants in catalog
      </div>

      <div className="border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="text-left px-4 py-3 text-muted text-xs tracking-widest" style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}>Name</th>
              <th className="text-left px-4 py-3 text-muted text-xs tracking-widest" style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}>Slug</th>
              <th className="text-left px-4 py-3 text-muted text-xs tracking-widest" style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}>Category</th>
              <th className="text-left px-4 py-3 text-muted text-xs tracking-widest" style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}>Zone</th>
              <th className="text-left px-4 py-3 text-muted text-xs tracking-widest" style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((p, i) => (
              <tr
                key={p.slug}
                className={`border-b border-border hover:bg-surface transition-colors cursor-pointer ${i % 2 === 0 ? '' : 'bg-surface/30'}`}
                onClick={() => window.open(`/plants/${p.slug}`, '_blank')}
              >
                <td className="px-4 py-3 text-text">{p.name}</td>
                <td className="px-4 py-3 text-muted font-mono text-xs">{p.slug}</td>
                <td className="px-4 py-3 text-muted">{p.category}</td>
                <td className="px-4 py-3 text-muted">{p.zone}</td>
                <td className="px-4 py-3 text-acid">{p.price ? `$${p.price}` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
