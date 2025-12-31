"use client";

import Image from "next/image";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/navbar";
import { SpinningText } from "@/components/magicui/spinning-text";
import { useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Innovation", link: "/innovation" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <SmoothCursor />
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4 bg-[rgb(10,10,10)]"
        // style={{
        //   backgroundImage:
        //     "radial-gradient(circle at 95% 110%, rgba(244, 156, 105, 1) 0%, rgba(205, 65, 64, 1) 20%, rgba(102, 16, 32, 1) 42%, rgb(10, 10, 10) 65%)",
        // }}
      >
        {/* Navbar (full homepage version) */}
        <div className="w-full z-[9999]">
          <Navbar className="mt-7">
            {/* Desktop Nav */}
            <NavBody>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Image src="/profile.png" alt="Logo" width={32} height={32} className="rounded-full" />
                </div>
                <NavItems items={navItems} />
              </div>
              <div className="absolute top-2 right-6 z-[10000] flex items-center gap-2 pointer-events-auto">
                <a href="https://github.com/devp19" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/devp19" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                </a>
                <a href="https://x.com/_devp" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>
                </a>
              </div>
            </NavBody>
            {/* Mobile Nav */}
            <MobileNav>
              <MobileNavHeader>
                <div className="flex items-center gap-4">
                  <Image src="/profile.png" alt="Logo" width={32} height={32} className="rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <MobileNavToggle isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen((v) => !v)} />
                </div>
              </MobileNavHeader>
              <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="bg-[rgba(10,10,10,0.7)] backdrop-blur-md">
                <div className="flex flex-col w-full gap-4">
                  {navItems.map((item, idx) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="w-full px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-neutral-800 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-row gap-3 mt-2">
                    <a href="https://github.com/devp19" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/devp19" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/_devp" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
        {/* Top Section */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-start pt-20 pb-16 text-left">
          <div className="mb-2 mt-10">
            <SpinningText
              className="mb-4 left-11 mb-14"
              fontSize={8}
              radius={4}
              duration={18}
            >
              Innovator • Thinker • Builder •
            </SpinningText>
          </div>
          <TextAnimate
            animation="blurIn"
            as="h1"
            by="word"
            duration={1.1}
            className="text-4xl md:text-5xl font-regular mb-4"
          >
            about me.
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            as="p"
            by="word"
            duration={1.1}
            className="text-lg text-white/80"
          >
            i build intelligent, real-world solutions
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            as="p"
            by="word"
            duration={1.1}
            className="text-lg text-white/80"
          >
            currently automation analyst @ fidelity investments, cs @ torontomet, cofounder @ resdex
          </TextAnimate>
         
          {/* Accordion Section */}
          <div className="w-full max-w-4xl mx-auto mt-8 flex justify-center">
            <Accordion />
          </div>
          <div className="mb-2 mt-10 text-left w-full text-lg text-white/80 font-regular">year of coding put in retrospect</div>
          <div className="w-full max-w-4xl mx-auto mt-2 flex justify-start">
            <Image src="/contribution.png" alt="GitHub Contribution Graph" width={600} height={200} className="rounded-xl shadow-lg object-contain" />
          </div>
        </div>
       
      </div>
    </>
  );
}

// Simple Accordion Component
function Accordion() {
  const items = [
    {
      titleText: "Education",
      title: (
        <div className="flex flex-row items-center gap-4">
          <Image src="/tmufinal.png" alt="Toronto Metropolitan University Logo" width={64} height={64} className="object-contain" />
          <div className="flex flex-col">
            <span className="font-semibold text-white text-lg leading-tight">HBSc, Computer Science</span>
            <span className="text-xs text-white/60">Toronto Metropolitan University</span>
            <span className="text-xs text-white/60">Sept 2023 – Present · Toronto, Ontario, Canada</span>
          </div>
        </div>
      ),
      content: (
        <div className="flex flex-col gap-2 pl-[80px]">
          <span className="text-white/80 text-sm">Focused on AI, automation, and applied research. Relevant coursework: Data Structures, Algorithms, Machine Learning, Software Engineering, and Human-Computer Interaction.</span>
          <span className="text-white/80 text-sm">GPA: <span className="font-semibold">3.94</span></span>
          <span className="text-white/80 text-sm">Dean's List: <span className="font-semibold">2023-2024</span>, <span className="font-semibold">2024-2025</span></span>
        </div>
      )
    },
    {
      titleText: "Fidelity Investments",
      title: (
        <div className="flex flex-row items-center gap-4">
          <Image src="/fidelity.png" alt="Fidelity Investments Logo" width={64} height={64} className="object-contain" />
          <div className="flex flex-col">
            <span className="font-semibold text-white text-lg leading-tight">Automation Analyst, Emerging Technologies</span>
            <span className="text-xs text-white/60">Fidelity Investments · Co-op</span>
            <span className="text-xs text-white/60">May 2025 – Present · 3 mos &nbsp;|&nbsp; Toronto, Ontario, Canada · Hybrid</span>
          </div>
        </div>
      ),
      content: (
        <div className="flex flex-col gap-2 pl-[80px]">
          <ul className="list-disc pl-6 text-white/80 text-sm space-y-3">
            <li>Lead end-to-end development of automation solutions that optimize internal processes and deliver measurable time savings for business stakeholders.</li>
            <li>Utilize PL-900 tools such as Microsoft Power Automate and PowerBI to design and deploy workflows, interactive dashboards, and low-code applications, reducing reliance on manual tasks across departments.</li>
            <li>Work within a fast-paced Agile Scrum environment, collaborating with cross-functional teams—including business analysts, product owners, and end users—to gather requirements, iterate on prototypes, and deliver production-ready solutions in weekly sprint cycles.</li>
            <li>Participate in daily stand-ups, sprint planning, backlog refinement, and retrospectives to ensure consistent delivery of high-value features and continuous adaptation to evolving business needs.</li>
            <li>Manage stakeholder engagement throughout the project lifecycle, from discovery and requirements gathering to UAT, deployment, and post-launch support.</li>
            <li>Develop technical documentation, training materials, and live demos to support user onboarding and long-term adoption of implemented solutions.</li>
          </ul>
        </div>
      )
    },
    {
      titleText: "ResDex",
      title: (
        <div className="flex flex-row items-center gap-4">
          <Image src="/resdex-white.png" alt="ResDex Logo" width={64} height={64} className="object-contain" />
          <div className="flex flex-col">
            <span className="font-semibold text-white text-lg leading-tight">Co-Founder & Founding Engineer</span>
            <span className="text-xs text-white/60">ResDex · Self-employed</span>
            <span className="text-xs text-white/60">Aug 2024 – Present · 1 yr &nbsp;|&nbsp; Toronto, Ontario, Canada · Remote</span>
          </div>
        </div>
      ),
      content: (
        <div className="flex flex-col gap-2 pl-[80px]">
          <span className="text-white/80 text-sm">Building a cutting-edge, student-centric research platform that empowers users to publish, review, and edit papers seamlessly.</span>
        </div>
      )
    },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 divide-y divide-white/10 shadow-lg">
      {items.map((item, idx) => (
        <div key={item.titleText}>
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transition"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span className="flex items-center gap-4">{typeof item.title === 'string' ? item.title : item.title}</span>
            <span className={`transform transition-transform duration-200 ${open === idx ? 'rotate-90' : ''}`}>▶</span>
          </button>
          <div
            className={`px-6 pb-4 text-white/80 text-sm transition-all duration-300 ease-in-out ${open === idx ? 'max-h-[600px] overflow-y-auto opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            style={{}}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
} 