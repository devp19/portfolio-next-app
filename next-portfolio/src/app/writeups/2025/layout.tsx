import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2025 Year in Review | Dev Patel',
  description: 'A comprehensive reflection on my 2025 journey - from hackathon wins and startup building to landing at top tech companies. A year of growth, challenges, and unexpected turns.',

  openGraph: {
    title: '2025 Year in Review – Dev Patel',
    description: 'A comprehensive reflection on my 2025 journey - from hackathon wins and startup building to landing at top tech companies.',
    url: 'https://devp.ca/writeups/2025',
    siteName: 'Dev Patel',
    images: [
      {
        url: '/v2/yearinreview.png',
        width: 1200,
        height: 630,
        alt: '2025 Year in Review – Dev Patel',
      },
    ],
    type: 'article',
    publishedTime: '2025-01-04T00:00:00.000Z',
    authors: ['Dev Patel'],
  },

  twitter: {
    card: 'summary_large_image',
    title: '2025 Year in Review – Dev Patel',
    description: 'A comprehensive reflection on my 2025 journey - from hackathon wins and startup building to landing at top tech companies.',
    images: ['/v2/yearinreview.png'],
  },
}

export default function Year2025Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
