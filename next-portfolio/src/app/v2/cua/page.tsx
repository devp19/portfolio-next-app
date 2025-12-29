"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function CuaPage() {
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
            september 18th, 2025 · 12min read
          </p>
          <div className={styles.header}>
            <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>cua (yc x25)</h1>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/company/cua-ai" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
              <a href="https://github.com/cua-ai" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
            </div>
          </div>
          <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
            android docker provider for computer use agents
          </p>
        </header>

        <div className={styles.divider}></div>

        <article style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <img 
              src="/v2/cua_v2.png" 
              alt="CUA" 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          </div>

          <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <p style={{ marginBottom: "1rem" }}>
              Cua is an open-source infrastructure for Computer-Use Agents which utilizes Sandboxes, 
              SDKs, and benchmarks to train and evaluate AI agents that can control full desktops 
              (macOS, Linux, Windows).
            </p>

            <p style={{ marginBottom: "1rem" }}>
              Built the android-docker system for CUA, providing a containerized environment for 
              computer use agents to interact with Android devices. This infrastructure enables 
              seamless testing and deployment of AI agents across different Android configurations.
            </p>

            <h2 style={{ color: "#c6cdce", fontSize: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }}>
              key features
            </h2>

            <ul style={{ color: "#656765", fontSize: "0.9rem", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
              <li>docker-based android emulator environment</li>
              <li>sdk for computer use agent integration</li>
              <li>sandboxed execution for safe agent testing</li>
              <li>cross-platform compatibility (macOS, Linux, Windows)</li>
              <li>open-source infrastructure and benchmarks</li>
            </ul>

            <h2 style={{ color: "#c6cdce", fontSize: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }}>
              tech stack
            </h2>

            <p style={{ color: "#656765", fontSize: "0.9rem", lineHeight: "1.8" }}>
              docker, android emulator, python, next.js, react, computer use agent sdk
            </p>
          </div>
        </article>

        <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
      </main>
    </div>
  );
}

