import React from 'react'

function getEmbedUrl(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

interface Props {
  url: string
  title?: string
}

export default function YouTubeEmbed({ url, title = 'Video' }: Props): JSX.Element | null {
  const embedUrl = getEmbedUrl(url)
  if (!embedUrl) return null

  return (
    <div className="feature-detail__section no-print">
      <p className="feature-detail__section-label">Video</p>
      <div className="youtube-embed">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
