import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  cloudDeploymentSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
    {
      type: 'doc',
      id: 'prerequisites/get-subscription',
      label: 'Get Subscription',
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'AWS',
          link: { type: 'doc', id: 'installation/aws/index' },
          items: [
            'installation/aws/launch-host-instance',
            'installation/aws/prepare-host-os',
          ],
        },
        {
          type: 'category',
          label: 'Azure',
          link: { type: 'doc', id: 'installation/azure/index' },
          items: [
            'installation/azure/launch-host-instance',
            'installation/azure/prepare-host-os',
          ],
        },
        {
          type: 'category',
          label: 'Google Cloud',
          link: { type: 'doc', id: 'installation/google-cloud/index' },
          items: [
            'installation/google-cloud/prerequisites',
            'installation/google-cloud/launch-host-instance',
            'installation/google-cloud/prepare-host-os',
          ],
        },
        {
          type: 'category',
          label: 'Oracle Cloud',
          link: { type: 'doc', id: 'installation/oracle-cloud/index' },
          items: [
            'installation/oracle-cloud/launch-host-instance',
            'installation/oracle-cloud/prepare-host-os',
          ],
        },
        {
          type: 'category',
          label: 'On-premises',
          link: { type: 'doc', id: 'installation/on-prem/index' },
          items: [
            'installation/on-prem/hw-requirements',
            'installation/on-prem/prepare-ubuntu',
            'installation/on-prem/prepare-other-os',
          ],
        },
        {
          type: 'category',
          label: 'Installing Live Transcoder (ISO)',
          link: { type: 'doc', id: 'installation/installing-transcoder/index' },
          items: [
            'installation/installing-transcoder/prerequisites',
            'installation/installing-transcoder/on-prem',
          ],
        },
        {
          type: 'doc',
          id: 'installation/installing-twenty-one-encoder',
          label: 'Installing Twenty-One Encoder',
        },
      ],
    },
    {
      type: 'category',
      label: 'Run',
      collapsed: false,
      items: [
        'run/run-docker-container',
        'run/running-without-gpu',
        'run/gpu-codec-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/get-started',
        'usage/usage-guide',
        'usage/monitoring',
        'usage/api-reference',
        'usage/how-to-upgrade',
        'usage/how-to-downgrade',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: { type: 'doc', id: 'troubleshooting/index' },
      items: [
        'troubleshooting/web-ui-access',
        'troubleshooting/ndi-sources',
        'troubleshooting/hls-output',
        'troubleshooting/licensing',
        'troubleshooting/pipeline-creation',
        'troubleshooting/frame-dropping',
        'troubleshooting/support-requests',
        'troubleshooting/video-specification',
        'troubleshooting/gpu-visibility-docker',
        'troubleshooting/monitoring-problems',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general-faqs',
        'faq/hls-storage-calculation',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/support-guide',
        'advanced/contact-details',
        'advanced/advanced-troubleshooting',
        'advanced/diagnostics',
        'advanced/cpu-gpu-processing-table',
        'advanced/live-transcoder-feature-set',
        'advanced/license-model',
        'advanced/performance-testing',
      ],
    },
  ],
}

export default sidebars
