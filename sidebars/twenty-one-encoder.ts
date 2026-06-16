import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  twentyOneEncoderSidebar: [
    { type: 'doc', id: 'index', label: 'Overview' },
    { type: 'doc', id: 'introduction', label: '1. Introduction' },
    { type: 'doc', id: 'default-ui-login', label: '1.1 Default UI Login' },
    { type: 'doc', id: 'twenty-one-encoder-user-interface', label: '2. User Interface' },
    { type: 'doc', id: 'operation', label: '3. Operation' },
    { type: 'doc', id: 'pipeline-configuration', label: '4. Pipeline Configuration' },
    { type: 'doc', id: 'srt', label: '5. SRT' },
    { type: 'doc', id: 'rtmp', label: '6. RTMP' },
    { type: 'doc', id: 'hls', label: '7. HLS' },
    { type: 'doc', id: 'ndi', label: '8. NDI' },
    { type: 'doc', id: 'timestamp-sei', label: '9. Timestamp SEI' },
    { type: 'doc', id: 'st2110', label: '10. ST 2110' },
    { type: 'doc', id: 'system-administration', label: '11. System Administration' },
    { type: 'doc', id: 'using-rest-api', label: '11.1 REST API' },
    { type: 'doc', id: 'using-the-snmp-protocol', label: '11.2 SNMP Protocol' },
    { type: 'doc', id: 'troubleshooting', label: '12. Troubleshooting' },
    { type: 'doc', id: 'density', label: '13. Approximate Density' },
  ],
}

export default sidebars
