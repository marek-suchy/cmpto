import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  featuresSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'All Features',
    },
    {
      type: 'category',
      label: 'Audio',
      collapsed: false,
      items: [
        'audio-only',
        'av-delay',
      ],
    },
    {
      type: 'category',
      label: 'Video',
      collapsed: false,
      items: [
        'video-pass-through',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring',
      collapsed: false,
      items: [
        'start-stop-destinations',
      ],
    },
    {
      type: 'category',
      label: 'Processing',
      collapsed: false,
      items: [
        'srt-redundancy',
      ],
    },
  ],
}

export default sidebars
