"use client";

import { useRouter } from "next/navigation";
import styles from "../../page.module.css";

export default function WriteupPage() {
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
        <p style={{ color: "#656765", fontSize: "0.6rem", margin: 0, marginBottom: "0.5rem" }}>
          [date] · [read time]
        </p>
        <header style={{ marginBottom: "2rem" }}>
          <div className={styles.header}>
            <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>[title]</h1>
            <div className={styles.socialLinks}>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[website]</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
            </div>
          </div>
          <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
            [description]
          </p>
        </header>

        <div className={styles.divider}></div>

        <article style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <img 
              src="/placeholder-cover.png" 
              alt="Cover" 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          </div>

          <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <section id="introduction">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                introduction
              </h2>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                [content]
              </p>
            </section>

            <section id="section-1">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                section title
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                [content]
              </p>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                [content]
              </p>
            </section>

            <section id="section-2">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                section title
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                [content]
              </p>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                [content]
              </p>
            </section>
          </div>
        </article>

        <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
      </main>
    </div>
  );
}





