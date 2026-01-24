  "use client";

  import { useState, useEffect } from "react";
  import styles from "./v3.module.css";

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

  export default function V3Page() {
    const [currentTime, setCurrentTime] = useState("");
    const [viewerCount, setViewerCount] = useState<string>("");
    const [showWriting, setShowWriting] = useState(false);

    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        // Format time in San Francisco timezone (America/Los_Angeles)
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        
        const timeString = formatter.format(now);
        const parts = timeString.split(' ');
        const time = parts[0];
        const ampm = parts[1];
        
        // Get timezone abbreviation (PST/PDT)
        const tzFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Los_Angeles',
          timeZoneName: 'short',
        });
        const tzParts = tzFormatter.formatToParts(now);
        const timeZone = tzParts.find(part => part.type === 'timeZoneName')?.value || 'PST';
        
        setCurrentTime(`${time} ${ampm} ${timeZone}`);
      };

      updateTime();
      const interval = setInterval(updateTime, 1000);

      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const handleViewCount = async () => {
        try {
          // Increment the view count
          const incrementResponse = await fetch('/api/increment-views', {
            method: 'POST',
          });
          const incrementData = await incrementResponse.json();
          
          if (incrementData.count) {
            // Format the number with commas
            const formatted = incrementData.count.toLocaleString();
            setViewerCount(formatted);
          }
        } catch (error) {
          console.error('Failed to handle view count:', error);
          // Fallback: try to just get the count
          try {
            const response = await fetch('/api/get-views');
            const data = await response.json();
            if (data.count) {
              const formatted = data.count.toLocaleString();
              setViewerCount(formatted);
            }
          } catch (e) {
            console.error('Failed to fetch view count:', e);
          }
        }
      };
      handleViewCount();
    }, []);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const handleWritingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setShowWriting(true);
    };

    const handleBack = () => {
      setShowWriting(false);
    };

    return (
      <div className={styles.container}>
        <main className={`${styles.mainContent} ${showWriting ? styles.writingMode : ""}`}>
          {!showWriting ? (
            <div className={`${styles.contentWrapper} ${showWriting ? styles.hidden : ""}`}>
              <h1 className={styles.name}>Dev Patel</h1>

              <p className={styles.updatedDate}>Updated {formattedDate}</p>
              <br></br>
              <div className={styles.content}>
                
                <p className={styles.textBlack}>
                  Building on the intersection of ai infrastructure, distributed systems and cognitive science.
                </p>

                <p className={styles.textBlack}>
                  Currently in San Francisco building the trust layer for agentic AI as a software engineer at{" "}
                  <a href="#" className={styles.link}>
                    Bluejay (YC X25)
                  </a>.
                  <br></br>
                  <br></br>
                  Previously, AI and Automation at{" "}
                  <a href="#" className={styles.link}>
                    Fidelity Investments
                  </a>
                  .
                </p>

                <p className={styles.textBlack}>
                  Studying Computer Science at{" "}
                  <a href="#" className={styles.link}>
                    TorontoMet
                  </a>
                  .
                </p>
              </div>
              <br></br>

              <div className={styles.socialLinks}>
                <a href="#" onClick={handleWritingClick} className={styles.textSecondary}>
                  Writing
                </a>
                <span className={styles.textSecondary}> / </span>
                <a href="https://x.com/_devp" className={styles.textSecondary}>
                  Innovation
                </a>
                <span className={styles.textSecondary}> / </span>
                <a href="https://x.com/_devp" className={styles.textSecondary}>
                  GitHub
                </a>
                <span className={styles.textSecondary}> / </span>
                <a href="https://x.com/_devp" className={styles.textSecondary}>
                  X
                </a>
              </div>
            </div>
          ) : (
            <div className={`${styles.writingSection} ${showWriting ? styles.visible : ""}`}>
              <button onClick={handleBack} className={styles.backButton}>
                ← Back
              </button>
              <h1 className={styles.writingTitle}>Writing</h1>

              <div className={styles.articlesList}>
                {articles.map((article, index) => (
                  <article
                    key={article.id}
                    className={styles.article}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {article.href ? (
                      <a href={article.href} className={styles.articleLink}>
                        <h2 className={styles.articleTitle}>{article.title}</h2>
                        <p className={styles.articleDate}>{article.date}</p>
                        <p className={styles.articleDescription}>{article.description}</p>
                      </a>
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
            </div>
          )}

          <div className={styles.footer}>
            <span className={styles.timeDisplay}>
              {currentTime}
            </span>
            <span className={styles.viewerCount}>
              {viewerCount ? `${viewerCount} views` : ''}
            </span>
          </div>
        </main>
      </div>
    );
  }
