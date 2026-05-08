'use client'
import { plants } from '@/data/plants'

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1
          className="text-acid text-4xl"
          style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}
        >
          Admin
        </h1>
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
              <th className="text-left px-4 py-3 text-muted text-xs tracking-widest" style={{ fontFamily: 'var(--font-display, Oswald)', textTransform: 'uppercase' }}>Zones</th>
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
                <td className="px-4 py-3 text-muted">{p.zoneMin}–{p.zoneMax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
