import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  liveTranscoderSidebar: [
    { type: 'doc', id: 'index', label: 'Overview' },
    { type: 'doc', id: 'introduction', label: '1. Introduction' },
    { type: 'doc', id: 'operation', label: '2. Operation' },
    { type: 'doc', id: 'pipeline-configuration', label: '3. Pipeline Configuration' },
    { type: 'doc', id: 'srt', label: '4. SRT' },
    { type: 'doc', id: 'rtmp', label: '5. RTMP' },
    { type: 'doc', id: 'hls', label: '6. HLS' },
    { type: 'doc', id: 'ndi', label: '7. NDI' },
    { type: 'doc', id: 'timestamp-sei', label: '8. Timestamp SEI' },
    { type: 'doc', id: 'system-administration', label: '9. System Administration' },
    { type: 'doc', id: 'troubleshooting', label: '10. Troubleshooting' },
    { type: 'doc', id: 'hardware-utilization', label: '11. Hardware Utilization' },
  ],
}

export default sidebars
