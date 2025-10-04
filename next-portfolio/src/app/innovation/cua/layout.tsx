
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cua – Android Docker Emulator | Dev Patel',
  description: 'Cua (YC X25) is an open-source infrastructure for Computer-Use Agents',
  
  openGraph: {
    title: 'Cua – Android Docker Emulator',
    description: 'Cua (YC X25) is an open-source infrastructure for Computer-Use Agents',
    url: 'https://devp.ca/cua',
    siteName: 'Dev Patel',
    images: [
      {
        url: '/og-cua.png',
        width: 1200,
        height: 630,
        alt: 'Cua – Android Docker Emulator',
      },
    ],
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Cua – Android Docker Emulator',
    description: 'Cua (YC X25) is an open-source infrastructure for Computer-Use Agents',
    images: ['/og-cua.png'],
  },
}

export default function CuaLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return children
  }