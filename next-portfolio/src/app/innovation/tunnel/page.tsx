"use client";

import Image from "next/image";
import { IconCalendar, IconStack2, IconInfoCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiaGithub } from "react-icons/lia";
import { FaLink, FaLinkedin } from "react-icons/fa6";

export default function ResDexPage() {
  const [exiting, setExiting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    setLightMode(localStorage.getItem("theme") === "light");
  }, []);

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => {
      document.body.style.cursor = "";
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, []);

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

  const textColor = "#ffffff";
  const fadedText = "#9ca3af"; // muted text
  const fadedLabel = "#a1a1aa"; // slightly stronger muted label
  const bgColor = "#0e0e0e";

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
        <div className="flex-shrink-0 px-4 sm:px-6 py-6">
          <div className="mx-auto max-w-6xl">
            <button
              onClick={handleBack}
              className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer ml-2 sm:ml-6 mt-6 sm:mt-10"
              style={{ color: fadedText }}
              onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
              onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
            >
              ← Back
              <span className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 pb-16">
            <header className="space-y-4">
              <p style={{ color: fadedLabel, fontSize: "0.8rem" }}>HackTheNorth 2x Track Winner</p>
              <h1 style={{ fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Tunnel
                <a href="https://resdex.ca" target="_blank" rel="noopener noreferrer" aria-label="ResDex Website" style={{ paddingLeft: "0.75rem" }}>
                  <FaLink size={15} color={textColor} />
                </a>
                <a href="https://github.com/devp19/resdex" target="_blank" rel="noopener noreferrer" aria-label="ResDex GitHub">
                  <LiaGithub size={20} color={textColor} />
                </a>
                <a href="https://linkedin.com/company/resdex" target="_blank" rel="noopener noreferrer" aria-label="ResDex LinkedIn">
                  <FaLinkedin size={17} color={textColor} />
                </a>
              </h1>
              <p style={{ fontSize: "0.9rem", color: fadedText }}>
                Tunnel is an advanced AI-powered market simulation platform designed to revolutionize how product ideas are validated and refined. Instead of relying solely on traditional market research methods (which are slow, expensive, and often inaccessible), Tunnel enables you to test your ideas instantly against a diverse array of intelligent personas, each modeled with unique demographics, psychographics, and behavioral traits.
              </p>
              <div className="flex items-center gap-2 ml-1">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span style={{fontSize: "0.8rem", color: fadedText}}>Enhancements are coming!</span>
              </div>
            </header>

            <div className="mt-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #2a2a2a" }}>
              <video src="/vid.mp4" width={1200} height={800} className="w-full object-cover rounded-2xl" autoPlay loop muted playsInline></video>
            </div>

            <nav className="mt-10">
              <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                <IconInfoCircle size={"0.8rem"} color={textColor} /> Table of Contents
              </h3>
              <ul style={{ color: fadedText, fontSize: "0.85rem" }} className="space-y-1">
                <li><button onClick={() => smoothScrollToSection('introduction')} style={{ color: fadedText, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Introduction</button></li>
                <li><button onClick={() => smoothScrollToSection('project-motive')} style={{ color: fadedText, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>The Research Access Problem</button></li>
                <li><button onClick={() => smoothScrollToSection('tech-stack-selection')} style={{ color: fadedText, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Building for Scale and Security</button></li>
                <li><button onClick={() => smoothScrollToSection('partnerships')} style={{ color: fadedText, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Partnerships & Growth</button></li>
                <li><button onClick={() => smoothScrollToSection('future-plans')} style={{ color: fadedText, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Future Plans</button></li>
              </ul>
            </nav>

            <article className="prose prose-invert max-w-none mt-10">
              <section id="introduction">
                <h2 style={{ fontSize: "1.5rem" }}>Redefining the World of Research</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  ResDex is designed to democratize access to academic research by creating a centralized platform where students can discover opportunities regardless of their institutional affiliation. By prioritizing merit over connections, ResDex ensures that all processes and networking happen transparently, eliminating the barriers that traditionally limit research access to elite institutions or well-connected individuals. Its intuitive environment accelerates academic discovery by combining portfolio showcasing, real-time search, and collaboration tools into one unified platform. With ResDex, students can seamlessly find and engage with research opportunities from any location, confidently building their academic careers without sacrificing access or opportunity.
                </p>
              </section>

              <section id="project-motive">
                <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>The Research Access Problem</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  As students ourselves, we experienced firsthand the frustration of finding meaningful research opportunities. The current system heavily favors students at prestigious institutions or those with existing academic connections, leaving talented individuals without clear pathways to contribute to cutting-edge research. Traditional academic networking relies on outdated methods like email chains, bulletin boards, and word-of-mouth referrals, creating information silos where opportunities are hidden from those who might be the perfect fit.
                  <br /><br />
                  We wanted an environment where students could discover opportunities based on merit and interest, without worrying about institutional prestige or personal connections. ResDex is our answer: a research discovery platform that puts talent, passion, and potential first; created to solve the very access barriers we encountered ourselves.
                </p>
              </section>

              <section id="tech-stack-selection">
                <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Building for Scale and Security</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  Next.js provides the foundation for our platform with its excellent performance characteristics and developer experience. TypeScript ensures code reliability and maintainability as we scale our team and feature set. For data management, we leverage both Supabase for real-time features and user authentication, and Firestore for complex querying and scalable document storage.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "1rem" }}>
                  Amazon S3 handles secure file storage for research portfolios and project documentation. This architecture allows us to handle the unique demands of academic networking while maintaining the speed and reliability that modern users expect from digital platforms.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "1rem" }}>
                  By doing a market-analysis and understanding the unique needs of academic networking, we estimate ResDex will have a reccuring growing user base with a SBS (Semester by Semester) growth of 200+ onboarded students. This is the low-end of our estimation but speaking frankly, we need to build for scalability right away!
                </p>
              </section>

              <section id="partnerships">
                <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Partnerships & Growth Strategy</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  Our growth strategy focuses on building authentic relationships with academic institutions, research labs, and student organizations. We're actively partnering with universities to integrate ResDex into their existing research ecosystems. Early adoption has been driven by word-of-mouth referrals from satisfied users who have successfully found research opportunities through the platform.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "1rem" }}>
                  This organic growth validates our core value proposition and user experience. We're also exploring partnerships with academic conferences, research foundations, and professional organizations to expand our reach and provide even more value to our growing community of researchers and students.
                </p>
              </section>

              <section id="future-plans">
                <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Expanding the Research Ecosystem</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                  Our roadmap includes advanced matching algorithms powered by machine learning to better connect students with relevant opportunities based on their skills, interests, and career goals. We're developing integrated collaboration tools, including project management features, communication channels, and progress tracking systems to support the entire research lifecycle from discovery to publication.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "1rem" }}>
                  Long-term plans include expanding into international markets, supporting multi-language content, and building partnerships with funding organizations to help students secure financial support for their research endeavors.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "1rem" }}>
                  Additional planned features include AI-powered research matching, integrated publication tracking, funding opportunity discovery, and enhanced networking tools that make academic collaboration even more seamless and effective.
                </p>
              </section>
            </article>

            <section className="hidden lg:block mt-12 grid grid-cols-2 gap-6">
              <div>
                <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                  <IconCalendar size={"0.8rem"} color={textColor} /> Details
                </h3>
                <ul style={{ color: fadedText, fontSize: "0.85rem" }}>
                  <li>Co-Founder & Founding Engineer</li>
                  <li>August 2024 – Present</li>
                </ul>
              </div>
              <div>
                <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                  <IconStack2 size={"0.8rem"} color={textColor} /> Tech Stack
                </h3>
                <ul style={{ color: fadedText, fontSize: "0.85rem" }}>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Amazon S3</li>
                  <li>Supabase</li>
                  <li>Firestore</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}