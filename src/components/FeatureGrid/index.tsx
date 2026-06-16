import React, { useState, useMemo } from 'react'
import Link from '@docusaurus/Link'
import { ArrowRight } from 'lucide-react'
import { features, PRODUCTS, USE_CASES, type Feature } from '@site/src/data/features'

function normalize(s: string) {
  return s.toLowerCase()
}

export default function FeatureGrid(): JSX.Element {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null)

  const filtered = useMemo(() => {
    let result = features
    if (selectedProduct) result = result.filter((f) => f.products.includes(selectedProduct))
    if (selectedUseCase) result = result.filter((f) => f.useCases.includes(selectedUseCase))
    return result
  }, [selectedProduct, selectedUseCase])

  function chip(label: string, active: boolean, onClick: () => void) {
    return (
      <button
        key={label}
        onClick={onClick}
        className={`chip${active ? ' chip--active' : ''}`}
      >
        {label}
      </button>
    )
  }

  return (
    <div>
      {/* Product chips */}
      <div className="chip-row">
        {chip('All products', selectedProduct === null, () => setSelectedProduct(null))}
        {PRODUCTS.map((p) =>
          chip(p, selectedProduct === p, () => setSelectedProduct(selectedProduct === p ? null : p))
        )}
      </div>

      {/* Use-case chips */}
      <div className="chip-row">
        {chip('All use cases', selectedUseCase === null, () => setSelectedUseCase(null))}
        {USE_CASES.map((uc) =>
          chip(uc, selectedUseCase === uc, () => setSelectedUseCase(selectedUseCase === uc ? null : uc))
        )}
      </div>

      {/* Count */}
      <p className="feature-count">
        {filtered.length} {filtered.length === 1 ? 'feature' : 'features'}
      </p>

      {/* Grid */}
      <div className="feature-grid">
        {filtered.map((f) => (
          <FeatureCard key={f.id} feature={f} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: '#9CA3AF', textAlign: 'center', paddingTop: '3rem' }}>
          No features match your filters.
        </p>
      )}
    </div>
  )
}

function FeatureCard({ feature: f }: { feature: Feature }): JSX.Element {
  return (
    <Link href={`/features/${f.id}`} className="feature-card">
      <div className="feature-card__header">
        <span className="feature-card__title">{f.name}</span>
        <span className="feature-card__arrow" aria-hidden="true">
          <ArrowRight size={14} strokeWidth={1.5} />
        </span>
      </div>

      {f.products.length > 0 && (
        <div className="feature-card__products">
          {f.products.map((p) => (
            <span key={p} className="product-tag">{p}</span>
          ))}
        </div>
      )}

      {f.useCases.length > 0 && (
        <div className="feature-card__usecases">
          {f.useCases.slice(0, 3).map((uc) => (
            <span key={uc} className="usecase-tag">{uc}</span>
          ))}
          {f.useCases.length > 3 && (
            <span className="usecase-tag">+{f.useCases.length - 3}</span>
          )}
        </div>
      )}

      {f.since && <p className="feature-card__since">Since {f.since}</p>}
    </Link>
  )
}
