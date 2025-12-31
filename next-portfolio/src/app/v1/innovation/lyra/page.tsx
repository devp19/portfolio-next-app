"use client";

import Image from "next/image";
import { IconCalendar, IconStack2, IconInfoCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiaGithub } from "react-icons/lia";
import { FaLink } from "react-icons/fa6";

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
                Project
              </p>
              <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <span>Lyra</span>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href="https://lyra-ide.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Lyra Website">
                    <FaLink size={16} color={textColor} />
                  </a>
                  <a href="https://github.com/devp19/lyra" target="_blank" rel="noopener noreferrer" aria-label="Lyra GitHub">
                    <LiaGithub size={20} color={textColor} />
                  </a>
                </div>
              </h1>
              <p style={{ fontSize: "0.85rem", color: fadedText, lineHeight: "1.5" }}>
                Lyra is a privacy-first, open-source cloud IDE designed for modern developers seeking power, flexibility, and control. It integrates advanced AI, live code execution, and GitHub syncing within a secure platform where your code and keys never leave your device.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-2" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconCalendar size={16} color={textColor} /> Details
                </h3>
                <p style={{ color: fadedText, fontSize: "0.8rem" }}>August 2025 – Present</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-3" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconStack2 size={16} color={textColor} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Cloudflare Workers AI", "CodeMirror", "xTerm.js"].map((tech) => (
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
                    { id: "project-motive", title: "Project Motive" },
                    { id: "tech-stack-selection", title: "Tech Stack Selection" },
                    { id: "how-it-works", title: "How It Works" },
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
              <Image src="/final-lyra.png" alt="Lyra Screenshot" width={1200} height={800} className="w-full object-cover rounded-xl" priority />
            </div>

            <article className="space-y-6">
              <section id="introduction">
                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>Privacy-First Cloud IDE for Modern Developers</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Lyra is designed with a strong emphasis on privacy, putting users in complete control of their data and workflows. By prioritizing local control, Lyra ensures that all processes and sensitive information remain securely on your device, eliminating the need to compromise your keys or credentials.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Its streamlined environment accelerates developer productivity by combining agentic coding and terminal workflows into one unified platform. With Lyra, you can seamlessly work from any location, confidently managing projects and automations without sacrificing security or speed.
                </p>
              </section>

              <section id="project-motive">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Motive</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  I'm building Lyra because, as a developer, I was frustrated with the trade-offs I faced using existing code editors. Many popular alternatives either stored my code on someone else's servers or buried essential features behind expensive subscriptions.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Paying monthly just to unlock the tools I needed, or trusting third parties with sensitive keys and data, felt wrong, especially when my workflow depended on privacy and full control.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  I wanted an environment where I could work securely and efficiently, without worrying about hidden costs or giving up ownership of my work. Lyra is my answer: a code editor that puts privacy, local control, and developer speed first.
                </p>
              </section>

              <section id="tech-stack-selection">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Tech Stack Selection</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  The choice of Next.js as the foundation provides server-side rendering capabilities and excellent developer experience. TypeScript ensures type safety throughout the application, while Cloudflare Workers AI enables powerful AI features without compromising privacy.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  CodeMirror offers a robust code editing experience, and xTerm.js provides terminal functionality directly in the browser. Each technology was carefully selected to balance performance, security, and developer experience.
                </p>
              </section>

              <section id="how-it-works">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>How It Works</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Lyra operates on a client-first architecture where all sensitive operations happen locally. The IDE interfaces with GitHub for repository management while keeping your credentials secure.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  AI assistance is provided through Cloudflare's edge network, ensuring fast responses without data retention concerns. The platform leverages modern web technologies to deliver a native-like experience directly in the browser.
                </p>
              </section>

              <section id="future-plans">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Future Plans</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Future development includes enhanced collaboration features, expanded language support, integrated debugging tools, and advanced AI-powered code analysis. All while maintaining the core principle of privacy-first design.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  The roadmap focuses on adding features that developers need most while never compromising on the fundamental values of privacy, security, and local control. Community feedback will drive priority decisions as Lyra grows and evolves.
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
                    Project
                  </p>

                  <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    Lyra
                    <a href="https://lyra-ide.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Lyra Website" style={{ paddingLeft: "1rem" }}>
                      <FaLink size={15} color={textColor} />
                    </a>
                    <a href="https://github.com/devp19/lyra" target="_blank" rel="noopener noreferrer" aria-label="Lyra GitHub">
                      <LiaGithub size={20} color={textColor} />
                    </a>
                  </h1>

                  <p style={{ fontSize: "0.8rem", color: fadedText, width: "80%" }}>
                    Lyra is a privacy-first, open-source cloud IDE designed for modern developers seeking power, flexibility, and control. It integrates advanced AI, live code execution, and GitHub syncing within a secure platform where your code and keys never leave your device.
                  </p>
                  <div className="flex items-center gap-2 ml-1 mt-4">
      <div className="relative">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute top-0 left-0 w-2 h-2 bg-black rounded-full animate-ping"></div>
      </div>
      <span style={{fontSize: "0.8rem", color: fadedText}}>Work in progress</span>
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
                      <li><button onClick={() => smoothScrollToSection('project-motive')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Project Motive</button></li>
                      <li><button onClick={() => smoothScrollToSection('tech-stack-selection')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Tech Stack Selection</button></li>
                      <li><button onClick={() => smoothScrollToSection('how-it-works')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>How It Works</button></li>
                      <li><button onClick={() => smoothScrollToSection('future-plans')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Future Plans</button></li>
                    </ul>
                  </div>

                    <div className="border-t border-gray-200" style={{ maxWidth: "80%", marginBottom: "1rem" }}></div>

  <div>
                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconCalendar size={"0.8rem"} color={textColor} /> Details
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li>August 2025 – Present</li>
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
                      <li>Cloudflare Workers AI</li>
                      <li>CodeMirror</li>
                      <li>xTerm.js</li>
                    </ul>
                  </div>


                
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-12 pr-4 custom-scrollbar">
              <div className="space-y-5 pr-4">
                <div style={{ background: "#fff", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <Image src="/final-lyra.png" alt="Lyra Screenshot" width={1200} height={800} className="w-full object-cover rounded-xl" priority />
                </div>

                <article className="prose prose-invert max-w-none">
                  <section id="introduction">
                    <h2 style={{ fontSize: "1.5rem" }}>Privacy-First Cloud IDE for Modern Developers</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Lyra is designed with a strong emphasis on privacy, putting users in complete control of their data and workflows. By prioritizing local control, Lyra ensures that all processes and sensitive information remain securely on your device, eliminating the need to compromise your keys or credentials. Its streamlined environment accelerates developer productivity by combining agentic coding and terminal workflows into one unified platform. With Lyra, you can seamlessly work from any location, confidently managing projects and automations without sacrificing security or speed.
                    </p>
                  </section>

                  <section id="project-motive">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Motive</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      I'm building Lyra because, as a developer, I was frustrated with the trade-offs I faced using existing code editors. Many popular alternatives either stored my code on someone else's servers or buried essential features behind expensive subscriptions. Paying monthly just to unlock the tools I needed, or trusting third parties with sensitive keys and data, felt wrong, especially when my workflow depended on privacy and full control.
                      <br /><br />
                      I wanted an environment where I could work securely and efficiently, without worrying about hidden costs or giving up ownership of my work. Lyra is my answer: a code editor that puts privacy, local control, and developer speed first; created to solve the very issues I ran into myself.
                    </p>
                  </section>

                  <section id="tech-stack-selection">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Tech Stack Selection</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      The choice of Next.js as the foundation provides server-side rendering capabilities and excellent developer experience. TypeScript ensures type safety throughout the application, while Cloudflare Workers AI enables powerful AI features without compromising privacy. CodeMirror offers a robust code editing experience, and xTerm.js provides terminal functionality directly in the browser.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Each technology was carefully selected to balance performance, security, and developer experience. The stack enables rapid development while maintaining the core principles of privacy and local control that define Lyra's mission.
                    </p>
                  </section>

                  <section id="how-it-works">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>How It Works</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Lyra operates on a client-first architecture where all sensitive operations happen locally. The IDE interfaces with GitHub for repository management while keeping your credentials secure. AI assistance is provided through Cloudflare's edge network, ensuring fast responses without data retention concerns.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      The platform leverages modern web technologies to deliver a native-like experience directly in the browser. All code execution, file management, and AI interactions are designed with privacy as the primary consideration, ensuring your intellectual property remains under your complete control.
                    </p>
                  </section>

                  <section id="future-plans">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Future Plans</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Future development includes enhanced collaboration features, expanded language support, integrated debugging tools, and advanced AI-powered code analysis. All while maintaining the core principle of privacy-first design.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      The roadmap focuses on adding features that developers need most while never compromising on the fundamental values of privacy, security, and local control. Community feedback will drive priority decisions as Lyra grows and evolves.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Additional planned features include real-time collaboration tools, advanced project templates, integrated testing frameworks, and enhanced AI capabilities for code generation and refactoring assistance.
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