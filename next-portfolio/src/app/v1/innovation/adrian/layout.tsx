
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adrian - AI Voice Agent | Dev Patel',
  description: 'Adrian is an AI voice agent built on a RAG pipeline leveraging OpenAI and LiveKit',
  
  openGraph: {
    title: 'Adrian - AI Voice Agent | Dev Patel',
    description: 'Adrian is an AI voice agent built on a RAG pipeline leveraging OpenAI and LiveKit',
    url: 'https://devp.ca/cua',
    siteName: 'Dev Patel',
    images: [
      {
        url: '/f1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Adrian - AI Voice Agent | Dev Patel',
      },
    ],
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Adrian - AI Voice Agent | Dev Patel',
    description: 'Adrian is an AI voice agent built on a RAG pipeline leveraging OpenAI and LiveKit',
    images: ['/f1.jpeg'],
  },
}

export default function AdrianLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return children
  }