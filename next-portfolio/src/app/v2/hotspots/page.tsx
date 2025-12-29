"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function HotspotsPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <button
          onClick={() => router.back()}
          style={{
            color: "#656765",
            fontSize: "0.8rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginBottom: "1.5rem",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#c6cdce")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#656765")}
        >
          ← back
        </button>

        <header style={{ marginBottom: "2rem" }}>
          <p style={{ color: "#656765", fontSize: "0.6rem", margin: 0, marginBottom: "0.5rem" }}>
            july 20th, 2025 · 14min read
          </p>
          <div className={styles.header}>
            <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>hotspots</h1>
            <div className={styles.socialLinks}>
              <a href="https://hotspots-ai.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[website]</a>
              <a href="https://www.linkedin.com/posts/devp19_the-recent-heat-across-the-city-of-toronto-activity-7345587728895328257-vc3u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
              <a href="https://github.com/devp19/HotSpots-AI" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
            </div>
          </div>
          <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
            machine learning data visualization for urban heat vulnerability
          </p>
        </header>

        <div className={styles.divider}></div>

        <article style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <img 
              src="/v2/hotspots_v2.png" 
              alt="Hotspots" 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          </div>

          <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <p style={{ marginBottom: "1rem" }}>
              HotSpots AI explores urban heat vulnerability and tree planting priorities in Toronto 
              using machine learning, satellite data, and 3D visualization for sustainable urban 
              development.
            </p>

            <p style={{ marginBottom: "1rem" }}>
              The platform combines satellite imagery, temperature data, and demographic information 
              to identify areas most vulnerable to heat and prioritize where tree planting would have 
              the greatest impact on urban cooling.
            </p>

            <h2 style={{ color: "#c6cdce", fontSize: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }}>
              key features
            </h2>

            <ul style={{ color: "#656765", fontSize: "0.9rem", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
              <li>machine learning models for heat vulnerability prediction</li>
              <li>satellite data analysis and processing</li>
              <li>interactive 3d visualization of urban heat patterns</li>
              <li>tree planting priority recommendations</li>
              <li>demographic and geographic data integration</li>
            </ul>

            <h2 style={{ color: "#c6cdce", fontSize: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }}>
              tech stack
            </h2>

            <p style={{ color: "#656765", fontSize: "0.9rem", lineHeight: "1.8" }}>
              python, machine learning, satellite data processing, three.js, next.js, react, 
              data visualization
            </p>
          </div>
        </article>

        <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
      </main>
    </div>
  );
}

