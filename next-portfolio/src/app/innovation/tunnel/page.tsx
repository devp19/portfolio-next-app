"use client";

import Image from "next/image";
import { IconCalendar, IconStack2, IconInfoCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiaGithub } from "react-icons/lia";
import { FaLink, FaLinkedin } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/ui/kibo-ui/announcement";
import { ArrowUpRightIcon } from "lucide-react";

export default function ResDexPage() {
  const [exiting, setExiting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'project-motive', label: 'Experience' },
    { id: 'tech-stack-selection', label: 'Building for Scale and Security' },
    { id: 'partnerships', label: 'Partnerships & Growth' },
    { id: 'future-plans', label: 'Future Plans' }
  ];

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

  // Intersection Observer for tracking active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [loaded]);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => {
      router.push("/innovation");
    }, 200);
  };

  const smoothScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
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

  const NavigationItem = ({ section, isActive }: { section: { id: string; label: string }, isActive: boolean }) => (
    <li className="relative">
      <button 
        onClick={() => smoothScrollToSection(section.id)}
        className="flex items-center w-full text-left transition-all duration-300 ease-out hover:translate-x-1"
        style={{ 
          color: isActive ? textColor : fadedText,
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          padding: 0,
          paddingLeft: isActive ? "1rem" : "0"
        }}
      >
        <div 
          className="absolute left-0 transition-all duration-300 ease-out"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateX(0)' : 'translateX(-8px)'
          }}
        >
          <IoIosArrowForward size={12} color="#ffffff" />
        </div>
        <span className="transition-all duration-300">
          {section.label}
        </span>
      </button>
    </li>
  );

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

        /* Smooth arrow animation */
        .nav-arrow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pb-16 flex gap-8">
            <aside className="hidden lg:block w-64 sticky top-20 self-start">
              <nav>
                <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.9rem", marginBottom: "1rem" }}>
                   Table of Contents
                </h3>
                <ul style={{ fontSize: "0.85rem" }} className="space-y-3">
                  {sections.map((section) => (
                    <NavigationItem 
                      key={section.id} 
                      section={section} 
                      isActive={activeSection === section.id} 
                    />
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="flex-1 max-w-3xl">
          
          <p style={{ fontSize: "0.6rem", color: fadedText }}>
              September 15th, 2025
              </p>

            <header className="space-y-4 mt-3">
                            <h1 style={{ fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Tunnel – AI Agent Simulation
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

              <Announcement style={{ border: "1px solid #3a3a3a"}}>
    <AnnouncementTag>Latest update</AnnouncementTag>
    <AnnouncementTitle>
    HackTheNorth – Vapi Track Winner
      <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
    </AnnouncementTitle>
  </Announcement>

  <Announcement style={{ border: "1px solid #3a3a3a", marginLeft: '10px'}}>
    <AnnouncementTag>Latest update</AnnouncementTag>
    <AnnouncementTitle>
      HackTheNorth – MLH Track Winner
      <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
    </AnnouncementTitle>
  </Announcement>
            
            </header>

            <div className="mt-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #2a2a2a" }}>
              <video src="/vid.mp4" width={1200} height={800} className="w-full object-cover rounded-2xl" autoPlay loop muted playsInline></video>
            </div>

            <nav className="mt-10 lg:hidden">
              <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "1rem" }}>
                <IconInfoCircle size={"0.8rem"} color={textColor} /> Table of Contents
              </h3>
              <ul style={{ fontSize: "0.85rem" }} className="space-y-3">
                {sections.map((section) => (
                  <NavigationItem 
                    key={section.id} 
                    section={section} 
                    isActive={activeSection === section.id} 
                  />
                ))}
              </ul>
            </nav>

            <article className="prose prose-invert max-w-none mt-10">
              <section id="introduction">
                <h2 style={{ fontSize: "1.5rem" }}>Introduction</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
               
                Have you ever spent months building something you believed in, only to launch and realize... no one actually wanted it? I’ve been there, and it’s a brutal feeling. Turns out, we're not alone—most startups fail, and the number one reason is building something with no real market need.
<br></br>
<br></br>
We looked at the usual ways to validate ideas; surveys, focus groups, user interviews...but they’re slow, expensive, and often miss the mark. At <a href="https://hackthenorth.com/" target="_blank"><span className="text-white italic">HackTheNorth</span></a>, our team set out to find a better way. That’s how Tunnel was created.
<br></br>
<br></br>
Tunnel is an AI-powered market simulation platform that lets you test product and feature ideas instantly. You can interact with hundreds of realistic, personality-driven personas that represent your target market. Instead of guessing what people might think, you can see real-time reactions and insights, all before writing a single line of code.

It’s fast, accessible, and built to help makers like us build smarter from day one.                </p>
              </section>

              <section id="project-motive">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Experience</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                I walked into the hackathon with a brand new team, completely different ambitions, a Google Doc full of big ideas, and absolutely no sleep in sight. Being only one of the few hackers from a "non-target" university, it was definetely a whole different atmosphere. The ideas, the skill-level and execution was all on another level. Our group wasn’t shy about setting wild goals; actually, we were pretty loud about it. We wanted to win, yes, but more than that, we wanted to build something that felt genuinely new.
<br></br>
<br></br>
We ended up pouring everything into Tunnel, a platform that helps makers validate product ideas and features in seconds with AI-driven, real-market personas. And the loss of sleep? Totally worth it. When they announced us for both the <span className="text-white">MLH Track</span> and <span className="text-white">Best use of Vapi - AI Voice Agent</span> awards, we were stunned into silence (something that rarely happened over the weekend).
<br></br>
<br></br>
 The biggest plot twist? Out of the 100+ projects submitted towards the <span className="text-white">Y Combinator</span> track, we were shortlisted as one of the <span className="text-white">top 10</span> teams for an interview! We sat down with none other than <a href="https://www.ycombinator.com/people/nicolas-dessaigne" target="_blank"><span className="text-white">Nicolas Dessaigne</span></a> and <a href="https://www.ycombinator.com/people/andrew-miklas" target="_blank"><span className="text-white">Andrew Miklas</span></a> from <span className="text-white">Y Combinator</span> to talk about the future of our project. Having YC interviewers poke holes in your pitch is nerve-wracking and surreal: one moment you’re just a sleep-deprived student, the next you’re tossing ideas around with people who’ve seen a thousand startups rise and fall. Winning big, meeting genuine legends, and realizing how much is possible when you just show up and start buildaing—it made every hour totally, absolutely worth it.
                </p>
              </section>

              <section id="tech-stack-selection">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Building for Scale and Security</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                When we set out to build Tunnel, we wanted every piece of the architecture to feel seamless, responsive, and as dynamic as the market simulations themselves. On the frontend, we chose a modern stack, <span className="text-white">Next.js</span>, <span className="text-white">TypeScript</span>, <span className="text-white">Tailwind</span>, and <span className="text-white">Shadcn UI Primitives</span> <i>(my absolute favourite)</i> ! 
                
                <br></br>
                <br></br>
                Additionally, we created a real-time 3D globe <i>(which ended up being a fan favourite from all the feedback we got!)</i> powered by <span className="text-white">Three.js</span> and <span className="text-white">React Three Fiber</span>. All the UI logic lives alongside beautifully animated transitions, thanks to <span className="text-white">Framer Motion</span>, while Tailwind CSS and Radix UI handle styling and accessibility for every component. 
                <br></br>
                <br></br>
                The heart of Tunnel is our custom API layer, built with <span className="text-white">Next.js API routes</span>, that orchestrates persona generation, project analysis, voice session bridging, and session management. Intelligence flows from <span className="text-white">Cohere's</span> suite of AI tools, which handles everything from <span className="text-white">semantic understanding</span> and <span className="text-white">ranking algorithms</span> to nuanced conversation generation. 
                
                <br></br>
                <br></br>
                
                For voice, we use <span className="text-white">Vapi</span> with an <span className="text-white">MCP server</span> to provide instant, realistic phone-like interactions with each persona directly from the browser.

All user and simulation data is managed in MongoDB Atlas, which offers the flexibility to store evolving persona profiles—with nested demographic, psychographic, and behavioral data—plus full records of simulations, feedback, and voice transcripts. We use compound indexing and partitioning to make sure data retrieval stays fast, even when scaling to hundreds of concurrent users. Live updates come in via fast polling mechanisms and optimistic UI updates, so users never wait for feedback, and all session data auto-saves in the background using a debounce system to prevent data loss. Centralized state management with Zustand lets us synchronize everything from current focus groups to real-time persona responses, even across collaborative sessions. Everything runs on Vercel, which enables near-instant deployments and ensures that our app stays globally available and performant. The result is a platform that combines next-gen AI, interactive graphics, and robust backend systems—all woven together to deliver instant, actionable market insights.
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
      </div>
    </>
  );
}