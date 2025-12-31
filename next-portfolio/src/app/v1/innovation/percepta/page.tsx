"use client";

import Image from "next/image";
import { IconCalendar, IconStack2, IconInfoCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiaGithub } from "react-icons/lia";
import { FaLink } from "react-icons/fa6";

export default function PerceptaPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    setLightMode(localStorage.getItem("theme") === "light");
  }, []);

  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    document.body.style.overflow = isMobile ? "hidden" : "";

    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.cursor = "";
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, [isMobile]);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => {
      router.push("/innovation");
    }, 200);
  };

  const smoothScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const textColor = lightMode ? "#111" : "#111";
  const fadedText = lightMode ? "#444" : "#444";
  const fadedLabel = lightMode ? "#666" : "#666";
  const bgColor = lightMode ? "#ffffff" : "#ffffff";

  if (isMobile) {
    return (
      <main
        className={`min-h-screen px-4 py-8 font-sans transition-all duration-700 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{ background: bgColor, color: textColor }}
      >
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer"
            style={{ color: fadedText }}
            onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
          >
            ← Back
            <span className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </button>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <p style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                Research Project
              </p>
              <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <span>Percepta</span>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Percepta Website">
                    <FaLink size={16} color={textColor} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Percepta GitHub">
                    <LiaGithub size={20} color={textColor} />
                  </a> */}
                </div>
              </h1>
              <p style={{ fontSize: "0.85rem", color: fadedText, lineHeight: "1.5" }}>
                Revolutionizing document review through heatmap-based identification and intelligent keyword injection at dense content areas, streamlining the analysis of complex documents.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-2" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconCalendar size={16} color={textColor} /> Details
                </h3>
                <p style={{ color: fadedText, fontSize: "0.8rem" }}>Open Source Document Analysis Tool</p>
                <p style={{ color: fadedText, fontSize: "0.8rem" }}>June 2025 – Present</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-3" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconStack2 size={16} color={textColor} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "PDF.js", "Canvas API", "Natural Language Processing"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white rounded text-xs border" style={{ color: fadedText, borderColor: "#e5e7eb" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-3" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconInfoCircle size={16} color={textColor} /> Table of Contents
                </h3>
                <div className="space-y-2">
                  {[
                    { id: "introduction", title: "Introduction" },
                    { id: "document-analysis-challenge", title: "Document Analysis Challenge" },
                    { id: "heatmap-technology", title: "Heatmap Technology" },
                    { id: "keyword-injection", title: "Intelligent Keyword Injection" },
                    { id: "future-plans", title: "Future Development" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => smoothScrollToSection(item.id)}
                      className="block py-1 text-left w-full"
                      style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer" }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div style={{ background: "#fff", borderRadius: "0.75rem", overflow: "hidden" }}>
              <Image src="/percepta-hero.png" alt="Percepta Heatmap Visualization" width={1200} height={800} className="w-full object-cover rounded-xl" priority />
            </div>

            <div className="border-t border-gray-200" style={{ maxWidth: "100%", marginBottom: "1rem", marginTop: '50px' }}></div>

            <article className="space-y-6">
              <section id="introduction">
                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>Visual Document Intelligence</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Percepta transforms how professionals analyze complex documents by providing intuitive heatmap visualizations that highlight content density and importance. By combining visual analytics with intelligent keyword injection to streamline document review processes, I leveraged
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  By advanced text analysis algorithms and interactive heatmap generation, users to quickly identify key sections, track content patterns, and enhance documents with contextual keywords—making document analysis more efficient and insightful than ever before.
                </p>
              </section>

              <section id="document-analysis-challenge">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>The Document Analysis Challenge</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Traditional document review is a time-consuming process that relies heavily on manual scanning and keyword searching. Legal professionals, researchers, and analysts often spend countless hours combing through lengthy documents to identify relevant sections and extract meaningful insights.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Existing tools focus primarily on text search and basic highlighting, but fail to provide the visual context needed to understand document structure, content density, and thematic patterns. This creates inefficiencies and increases the risk of missing critical information.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Percepta addresses these limitations by introducing visual intelligence to document analysis, transforming static text into dynamic, interactive heatmaps that reveal hidden patterns and guide attention to the most important content areas.
                </p>
              </section>

              <section id="heatmap-technology">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Advanced Heatmap Technology</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  The proprietary heatmap engine analyzes document content using natural language processing techniques to identify areas of high information density. The system evaluates factors including keyword frequency, semantic importance, and contextual relevance to generate accurate heat visualizations.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  The heatmap overlay provides immediate visual feedback, allowing users to scan documents at a glance and focus their attention on the most content-rich sections. Color-coded intensity levels guide users from low-density areas to critical passages that require detailed review.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Built using modern web technologies including Canvas API and PDF.js, the heatmap rendering is optimized for performance while maintaining high visual fidelity across different document formats and sizes.
                </p>
              </section>

              <section id="keyword-injection">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Intelligent Keyword Injection</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Beyond visualization, Percepta offers intelligent keyword injection capabilities that automatically identify optimal locations for adding contextual keywords and annotations. The system analyzes content density patterns to suggest the most effective placement points.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  This feature is particularly valuable for legal document preparation, academic research, and content optimization where strategic keyword placement can enhance document searchability and semantic coherence without disrupting readability.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  The injection algorithm considers contextual relevance, semantic flow, and user-defined criteria to ensure that added keywords integrate naturally with existing content while maximizing their analytical and discovery value.
                </p>
              </section>

              <section id="future-plans">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Future Development</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Upcoming features include machine learning-powered content classification, collaborative annotation tools, and integration with popular document management systems. I'm also working on developing API endpoints for enterprise integration and custom workflow automation.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  The roadmap includes support for additional document formats, real-time collaborative editing, and advanced analytics dashboards that provide insights into document patterns and review efficiency metrics.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  As an open-source project, I'm committed to building a community of contributors and users who can help shape Percepta's development, ensuring it meets the diverse needs of document analysis professionals across industries.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <style jsx global>{`
        /* Custom scrollbar styles for webkit browsers (Chrome, Safari, Edge) */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }
        
        /* Custom scrollbar for Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
        }
        
        /* For better compatibility across browsers */
        .custom-scrollbar {
          scrollbar-gutter: stable;
        }
      `}</style>
      <div
        className={`h-screen flex flex-col font-sans transition-all duration-700 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{ background: bgColor, color: textColor }}
      >
        <div className="flex-shrink-0 px-6 py-6">
          <div className="mx-auto max-w-6xl">
            <button
              onClick={handleBack}
              className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer ml-6 mt-10"
              style={{ color: fadedText }}
              onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
              onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
            >
              ← Back
              <span className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-6 flex gap-10">
            <div className="w-[400px] flex-shrink-0 overflow-y-auto pr-4 custom-scrollbar">
              <div className="space-y-6">
                <div>
                  <p style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                    Research Project
                  </p>

                  <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    Percepta
                    {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Percepta Website" style={{ paddingLeft: "1rem" }}>
                      <FaLink size={15} color={textColor} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Percepta GitHub">
                      <LiaGithub size={20} color={textColor} />
                    </a> */}
                  </h1>

                  <p style={{ fontSize: "0.8rem", color: fadedText, width: "80%" }}>
                    Revolutionizing document review through heatmap-based identification and intelligent keyword injection at dense content areas, streamlining the analysis of complex documents.
                  </p>
                  <div className="flex items-center gap-2 ml-1 mt-4">
                    <div className="relative">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                    </div>
                    <span style={{fontSize: "0.8rem", color: fadedText}}>MVP Research</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="border-t border-gray-200" style={{ maxWidth: "80%", marginBottom: "1rem" }}></div>

                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconInfoCircle size={"0.8rem"} color={textColor} /> Table of Contents
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li><button onClick={() => smoothScrollToSection('introduction')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Introduction</button></li>
                      <li><button onClick={() => smoothScrollToSection('document-analysis-challenge')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Document Analysis Challenge</button></li>
                      <li><button onClick={() => smoothScrollToSection('heatmap-technology')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Heatmap Technology</button></li>
                      <li><button onClick={() => smoothScrollToSection('keyword-injection')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Intelligent Keyword Injection</button></li>
                      <li><button onClick={() => smoothScrollToSection('future-plans')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Future Development</button></li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200" style={{ maxWidth: "80%", marginBottom: "1rem" }}></div>

                  <div>
                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconCalendar size={"0.8rem"} color={textColor} /> Details
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li>Open Source Document Analysis Tool</li>
                      <li>June 2025 – Present</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200" style={{ maxWidth: "80%" }}></div>

                  <div>
                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconStack2 size={"0.8rem"} color={textColor} /> Tech Stack
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Node.js</li>
                      <li>PDF.js</li>
                      <li>Canvas API</li>
                      <li>Natural Language Processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-12 pr-4 custom-scrollbar">
              <div className="space-y-5 pr-4">
                <div style={{ background: "#fff", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <Image src="/percepta-hero.png" alt="Percepta Heatmap Visualization" width={1200} height={800} className="w-full object-cover rounded-xl" priority />
                </div>

                <div className="border-t border-gray-200" style={{ maxWidth: "100%", marginBottom: "1rem", marginTop: '50px' }}></div>

                <article className="prose prose-invert max-w-none">
                  <section id="introduction">
                    <h2 style={{ fontSize: "1.5rem" }}>Visual Document Intelligence</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Percepta changes the way professionals go through complex documents by turning them into intuitive heatmaps that highlight where the most important content is. Instead of digging through pages, you can instantly see what matters. Using smart text analysis and keyword suggestions, Percepta makes it easier to spot key sections, follow content patterns, and add helpful context. The result is faster, clearer, and way more insightful document reviews.
                    </p>
                  </section>

                  <section id="document-analysis-challenge">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>The Document Analysis Challenge</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
Going through documents the old way takes forever. Most people still rely on manual scanning and keyword searches, which means hours of digging through long files just to find what’s relevant. Lawyers, researchers, and analysts especially know this pain. Current tools don’t make it much better—they mostly offer plain text search or basic highlights, but they don’t show the bigger picture, like how the document is structured or where the content is most dense.                      <br /><br />
                      I wanted a visual approach that could reveal hidden patterns and guide attention to the most important content areas. Percepta is the answer: a  document analysis tool that puts visual intelligence and efficiency first; created to solve the very review challenges professionals face daily.
                    </p>
                  </section>

                  <section id="heatmap-technology">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Advanced Heatmap Technology</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      The proprietary heatmap engine analyzes document content using natural language processing techniques to identify areas of high information density. The system evaluates factors including keyword frequency, semantic importance, and contextual relevance to generate accurate heat visualizations. The heatmap overlay provides immediate visual feedback, allowing users to scan documents at a glance and focus their attention on the most content-rich sections.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Built using modern web technologies including Canvas API and PDF.js, the heatmap rendering is optimized for performance while maintaining high visual fidelity across different document formats and sizes. Color-coded intensity levels guide users from low-density areas to critical passages that require detailed review.
                    </p>
                  </section>

                  <section id="keyword-injection">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Intelligent Keyword Injection</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Beyond visualization, Percepta offers intelligent keyword injection capabilities that automatically identify optimal locations for adding contextual keywords and annotations. The system analyzes content density patterns to suggest the most effective placement points. This feature is particularly valuable for legal document preparation, academic research, and content optimization.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      The injection algorithm considers contextual relevance, semantic flow, and user-defined criteria to ensure that added keywords integrate naturally with existing content while maximizing their analytical and discovery value.
                    </p>
                  </section>

                  <section id="future-plans">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Future Development</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Upcoming features include machine learning-powered content classification, collaborative annotation tools, and integration with popular document management systems. I'm also working on developing API endpoints for enterprise integration and custom workflow automation. The roadmap includes support for additional document formats and real-time collaborative editing.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      As an open-source project, I'm committed to building a community of contributors and users who can help shape Percepta's development, ensuring it meets the diverse needs of document analysis professionals across industries.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Additional planned features include advanced analytics dashboards, machine learning-powered insights, and enhanced collaboration tools that make document analysis more intelligent and collaborative than ever before.
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}