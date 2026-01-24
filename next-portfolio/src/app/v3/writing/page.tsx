"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./writing.module.css";

interface Article {
  id: string;
  title: string;
  date: string;
  description: string;
  href?: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Building Trust in Agentic AI",
    date: "January 2025",
    description: "Exploring the challenges and solutions for creating trustworthy AI agents.",
  },
  {
    id: "2",
    title: "Distributed Systems at Scale",
    date: "December 2024",
    description: "Lessons learned from building distributed systems that handle millions of requests.",
  },
  {
    id: "3",
    title: "The Future of Cognitive Computing",
    date: "November 2024",
    description: "How cognitive science principles are shaping the next generation of AI systems.",
  },
];

export default function WritingPage() {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => {
      router.push("/v3");
    }, 300);
  };

  return (
    <div className={`${styles.container} ${mounted ? styles.visible : ""} ${exiting ? styles.exiting : ""}`}>
      <main className={styles.mainContent}>
        <div className={styles.header}>
          <button onClick={handleBack} className={styles.backButton}>
            ← Back
          </button>
          <h1 className={styles.title}>Writing</h1>
        </div>

        <div className={styles.articlesList}>
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={styles.article}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {article.href ? (
                <Link href={article.href} className={styles.articleLink}>
                  <h2 className={styles.articleTitle}>{article.title}</h2>
                  <p className={styles.articleDate}>{article.date}</p>
                  <p className={styles.articleDescription}>{article.description}</p>
                </Link>
              ) : (
                <div>
                  <h2 className={styles.articleTitle}>{article.title}</h2>
                  <p className={styles.articleDate}>{article.date}</p>
                  <p className={styles.articleDescription}>{article.description}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
