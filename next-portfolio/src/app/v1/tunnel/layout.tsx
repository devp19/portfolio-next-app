
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tunnel – AI Agent Simulation | Dev Patel',
  description: 'Tunnel is an advanced AI-powered market simulation platform that lets you test product ideas instantly against intelligent personas. Winner of HackTheNorth MLH and Vapi tracks.',
  
  openGraph: {
    title: 'Tunnel – AI Agent Simulation',
    description: 'Advanced AI-powered market simulation platform. Test your product ideas instantly with intelligent personas. Winner of HackTheNorth.',
    url: 'https://devp.ca/tunnel',
    siteName: 'Dev Patel',
    images: [
      {
        url: '/og-tunnel.png',
        width: 1200,
        height: 630,
        alt: 'AI Agent Market Analysis Simulation',
      },
    ],
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Tunnel – AI Agent Simulation',
    description: 'AI-powered market simulation platform. Winner of HackTheNorth MLH and Vapi tracks.',
    images: ['/og-tunnel.png'],
  },
}

export default function TunnelLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return children
  }