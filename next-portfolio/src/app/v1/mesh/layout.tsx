import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesh - AI-Powered 3D Model Processing | Dev Patel",
  description: "An AI-powered 3D model processing platform that automates mesh component extraction, identification, and educational visualization with physical hardware control.",
  openGraph: {
    title: "Mesh - The Coordination Layer for GeoSpatial Data",
    description: "AI-powered 3D model processing platform with automated component identification and hardware control",
    images: ["/og-image.png"],
  },
};

export default function MeshLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

