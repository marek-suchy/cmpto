export type FeatureCategory = 'Audio' | 'Video' | 'Metadata' | 'Monitoring' | 'Processing'

export type Feature = {
  id: string
  name: string
  category: FeatureCategory
  products: string[]
  useCases: string[]
  keywords: string[]
  status: 'stable' | 'beta' | 'coming-soon'
  since?: string
}

export const PRODUCTS = ['AJA Bridge Live', 'Comprimato Live Transcoder']

export const USE_CASES = [
  'Remote production',
  'Cloud production',
  'On-prem production',
  'Live events',
  'Broadcast contribution',
  'Sports production',
  'News production',
  'Distribution',
  'Frame-rate conversion',
]

export const features: Feature[] = [
  {
    id: 'audio-only',
    name: 'Audio Only',
    category: 'Audio',
    products: ['AJA Bridge Live', 'Comprimato Live Transcoder'],
    useCases: ['Remote production', 'Broadcast contribution', 'Distribution'],
    keywords: ['audio', 'radio', 'bandwidth', 'commentary', 'contribution', 'audio-only', 'efficiency'],
    status: 'stable',
    since: 'v1.0',
  },
  {
    id: 'av-delay',
    name: 'AV Delay',
    category: 'Audio',
    products: ['AJA Bridge Live', 'Comprimato Live Transcoder'],
    useCases: ['Remote production', 'On-prem production', 'Broadcast contribution', 'Live events'],
    keywords: ['A/V sync', 'lip-sync', 'delay compensation', 'audio alignment', 'timing', 'synchronization'],
    status: 'stable',
    since: 'v1.0',
  },
  {
    id: 'video-pass-through',
    name: 'Video Pass-through',
    category: 'Video',
    products: ['AJA Bridge Live', 'Comprimato Live Transcoder'],
    useCases: ['Remote production', 'On-prem production', 'Live events'],
    keywords: ['pass-through', 'bypass', 'low-latency', 'monitoring', 'quality preservation', 'clean feed'],
    status: 'stable',
    since: 'v1.0',
  },
  {
    id: 'start-stop-destinations',
    name: 'Start/Stop Destinations',
    category: 'Monitoring',
    products: ['AJA Bridge Live', 'Comprimato Live Transcoder'],
    useCases: ['Remote production', 'Cloud production', 'Live events', 'Broadcast contribution'],
    keywords: ['runtime control', 'multi-output', 'workflow', 'live production', 'SRT', 'MPEG-TS'],
    status: 'stable',
    since: 'v1.18',
  },
  {
    id: 'srt-redundancy',
    name: 'SRT Redundancy',
    category: 'Processing',
    products: ['AJA Bridge Live', 'Comprimato Live Transcoder'],
    useCases: ['Remote production', 'Broadcast contribution', 'Live events', 'Sports production'],
    keywords: ['SRT', 'redundancy', 'failover', 'contribution', 'reliability', 'bonding', 'internet delivery'],
    status: 'stable',
    since: 'v1.0',
  },
]
