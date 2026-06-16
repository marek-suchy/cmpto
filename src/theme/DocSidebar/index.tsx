import React from 'react'
import OriginalDocSidebar from '@theme-original/DocSidebar'
import type DocSidebarType from '@theme/DocSidebar'
import type { WrapperProps } from '@docusaurus/types'
import { useVersions } from '@docusaurus/plugin-content-docs/client'
import { useWindowSize } from '@docusaurus/theme-common'
import { useLocation } from '@docusaurus/router'

type Props = WrapperProps<typeof DocSidebarType>

// ── Version dropdown ──────────────────────────────────────────────────────────

function VersionDropdown({ pluginId }: { pluginId: string }) {
  const versions = useVersions(pluginId)
  const { pathname } = useLocation()

  if (!versions || versions.length <= 1) return null

  // Determine the active version by finding which version path is the most
  // specific (longest) prefix of the current pathname.
  // This avoids useActiveVersion() which can throw on current-version pages
  // (those without a version prefix in the URL like /cloud-deployment/1.18.0/).
  const sorted = [...versions].sort((a, b) => b.path.length - a.path.length)
  const activeVersion = sorted.find((v) => pathname.startsWith(v.path)) ?? versions[0]

  return (
    <div className="sidebar-version-dropdown">
      <span className="sidebar-version-dropdown__label">Version</span>
      <select
        className="sidebar-version-dropdown__select"
        value={activeVersion.name}
        onChange={(e) => {
          const target = versions.find((v) => v.name === e.target.value)
          if (target) window.location.href = target.path
        }}
      >
        {versions.map((v) => (
          <option key={v.name} value={v.name}>
            {v.label}
          </option>
        ))}
      </select>
    </div>
  )
}

// ── Product switcher ──────────────────────────────────────────────────────────

const PRODUCTS = [
  { id: 'live-transcoder',    label: 'Live Transcoder',    path: '/user-guides/live-transcoder' },
  { id: 'twenty-one-encoder', label: 'Twenty-One Encoder', path: '/user-guides/twenty-one-encoder' },
] as const

function ProductSwitcher({ activeId }: { activeId: 'live-transcoder' | 'twenty-one-encoder' }) {
  return (
    <div className="sidebar-version-dropdown">
      <span className="sidebar-version-dropdown__label">Product</span>
      <select
        className="sidebar-version-dropdown__select"
        value={activeId}
        onChange={(e) => {
          const product = PRODUCTS.find((p) => p.id === e.target.value)
          if (product) window.location.href = product.path
        }}
      >
        {PRODUCTS.map((p) => (
          <option key={p.id} value={p.id}>{p.label}</option>
        ))}
      </select>
    </div>
  )
}

// ── Wrapper ───────────────────────────────────────────────────────────────────

export default function DocSidebar(props: Props): React.JSX.Element {
  const windowSize = useWindowSize()
  const { pathname } = useLocation()

  // On mobile Docusaurus uses a drawer — skip our wrapper, keep original
  if (windowSize !== 'desktop') {
    return <OriginalDocSidebar {...props} />
  }

  // Detect section by pathname — more reliable than useActivePlugin() which
  // can return undefined if the plugin context isn't available in the sidebar.
  const isLT  = pathname.startsWith('/user-guides/live-transcoder')
  const isTOE = pathname.startsWith('/user-guides/twenty-one-encoder')
  const isCD  = pathname.startsWith('/cloud-deployment')

  const isUserGuide = isLT || isTOE
  const hasPanel    = isUserGuide || isCD

  return (
    <div className="sidebar-shell">
      {hasPanel && (
        <div className="sidebar-top-panel">
          {isUserGuide && (
            <ProductSwitcher activeId={isLT ? 'live-transcoder' : 'twenty-one-encoder'} />
          )}
          {isCD && <VersionDropdown pluginId="cloud-deployment" />}
          {isLT  && <VersionDropdown pluginId="live-transcoder" />}
          {isTOE && <VersionDropdown pluginId="twenty-one-encoder" />}
        </div>
      )}
      <div className="sidebar-scroll-area">
        <OriginalDocSidebar {...props} />
      </div>
      <div className="sidebar-kb-label" aria-hidden="true">Knowledge Base</div>
    </div>
  )
}
