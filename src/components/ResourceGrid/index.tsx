import React from 'react'
import Link from '@docusaurus/Link'
import { FileText, Download } from 'lucide-react'

interface Product {
  id: string
  name: string
  image: string
  specPath: string
  datasheetUrl: string | null
}

const PRODUCTS: Product[] = [
  {
    id: 'live-transcoder-software',
    name: 'Live Transcoder Software',
    image: '/img/products/live-transcoder.png',
    specPath: '/resources/specifications/live-transcoder-software',
    datasheetUrl: 'https://comprimato.com/wp-content/uploads/2024/04/Live-Transcoder-Datasheet-2.51.pdf',
  },
  {
    id: 'live-transcoder-appliance',
    name: 'Live Transcoder Appliance',
    image: '/img/products/live-transcoder.png',
    specPath: '/resources/specifications/live-transcoder-appliance',
    datasheetUrl: 'https://comprimato.com/wp-content/uploads/2025/03/Live-Transcoder-Appliance-Datasheet-2.51.pdf',
  },
  {
    id: 'live-standards-conversion',
    name: 'Live Standards Conversion',
    image: '/img/products/live-standards-conversion.png',
    specPath: '/resources/specifications/live-standards-conversion',
    datasheetUrl: null,
  },
  {
    id: 'twenty-one-encoder',
    name: 'Twenty-One Encoder',
    image: '/img/products/twenty-one-encoder.png',
    specPath: '/resources/specifications/twenty-one-encoder',
    datasheetUrl: 'https://comprimato.com/wp-content/uploads/2024/04/Twenty-One-Encoder-Datasheet-2.51.pdf',
  },
  {
    id: 'bridge-live',
    name: 'Bridge Live',
    image: '/img/products/bridge-live.png',
    specPath: '/resources/specifications/bridge-live',
    datasheetUrl: 'https://www.aja.com/products/bridge-live/spec-sheet.pdf',
  },
]

export default function ResourceGrid(): JSX.Element {
  return (
    <div className="resource-grid">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="resource-card">
          <div className="resource-card__image-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="resource-card__image"
            />
          </div>
          <div className="resource-card__body">
            <h3 className="resource-card__name">{product.name}</h3>
            <div className="resource-card__actions">
              <Link to={product.specPath} className="resource-card__btn resource-card__btn--spec">
                <FileText size={14} strokeWidth={1.5} />
                Specifications
              </Link>
              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card__btn resource-card__btn--pdf"
                >
                  <Download size={14} strokeWidth={1.5} />
                  Datasheet PDF
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
