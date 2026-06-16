import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Comprimato Knowledge Base',
  tagline: 'Product knowledge for AJA Bridge Live & Comprimato Live Transcoder',
  favicon: 'img/favicon.ico',
  url: 'https://know.comprimato.com',
  baseUrl: '/',
  future: { v4: true },
  onBrokenLinks: 'warn',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // ── Features ────────────────────────────────────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'features',
        path: 'docs/features',
        routeBasePath: 'features',
        sidebarPath: './sidebars/features.ts',
      },
    ],

    // ── User Guides — landing ────────────────────────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'user-guides',
        path: 'docs/user-guides',
        routeBasePath: 'user-guides',
        sidebarPath: './sidebars/user-guides.ts',
      },
    ],

    // ── User Guides — Live Transcoder (versioned) ────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'live-transcoder',
        path: 'docs/live-transcoder',
        routeBasePath: 'user-guides/live-transcoder',
        sidebarPath: './sidebars/live-transcoder.ts',
        lastVersion: 'current',
        versions: {
          current:  { label: 'v1.20.0', badge: true },
          '1.19.0': { label: 'v1.19.0', badge: true },
          '1.18.0': { label: 'v1.18.0', badge: true },
        },
      },
    ],

    // ── User Guides — Twenty-One Encoder (versioned) ─────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'twenty-one-encoder',
        path: 'docs/twenty-one-encoder',
        routeBasePath: 'user-guides/twenty-one-encoder',
        sidebarPath: './sidebars/twenty-one-encoder.ts',
        lastVersion: 'current',
        versions: {
          current:  { label: 'v1.25', badge: true },
          '1.20.0': { label: 'v1.20.0', badge: true },
          '1.19.0': { label: 'v1.19.0', badge: true },
          '1.18.0': { label: 'v1.18.0', badge: true },
          '1.17.4': { label: 'v1.17.4', badge: true },
        },
      },
    ],

    // ── Cloud Deployment ─────────────────────────────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cloud-deployment',
        path: 'docs/cloud-deployment',
        routeBasePath: 'cloud-deployment',
        sidebarPath: './sidebars/cloud-deployment.ts',
        lastVersion: 'current',
        versions: {
          current:  { label: 'v1.20.0', badge: true },
          '1.18.0': { label: 'v1.18.0', badge: true },
          '1.17.0': { label: 'v1.17.0', badge: true },
          '1.16.0': { label: 'v1.16.0', badge: true },
          '1.15.0': { label: 'v1.15.0', badge: true },
          '1.14.0': { label: 'v1.14.0', badge: true },
        },
      },
    ],

    // ── Resources ────────────────────────────────────────────────────
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'docs/resources',
        routeBasePath: 'resources',
        sidebarPath: './sidebars/resources.ts',
      },
    ],

    // ── Local search ─────────────────────────────────────────────────
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        docsPluginIdForPreferredVersion: 'features',
        docsRouteBasePath: [
          'features',
          'user-guides',
          'user-guides/live-transcoder',
          'user-guides/twenty-one-encoder',
          'cloud-deployment',
          'resources',
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      hideOnScroll: false,
      title: '',
      logo: {
        alt: 'Comprimato',
        src: 'img/logo.png',
        href: '/',
      },
      items: [
        // ── Left: section nav ──────────────────────────────────────
        {
          to: '/features',
          label: 'Features',
          position: 'left',
          activeBasePath: 'features',
        },
        {
          to: '/user-guides',
          label: 'User Guides',
          position: 'left',
          activeBasePath: 'user-guides',
        },
        {
          to: '/cloud-deployment',
          label: 'Cloud Deployment',
          position: 'left',
          activeBasePath: 'cloud-deployment',
        },
        {
          to: '/resources',
          label: 'Resources',
          position: 'left',
          activeBasePath: 'resources',
        },
        // ── Right: utility ─────────────────────────────────────────
        // Search bar injected automatically by search plugin (order: 1)
        {
          href: 'https://comprimato.com',
          label: 'comprimato.com',
          position: 'right',
          className: 'navbar__go-to-web',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'docker', 'json'],
    },
  } satisfies Preset.ThemeConfig,
}

export default config
