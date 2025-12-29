"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function TunnelPage() {
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
            padding: "0.25rem 0.5rem",
            marginBottom: "1.5rem",
            textDecoration: "none",
            transition: "all 0.2s ease",
            borderRadius: "2px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#c6cdce";
            e.currentTarget.style.backgroundColor = "#404140";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#656765";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          ← back
        </button>

        <header style={{ marginBottom: "2rem" }}>
          <p style={{ color: "#656765", fontSize: "0.6rem", margin: 0, marginBottom: "0.5rem" }}>
            september 15th, 2025 · 18min read
          </p>
          <div className={styles.header}>
            <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>tunnel</h1>
            <div className={styles.socialLinks}>
              <a href="https://tunnel-pmf.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[website]</a>
              <a href="https://www.linkedin.com/posts/krish-garg_we-won-hack-the-north-twice-in-the-same-day-activity-7373128956130033664-vpse?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
              <a href="https://github.com/devp19/tunnel" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
            </div>
          </div>
          <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
            ai agents for accurate pmf (product market fit) simulations
          </p>
        </header>

        <div className={styles.divider}></div>

        <article style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <img 
              src="/v2/tunnel_v2.png" 
              alt="Tunnel" 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          </div>

          <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <p style={{ marginBottom: "1rem" }}>
              Tunnel is an AI-powered market simulation platform that empowers you to test your product 
              ideas against hundreds of dynamic, intelligent personas. It provides real-time insights 
              and feedback for smarter decision-making, helping validate product-market fit before 
              building.
            </p>

            <p style={{ marginBottom: "1rem" }}>
              Built for HackTheNorth 2025, Tunnel won the competition by combining advanced AI agents, 
              voice interactions, and interactive 3D visualizations to create realistic market 
              simulations.
            </p>

            <h2 style={{ color: "#c6cdce", fontSize: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }}>
              key features
            </h2>

            <ul style={{ color: "#656765", fontSize: "0.9rem", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
              <li>dynamic ai persona generation with demographic and psychographic data</li>
              <li>real-time voice interactions via vapi and mcp server</li>
              <li>interactive 3d globe visualization for market insights</li>
              <li>cohere ai for semantic understanding and ranking</li>
              <li>session management with mongodb for persistent simulations</li>
            </ul>

            <h2 style={{ color: "#c6cdce", fontSize: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }}>
              tech stack
            </h2>

            <p style={{ color: "#656765", fontSize: "0.9rem", lineHeight: "1.8" }}>
              next.js, react, three.js, cohere ai, vapi, mongodb atlas, auth0, vercel
            </p>
          </div>
        </article>

        <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
      </main>
    </div>
  );
}

