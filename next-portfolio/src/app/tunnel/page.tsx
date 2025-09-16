"use client";


import { MathJax, MathJaxContext } from 'better-react-mathjax';
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
import type { BundledLanguage } from "@/components/ui/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from "@/components/ui/kibo-ui/code-block";

const code = [
  {
    language: "tsx",
    filename: "threejs-globe.tsx",
    code: ` const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    // Create wireframe sphere
    const wireframeSphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    globeGroup.add(wireframeSphere);

    // Create latitude lines
    const createLatitudeLines = () => {
      const latitudes = [];
      for (let i = -80; i <= 80; i += 20) {
        const phi = (90 - i) * (Math.PI / 180);
        const radius = Math.sin(phi);
        const y = Math.cos(phi);
        
        const curve = new THREE.EllipseCurve(
          0, 0,
          radius, radius,
          0, 2 * Math.PI,
          false,
          0
        );`,
  }
];


const code2 = [
  {
    language: "txt",
    filename: "continents.json",
    code: ` {
"type": "FeatureCollection",
                                                                                
"features": [

{ "type": "Feature", "properties": { "CONTINENT": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 93.275543212890625, 80.26361083984375 ], [ 93.148040771484375, 80.313873291015625 ], [ 91.424911499023438, 80.31011962890625 ], ......... million more},
{ "type": "Feature", "properties": { "CONTINENT": "North America" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -25.281669616699219, 71.39166259765625 ], [ -25.623889923095703, 71.537200927734375 ], [ -26.950275421142578, 71.578598022460938 ], [ -27.693889617919922, 71.930267333984375 ] }
{ "type": "Feature", "properties": { "CONTINENT": "Europe" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 58.061378479003906, 81.687759399414062 ], [ 57.889858245849609, 81.709854125976562 ], [ 59.435546875, 81.819297790527344 ], [ 59.159713745117188, 81.728866577148438 ], [ 58.061378479003906 ] };
{ rest of africa, south america, oceania, australia, antartica}

]
  }
  `
  
  }
];



export default function ResDexPage() {
  const [exiting, setExiting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'project-motive', label: 'Experience' },
    { id: 'tech-stack-selection', label: 'Building for Scale and Security' },
    { id: 'globe', label: 'The Globe' },
    { id: 'runtime-agent', label: 'Runtime Agent' }
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
Tunnel is an AI-powered market simulation platform that lets you test product and feature ideas instantly directly with your userbase. You can interact with hundreds <span className="italic">( or even a thousand if you have a strong machine which I clearly don't... )</span> of realistic, personality-driven personas that represent your target market. Instead of guessing what people might think, you can see real-time reactions and insights, all before writing a single line of code.

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
                
                < br></br>
                <br></br>
                Additionally, we created a real-time 3D globe <i>(which ended up being a fan favourite from all the feedback we got!)</i> powered by <span className="text-white">Three.js</span> and <span className="text-white">React Three Fiber</span>. All the UI logic lives alongside beautifully animated transitions, thanks to <span className="text-white">Framer Motion</span>, while Tailwind CSS and Radix UI handle styling and accessibility for every component. 
                <br></br>
                <br></br>
                <br></br>
                <span className="flex justify-center mb-2">
                  <video src='/loading.mov' className="rounded-2xl" width={900} autoPlay loop muted playsInline></video>
                </span>
                <span className="italic">Example: Loading screen built using Framer-motion</span>
                <br></br>
                <br></br>
                <br></br>
                The heart of Tunnel is our custom API layer, built with <span className="text-white">Next.js API routes</span>, that orchestrates persona generation, project analysis, voice session bridging, and session management. Intelligence flows from <span className="text-white">Cohere's</span> suite of AI tools, which handles everything from <span className="text-white">semantic understanding</span> and <span className="text-white">ranking algorithms</span> to nuanced conversation generation. 
                
                <br></br>
                <br></br>
                
                For voice, we use <span className="text-white">Vapi</span> with an <span className="text-white">MCP server</span> to provide instant, realistic phone-like interactions with each persona directly from the browser.

All user sessions are managed in <span className="text-white">MongoDB Atlas</span>, which allows users to pick up on their iterations at anytime. We utilized <span className="text-white">Auth0</span> for authentication and our <span className="text-white italic">world's first</span> AI agent profiles which are created on run-time.
<br></br> 
<br></br>

This offers the flexibility to store evolving persona profiles [ with nested demographic, psychographic, and behavioral data ] plus full records of simulations, feedback, and voice transcripts. We use compound indexing and partitioning to make sure data retrieval stays fast, even when scaling to hundreds of concurrent users. Live updates come in via fast polling mechanisms and optimistic UI updates, so users never wait for feedback, and all session data auto-saves in the background using a debounce system to prevent data loss. 
<br></br>
<br></br>Everything runs on Vercel, which enables near-instant deployments and ensures that our app stays globally available and performant. The result is our full-fledged platform that combines next-gen AI, interactive graphics, and robust backend systems, all put together to deliver instant, actionable market insights.
</p>
              </section>

              <section id="globe">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>The Globe</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Thought I’d do a separate writeup on the globe itself, as a lot of people were curious about it! Building the interactive 3D globe for Tunnel was honestly one of my favorite parts of the project. I wanted users to instantly visualize how their product idea resonated with different personas around the world, so I designed the globe using <span className="text-white">Three.js</span> and <span className="text-white">React Three Fiber</span> for rendering and interactivity. Each persona is represented as a point on the globe, color-coded by their reaction—green for interested, yellow for neutral, red for not interested—so you can see global trends and outliers at a glance.
                
                
  
  </p>
               
  <CodeBlock className="border-none rounded-2xl mt-5 mb-5" data={code} defaultValue={code[0].language}>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem key={item.language} value={item.language}>
          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>
               
                <p style={{ color: fadedText, fontSize: "0.9rem" }}>
                  Wireframe Sphere Creation (Code Snippet)

                  <br></br>
                  <br></br>
                  A lot of people have also asked about how the outlines for the continents were rendered on the globe, so here’s how it works. I found a very and I mean very large .json file which maps thousands of coordinates to create a polygonial shape of the continent. Refer below for a basic structure. </p>
                  
                  <CodeBlock className="border-none rounded-2xl mt-5 mb-5" data={code2} defaultValue={code2[0].language}>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem key={item.language} value={item.language}>
          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false} style={{ marginBottom: '10px' }}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock>

  
  <p style={{ color: fadedText, fontSize: "0.9rem" }}>

   Using this json file, I created a <span className="text-white">loadGeoJsonData()</span> function which is basically responsible for loading up the continent borders in <span className="text-white">GeoJSON format</span>. When the app starts or needs to render the globe, it calls this function, which reads the continents.json sitting on the server. If everything goes smoothly, it parses and returns the JSON data, which contains all the coordinates needed to draw those outlines on the 3D globe. 
   
   <br></br>
   <br></br>
   The next step, and probably the most complex part, is to map coordinates to actual vector coordinates because the globe is round, not flat....

   <br></br>
   <br></br>
   To do that, I used a simple conversion algorithm. The <span className="text-white">latLonToVector3()</span> function converts a point on a sphere given by geographic coordinates (latitude, longitude, and radius) into a 3D Cartesian coordinate (x, y, z) as used in 3D engines like Three.js. Here's the breakdown below:
<br></br>
<br></br>
   <span className="text-white">Input Parameters</span>
   <br></br>
      <code className="text-white bg-white/10 p-1 rounded ml-5 inline-flex mt-2">lat</code> = Latitude (in degrees), where 0 is the equator and ±90 are the poles.
      <br></br>
      <code className="text-white bg-white/10 p-1 rounded ml-5 inline-flex mt-2">lon</code> = Longitude (in degrees), where 0 is the Greenwich meridian, ±180 is the International Date Line.
      <br></br>
      <code className="text-white bg-white/10 p-1 rounded ml-5 inline-flex mt-2">radius</code> = The radius of the sphere (globe) on which the point lies.
      <br></br>

<br></br>
      <span className="text-white">Conversion Math</span>
   <br></br>
   <br></br>
   <span className="text-white">1. Convert latitude and longitude to radians:</span>
   <MathJaxContext>

   <MathJax className="text-white text-2xl mt-3 mb-3">{<MathJax>{"\\( \\theta = (-\\text{lon} + 180) \\cdot \\frac{\\pi}{180} \\)"}</MathJax>
  }</MathJax>
   </MathJaxContext>
   Shifts latitude so that 0° is the North Pole and 180° is the South Pole, which matches the convention for spherical coordinates in 3D graphics.

   <br></br>
   <MathJaxContext>

   <MathJax className="text-white text-2xl mt-3">{'\\( \\phi = (90 - \\varphi) \\cdot \\frac{\\pi}{180} \\)'}</MathJax>
   </MathJaxContext>
   Negates longitude to correct for inversion (Three.js uses a left-handed coordinate system), then shifts by 180° so that 0° is at the front.

<br></br>
<br></br>
   <span className="text-white">2. Calculate Cartesian Coordinates:</span>
   <MathJaxContext>

   <MathJax className="text-white text-2xl mt-3 mb-3">{`\\( x = \\text{radius} \\cdot \\sin(\\phi) \\cdot \\cos(\\theta) \\)`}</MathJax>
<MathJax className="text-white text-2xl mt-3 mb-3">{`\\( y = \\text{radius} \\cdot \\cos(\\phi) \\)`}</MathJax>
<MathJax className="text-white text-2xl mt-3 mb-3">{`\\( z = \\text{radius} \\cdot \\sin(\\phi) \\cdot \\sin(\\theta) \\)`}</MathJax>

</MathJaxContext>
This mapping aligns the poles and the equator correctly in a 3D scene.

<br></br>
<br></br>
   <span className="text-white">3. Return Value:</span>
   
  <MathJaxContext>

   <MathJax className="text-white text-2xl mt-3 mb-3">
  {`\\( \\mathrm{THREE.Vector3}(x, y, z) \\)`}
</MathJax>

A new 3D Vector where x, y, and z are the Cartesian coordinates calculated above—this represents the position in 3D space for given (lat, lon) on a sphere






</MathJaxContext>
This mapping aligns the poles and the equator correctly in a 3D scene.


   <br></br>


     
                </p>

                <div className="mt-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #2a2a2a" }}>
              <video src="/globe-animation.mp4" width={1200} height={800} className="w-full object-cover rounded-2xl" autoPlay loop muted playsInline></video>
            </div>
              </section>


              <section id="runtime-agent">
                <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Runtime Agent</h2>
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