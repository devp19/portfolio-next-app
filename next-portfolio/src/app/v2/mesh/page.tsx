"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function MeshPage() {
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
            october 12th, 2025 · 15min read
          </p>
          <div className={styles.header}>
            <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>mesh</h1>
            <div className={styles.socialLinks}>
              <a href="https://mesh3d.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[website]</a>
              <a href="https://github.com/devp19/Mesh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
              <a href="https://github.com/devp19/Mesh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
            </div>
          </div>
          <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
            built the coordination layer for 3d geospatial data
          </p>
        </header>

        <div className={styles.divider}></div>

        <article style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <img 
              src="/v2/meshlarge.png" 
              alt="Mesh" 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          </div>

          <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <p style={{ marginBottom: "1rem" }}>
              Mesh is an AI-powered 3D model processing platform that automates mesh component extraction, 
              identification, and educational visualization. Upload a GLB file or generate a 3D model and 
              have AI automatically identify, annotate, and explain every part.
            </p>

            <p style={{ marginBottom: "1rem" }}>
              The platform combines traditional geometry analysis with AI vision models to provide 
              comprehensive 3D model analysis in seconds, making complex 3D exploration accessible 
              to everyone.
            </p>

            <h2 style={{ color: "#c6cdce", fontSize: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }}>
              key features
            </h2>

            <ul style={{ color: "#656765", fontSize: "0.9rem", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
              <li>automatic mesh component extraction using buffer geometry utilities</li>
              <li>ai-powered component identification with gemini pro vision</li>
              <li>educational content generation with gpt-4</li>
              <li>physical hardware control with m5stickcplus2 for intuitive 3d navigation</li>
              <li>real-time 3d visualization with three.js and react three fiber</li>
            </ul>

            <h2 style={{ color: "#c6cdce", fontSize: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }}>
              tech stack
            </h2>

            <p style={{ color: "#656765", fontSize: "0.9rem", lineHeight: "1.8" }}>
              next.js, react, three.js, react three fiber, gemini pro, gpt-4, arduino m5stickcplus2, 
              web bluetooth api, openrouter api
            </p>

          </div>
        </article>

        <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
      </main>
    </div>
  );
}

