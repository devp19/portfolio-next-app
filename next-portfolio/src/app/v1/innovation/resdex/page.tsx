"use client";

import Image from "next/image";
import { IconCalendar, IconStack2, IconInfoCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiaGithub } from "react-icons/lia";
import { FaLink, FaLinkedin } from "react-icons/fa6";

export default function ResDexPage() {
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
                Startup
              </p>
              <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <span>ResDex</span>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href="https://resdex.ca" target="_blank" rel="noopener noreferrer" aria-label="ResDex Website">
                    <FaLink size={16} color={textColor} />
                  </a>
                  <a href="https://github.com/devp19/resdex" target="_blank" rel="noopener noreferrer" aria-label="ResDex GitHub">
                    <LiaGithub size={20} color={textColor} />
                  </a>
                  <a href="https://linkedin.com/company/resdex" target="_blank" rel="noopener noreferrer" aria-label="ResDex LinkedIn">
                    <FaLinkedin size={17} color={textColor} />
                  </a>
                </div>
              </h1>
              <p style={{ fontSize: "0.85rem", color: fadedText, lineHeight: "1.5" }}>
                ResDex is a centralized research discovery platform that connects students with academic opportunities. Designed to break down institutional barriers, it enables users to showcase their research portfolios, discover projects, and collaborate across disciplines.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-2" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconCalendar size={16} color={textColor} /> Details
                </h3>
                <p style={{ color: fadedText, fontSize: "0.8rem" }}>Co-Founder & Founding Engineer</p>
                <p style={{ color: fadedText, fontSize: "0.8rem" }}>August 2024 – Present</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-3" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconStack2 size={16} color={textColor} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Amazon S3", "Supabase", "Firestore"].map((tech) => (
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
                    { id: "project-motive", title: "The Research Access Problem" },
                    { id: "tech-stack-selection", title: "Building for Scale and Security" },
                    { id: "partnerships", title: "Partnerships & Growth" },
                    { id: "future-plans", title: "Future Plans" }
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
              <Image src="/resdex-hero3.png" alt="ResDex Screenshot" width={1200} height={800} className="w-full object-cover rounded-xl" priority />
            </div>
                    <div className="border-t border-gray-200" style={{ maxWidth: "100%", marginBottom: "1rem", marginTop: '50px' }}></div>

            <article className="space-y-6">
              
              <section id="introduction">
                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>Redefining the World of Research</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  ResDex is designed to democratize access to academic research by creating a centralized platform where students can discover opportunities regardless of their institutional affiliation. The platform breaks down traditional barriers that often limit research access to elite institutions or well-connected individuals.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  By combining portfolio showcasing, real-time search, and networking features, ResDex transforms how students find and engage with research opportunities. Our platform makes academic collaboration as intuitive as social media, fostering connections that drive innovation across disciplines.
                </p>
              </section>

              <section id="project-motive">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>The Research Access Problem</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  As students ourselves, we experienced firsthand the frustration of finding meaningful research opportunities. The current system heavily favors students at prestigious institutions or those with existing academic connections, leaving talented individuals without clear pathways to contribute to cutting-edge research.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Traditional academic networking relies on outdated methods like email chains, bulletin boards, and word-of-mouth referrals. This creates information silos where opportunities are hidden from those who might be the perfect fit but lack the right connections.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  ResDex addresses this systemic inequality by creating a transparent, merit-based platform where research opportunities are discoverable by anyone with the passion and skills to contribute, regardless of their institutional background.
                </p>
              </section>

              <section id="tech-stack-selection">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Building for Scale and Security</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Next.js provides the foundation for our platform with its excellent performance characteristics and developer experience. TypeScript ensures code reliability and maintainability as we scale our team and feature set.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  For data management, we leverage both Supabase for real-time features and user authentication, and Firestore for complex querying and scalable document storage. Amazon S3 handles secure file storage for research portfolios and project documentation.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  This architecture allows us to handle the unique demands of academic networking while maintaining the speed and reliability that modern users expect from digital platforms.
                </p>

                 <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                    By doing a market-analysis and understanding the unique needs of academic networking, we estimate ResDex will have a reccuring growing user base with a SBS (Semester by Semester) growth of 200+ onboarded students. This is the low-end of our estimation but speaking frankly, we need to build for scalability right away!
                    </p>
              </section>

              <section id="partnerships">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Partnerships & Growth Strategy</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Our growth strategy focuses on building authentic relationships with academic institutions, research labs, and student organizations. We're actively partnering with universities to integrate ResDex into their existing research ecosystems.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Early adoption has been driven by word-of-mouth referrals from satisfied users who have successfully found research opportunities through the platform. This organic growth validates our core value proposition and user experience.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  We're also exploring partnerships with academic conferences, research foundations, and professional organizations to expand our reach and provide even more value to our growing community.
                </p>
              </section>

              <section id="future-plans">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Expanding the Research Ecosystem</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Our roadmap includes advanced matching algorithms powered by machine learning to better connect students with relevant opportunities based on their skills, interests, and career goals.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  We're developing integrated collaboration tools, including project management features, communication channels, and progress tracking systems to support the entire research lifecycle from discovery to publication.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Long-term plans include expanding into international markets, supporting multi-language content, and building partnerships with funding organizations to help students secure financial support for their research endeavors.
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
                    Startup
                  </p>

                  <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    ResDex
                    <a href="https://resdex.ca" target="_blank" rel="noopener noreferrer" aria-label="ResDex Website" style={{ paddingLeft: "1rem" }}>
                      <FaLink size={15} color={textColor} />
                    </a>
                    <a href="https://github.com/devp19/resdex" target="_blank" rel="noopener noreferrer" aria-label="ResDex GitHub">
                      <LiaGithub size={20} color={textColor} />
                    </a>
                    <a href="https://linkedin.com/company/resdex" target="_blank" rel="noopener noreferrer" aria-label="ResDex LinkedIn">
                      <FaLinkedin size={17} color={textColor} />
                    </a>
                  </h1>

                  <p style={{ fontSize: "0.8rem", color: fadedText, width: "80%" }}>
                    ResDex is a centralized research discovery platform that connects students with academic opportunities. Designed to break down institutional barriers, it enables users to showcase their research portfolios, discover projects, and collaborate across disciplines.
                  </p>
                  <div className="flex items-center gap-2 ml-1 mt-4">
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                    <span style={{fontSize: "0.8rem", color: fadedText}}>Waitlist is open!</span>
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
                      <li><button onClick={() => smoothScrollToSection('project-motive')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>The Research Access Problem</button></li>
                      <li><button onClick={() => smoothScrollToSection('tech-stack-selection')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Building for Scale and Security</button></li>
                      <li><button onClick={() => smoothScrollToSection('partnerships')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Partnerships & Growth</button></li>
                      <li><button onClick={() => smoothScrollToSection('future-plans')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Future Plans</button></li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200" style={{ maxWidth: "80%", marginBottom: "1rem" }}></div>

                  <div>
                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconCalendar size={"0.8rem"} color={textColor} /> Details
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li>Co-Founder & Founding Engineer</li>
                      <li>August 2024 – Present</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200" style={{ maxWidth: "80%" }}></div>

                  <div>
                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconStack2 size={"0.8rem"} color={textColor} /> Tech Stack
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li>Next.js</li>
                      <li>TypeScript</li>
                      <li>Amazon S3</li>
                      <li>Supabase</li>
                      <li>Firestore</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-12 pr-4 custom-scrollbar">
              <div className="space-y-5 pr-4">
                <div style={{ background: "#fff", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <Image src="/resdex-hero3.png" alt="ResDex Screenshot" width={1200} height={800} className="w-full object-cover rounded-xl" priority />
                </div>

                    <div className="border-t border-gray-200" style={{ maxWidth: "100%", marginBottom: "1rem", marginTop: '50px' }}></div>

                <article className="prose prose-invert max-w-none">
                  <section id="introduction">
                    <h2 style={{ fontSize: "1.5rem" }}>Redefining the World of Research</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      ResDex is designed to democratize access to academic research by creating a centralized platform where students can discover opportunities regardless of their institutional affiliation. By prioritizing merit over connections, ResDex ensures that all processes and networking happen transparently, eliminating the barriers that traditionally limit research access to elite institutions or well-connected individuals. Its intuitive environment accelerates academic discovery by combining portfolio showcasing, real-time search, and collaboration tools into one unified platform. With ResDex, students can seamlessly find and engage with research opportunities from any location, confidently building their academic careers without sacrificing access or opportunity.
                    </p>
                  </section>

                  <section id="project-motive">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>The Research Access Problem</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      As students ourselves, we experienced firsthand the frustration of finding meaningful research opportunities. The current system heavily favors students at prestigious institutions or those with existing academic connections, leaving talented individuals without clear pathways to contribute to cutting-edge research. Traditional academic networking relies on outdated methods like email chains, bulletin boards, and word-of-mouth referrals, creating information silos where opportunities are hidden from those who might be the perfect fit.
                      <br /><br />
                      We wanted an environment where students could discover opportunities based on merit and interest, without worrying about institutional prestige or personal connections. ResDex is our answer: a research discovery platform that puts talent, passion, and potential first; created to solve the very access barriers we encountered ourselves.
                    </p>
                  </section>

                  <section id="tech-stack-selection">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Building for Scale and Security</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Next.js provides the foundation for our platform with its excellent performance characteristics and developer experience. TypeScript ensures code reliability and maintainability as we scale our team and feature set. For data management, we leverage both Supabase for real-time features and user authentication, and Firestore for complex querying and scalable document storage.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Amazon S3 handles secure file storage for research portfolios and project documentation. This architecture allows us to handle the unique demands of academic networking while maintaining the speed and reliability that modern users expect from digital platforms.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                    By doing a market-analysis and understanding the unique needs of academic networking, we estimate ResDex will have a reccuring growing user base with a SBS (Semester by Semester) growth of 200+ onboarded students. This is the low-end of our estimation but speaking frankly, we need to build for scalability right away!
                    </p>
                  </section>

                  <section id="partnerships">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Partnerships & Growth Strategy</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Our growth strategy focuses on building authentic relationships with academic institutions, research labs, and student organizations. We're actively partnering with universities to integrate ResDex into their existing research ecosystems. Early adoption has been driven by word-of-mouth referrals from satisfied users who have successfully found research opportunities through the platform.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      This organic growth validates our core value proposition and user experience. We're also exploring partnerships with academic conferences, research foundations, and professional organizations to expand our reach and provide even more value to our growing community of researchers and students.
                    </p>
                  </section>

                  <section id="future-plans">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Expanding the Research Ecosystem</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Our roadmap includes advanced matching algorithms powered by machine learning to better connect students with relevant opportunities based on their skills, interests, and career goals. We're developing integrated collaboration tools, including project management features, communication channels, and progress tracking systems to support the entire research lifecycle from discovery to publication.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Long-term plans include expanding into international markets, supporting multi-language content, and building partnerships with funding organizations to help students secure financial support for their research endeavors.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Additional planned features include AI-powered research matching, integrated publication tracking, funding opportunity discovery, and enhanced networking tools that make academic collaboration even more seamless and effective.
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