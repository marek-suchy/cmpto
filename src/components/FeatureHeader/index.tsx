import React from 'react'
import Link from '@docusaurus/Link'
import { ArrowLeft, Printer, Download, Tag } from 'lucide-react'

interface Props {
  title: string
  products?: string[]
  useCases?: string[]
  keywords?: string[]
  since?: string
}

export default function FeatureHeader({
  title,
  products = [],
  useCases = [],
  keywords = [],
  since,
}: Props): React.JSX.Element {
  return (
    <>
      {/* Top bar — back link + print/PDF — hidden on print */}
      <div className="feature-detail__topbar no-print">
        <Link href="/features" className="feature-detail__back">
          <ArrowLeft size={14} strokeWidth={1.75} />
          All features
        </Link>
        <div className="feature-detail__actions">
          <button
            className="feature-detail__btn"
            onClick={() => window.print()}
            aria-label="Print this page"
          >
            <Printer size={13} strokeWidth={1.75} />
            Print
          </button>
          <button
            className="feature-detail__btn"
            onClick={() => window.print()}
            aria-label="Save as PDF via print dialog"
            title="Use 'Save as PDF' in the print dialog"
          >
            <Download size={13} strokeWidth={1.75} />
            PDF
          </button>
        </div>
      </div>

      {/* Print-only masthead */}
      <div className="print-only" aria-hidden="true">
        <p style={{ color: '#29ABE2', fontWeight: 'bold', fontSize: '1rem' }}>Comprimato Knowledge Base</p>
        <p style={{ fontSize: '11px', color: '#999' }}>know.comprimato.com</p>
      </div>

      {/* Header card */}
      <div className="feature-detail__header">
        {products.length > 0 && (
          <div className="feature-detail__products">
            {products.map((p) => (
              <span key={p} className="feature-detail__product-tag">{p}</span>
            ))}
          </div>
        )}

        <h1 className="feature-detail__title">{title}</h1>

        {useCases.length > 0 && (
          <div className="feature-detail__usecases">
            {useCases.map((uc) => (
              <span key={uc} className="feature-detail__usecase">{uc}</span>
            ))}
          </div>
        )}

        {keywords.length > 0 && (
          <div className="feature-detail__keywords">
            <Tag size={12} strokeWidth={1.5} className="feature-detail__kw-icon" aria-hidden="true" />
            {keywords.map((kw) => (
              <span key={kw} className="feature-detail__kw">{kw}</span>
            ))}
          </div>
        )}

        {since && (
          <div className="feature-detail__meta">
            <span className="feature-detail__since">Since {since}</span>
          </div>
        )}
      </div>
    </>
  )
}
