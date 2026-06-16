import React from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import { BookOpen, Layers, Cloud, Archive, ArrowRight } from 'lucide-react'

const SECTIONS = [
  {
    icon: Layers,
    title: 'Features',
    description: 'Browse all product features with use-case filters, per-feature detail, UI settings and video walkthroughs.',
    href: '/features',
    label: 'Browse features',
  },
  {
    icon: BookOpen,
    title: 'User Guides',
    description: 'Complete product manuals for Live Transcoder and Twenty-One Encoder, versioned across all releases.',
    href: '/user-guides',
    label: 'Open user guides',
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Docker and cloud installation, pipeline setup, upgrades and troubleshooting for all supported platforms.',
    href: '/cloud-deployment',
    label: 'View deployment docs',
  },
  {
    icon: Archive,
    title: 'Resources',
    description: 'Datasheets, release notes, third-party integrations and additional reference material.',
    href: '/resources',
    label: 'Browse resources',
  },
]

export default function Dashboard(): JSX.Element {
  return (
    <Layout title="Knowledge Base" description="Documentation for AJA Bridge Live & Comprimato Live Transcoder">
      <main className="dashboard">
        <div className="dashboard__hero">
          <h1 className="dashboard__title">Knowledge Base</h1>
          <p className="dashboard__sub">
            Documentation, user guides and resources for AJA Bridge Live &amp; Comprimato Live Transcoder.
          </p>
        </div>

        <div className="dashboard__grid">
          {SECTIONS.map(({ icon: Icon, title, description, href, label }) => (
            <Link key={href} to={href} className="dashboard__card">
              <div className="dashboard__card-icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h2 className="dashboard__card-title">{title}</h2>
              <p className="dashboard__card-desc">{description}</p>
              <span className="dashboard__card-cta">
                {label}
                <ArrowRight size={14} strokeWidth={1.5} className="dashboard__card-arrow" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}
