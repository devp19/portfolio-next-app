
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
import style from 'styled-jsx/style';

const code = [
  {
    language: "bash",
    filename: "terminal.sh",
    code: `vmuser@dev-linux:~$ lsmod | grep kvm
kvm_intel             479232  0
kvm                  1388544  1 kvm_intel
`,
  }
];


const code2 = [
  {
    language: "bash",
    filename: "docker.sh",
    code: ` docker run --privileged -d \ -p 6080:6080 \ -p 5554:5554 \ 
    -p 5555:5555 \ -p 5900:5900 \ -e EMULATOR_DEVICE="Samsung Galaxy S10" 
    \ -e WEB_VNC=true \ --device /dev/kvm \ --name android-container \ 
    budtmo/docker-android:emulator_11.0

  `
  
  }
];


const code3 = [
  {
    language: "json",
    filename: "sample_raw_metadata.json",
    code: ` "location": {
            "city": "Toronto",
            "country": "Canada",
            "coordinates": {
                "longitude": -79.3832,
                "latitude": 43.6532
            }
        },
        "demographics": {
            "generation": "Gen X",
            "gender": "Male",
            "ageRange": "45-50"
        },
        "professional": {
            "seniority": "C-Level",
            "primaryIndustry": "Fintech",
            "secondaryIndustry": "Leadership",
            "companySize": "100-500",
            "yearsExperience": 22
        },
        "psychographics": {
            "techAdoption": 7,
            "riskTolerance": 9,
            "priceSensitivity": 3,
            "influenceScore": 9,
            "brandLoyalty": 8
        },
        "interests": [
            "Strategy",
            "Innovation",
            "Golf",
            "Investing"
        ],
        "personality": {
            "openness": 0.7,
            "conscientiousness": 0.9,
            "extraversion": 0.8,
            "agreeableness": 0.6,
            "neuroticism": 0.2
        },
  `
  
  }
];

const code4 = [
  {
    language: "txt",
    filename: "terminal.txt",
    code: ` ✓ Compiled /api/extract-niche in 536ms (1820 modules)
 [EXTRACT-NICHE] API endpoint called
 [EXTRACT-NICHE] Request body: { 'create genx app related to fintech in canada' }
 [EXTRACT-NICHE] Processing idea: create genx app related to fintech in canada...
 [EXTRACT-NICHE] Starting niche analysis for idea length: 44
 [EXTRACT-NICHE] Lowercase idea: create genx app related to fintech in canada
 [EXTRACT-NICHE] Analyzing 15 potential niches...
 [EXTRACT-NICHE] Financial Technology: score=1.50, keywords=[fintech]
 [EXTRACT-NICHE] Productivity & Business Tools: score=0.45, keywords=[app]
 [EXTRACT-NICHE] Best match: { name: 'Financial Technology', score: 1.5 }
 [EXTRACT-NICHE] Successfully identified niche: Financial Technology
 POST /api/extract-niche 200 in 597ms
  `
  
  }
];

const code5 = [
{
  language: "txt",
  filename: "terminal.txt",
  code: ` 
  [SELECT-NICHE-USERS] Cohere rerank completed, got 25 results
  [SELECT-NICHE-USERS] Relevance scores: {
      count: 25,
      average: '0.341',
      max: '0.866',
      min: '0.249',
      highRelevance: 1,
      mediumRelevance: 2,
      lowRelevance: 22
    }

  [SELECT-NICHE-USERS] Top 5 selected users:
  1. James Wilson (0.866) - CEO
  2. Derek Ward (0.759) - Learning Experience Designer
  3. Michelle Nelson (0.561) - Financial Analyst
  4. Tessa Watson (0.392) - Policy Analyst
  5. Jared Bishop (0.336) - Regulatory Compliance Officer
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
    { id: 'tech-stack-selection', label: 'Initial Outlook' },
    { 
      id: 'Emulator', 
      label: 'Android Emulator',
      subSections: [
        { id: 'Docker', label: 'Docker Setup' },
        { id: 'Android Emulator', label: 'Android Emulator' },
        { id: 'Execution', label: 'Execution Command' }
      ]
    },
    { id: 'runtime-agent', label: 'Runtime Agent',
      subSections: [
        { id: 'niche-extraction', label: 'Niche Extraction' },
        { id: 'ranking', label: 'Cohere Ranking' }]
   },
     { id: 'experience', label: 'Ending Remarks' },

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

      if (section.subSections) {
        section.subSections.forEach(subSection => {
          const subElement = document.getElementById(subSection.id);
          if (subElement) {
            observer.observe(subElement);
          }
        });
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

  const SubNavigationItem = ({ subSection, isActive }: { subSection: { id: string; label: string }, isActive: boolean }) => (
    <li className="relative ml-4">
      <button 
        onClick={() => smoothScrollToSection(subSection.id)}
        className="flex items-center w-full text-left transition-all duration-300 ease-out hover:translate-x-1"
        style={{ 
          color: isActive ? textColor : fadedText,
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          padding: 0,
          paddingLeft: isActive ? "1rem" : "0",
          fontSize: "0.8rem"
        }}
      >
        <div 
          className="absolute left-0 transition-all duration-300 ease-out"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateX(0)' : 'translateX(-8px)'
          }}
        >
          <IoIosArrowForward size={10} color="#ffffff" />
        </div>
        <span className="transition-all duration-300">
          {subSection.label}
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
        <div className="mx-auto w-full max-w-6xl px-2 sm:px-4 pb-16 flex flex-col lg:flex-row gap-0 lg:gap-8">
        <aside className="hidden lg:block w-64 sticky top-20 self-start">
              <nav>
                <h3 className="inline-flex items-center gap-2" style={{ color: 'white', fontSize: "0.9rem", marginBottom: "1rem" }}>
                   Table of Contents
                </h3>
                <ul style={{ fontSize: "0.85rem" }} className="space-y-3">
                {sections.map((section) => (
  <div key={section.id}>
    <NavigationItem 
      section={section} 
      isActive={activeSection === section.id} 
    />
    {section.subSections && (
      <ul className="space-y-2 mt-2">
        {section.subSections.map((subSection) => (
          <SubNavigationItem
            key={subSection.id}
            subSection={subSection}
            isActive={activeSection === subSection.id}
          />
        ))}
      </ul>
    )}
  </div>
))}
                </ul>
              </nav>
            </aside>
            <div className="flex-1 w-full max-w-3xl p-1" style={{ overflowX: "hidden" }}>
          
          <p style={{ fontSize: "0.6rem", color: fadedText }}>
              September 18th, 2025
              </p>

            <header className="space-y-4 mt-3">
                            <h1 style={{ fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Cua – Computer Use Agent Infrastructure
                <a href="https://www.linkedin.com/posts/krish-garg_we-won-hack-the-north-twice-in-the-same-day-activity-7373128956130033664-vpse?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" aria-label="ResDex Website" style={{ paddingLeft: "0.75rem" }}>
                  <FaLink size={15} color={textColor} />
                </a>
                {/* <a href="https://github.com/devp19/resdex" target="_blank" rel="noopener noreferrer" aria-label="ResDex GitHub">
                  <LiaGithub size={20} color={textColor} />
                </a>
                <a href="https://linkedin.com/company/resdex" target="_blank" rel="noopener noreferrer" aria-label="ResDex LinkedIn">
                  <FaLinkedin size={17} color={textColor} />
                </a> */}

              </h1>

              
              <p style={{ fontSize: "0.9rem", color: fadedText }}>
              Cua is an open-source infrastructure for Computer-Use Agents which utilizes Sandboxes, SDKs, and benchmarks to train and evaluate AI agents that can control full desktops (macOS, Linux, Windows).
              </p>

              <div className="flex flex-col gap-2 sm:flex-row sm:gap-x-2 sm:gap-y-0">
  <Announcement style={{ border: "1px solid #3a3a3a" }}>
    <AnnouncementTag>GitHub</AnnouncementTag>
    <AnnouncementTitle>
      9.8k+ Stars
      <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
    </AnnouncementTitle>
  </Announcement>

  <Announcement style={{ border: "1px solid #3a3a3a" }}>
    <AnnouncementTag>Y Combinator</AnnouncementTag>
    <AnnouncementTitle>
      X25
      <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
    </AnnouncementTitle>
  </Announcement>
</div>

            
            </header>

            <div className="mt-8 rounded-2xl" style={{ background: "#111111"}}>
              <img src="/og-cua.png" className="w-full h-auto aspect-video object-cover rounded-2xl"></img>
            {/* <video
  src="/vid.mp4"
  className="w-full h-auto aspect-video object-cover rounded-2xl"
  autoPlay
  loop
  muted
  playsInline
></video> */}

            </div>

            <nav className="mt-10 lg:hidden">
              <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "1rem" }}>
                <IconInfoCircle size={"0.8rem"} color={textColor} /> Table of Contents
              </h3>
              <ul style={{ fontSize: "0.85rem" }} className="space-y-3">
              {sections.map((section) => (
  <div key={section.id}>
    <NavigationItem 
      section={section} 
      isActive={activeSection === section.id} 
    />
    {section.subSections && (
      <ul className="space-y-2 mt-2">
        {section.subSections.map((subSection) => (
          <SubNavigationItem
            key={subSection.id}
            subSection={subSection}
            isActive={activeSection === subSection.id}
          />
        ))}
      </ul>
    )}
  </div>
))}
              </ul>
            </nav>

            <article className="prose prose-invert max-w-none mt-10">
              <section id="introduction">
                <h2 style={{ fontSize: "1.5rem" }}>Introduction</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
               
                Cua is an open-source infrastructure for Computer-Use Agents which utilizes Sandboxes, SDKs, and benchmarks to train and evaluate AI agents that can control full desktops (macOS, Linux, Windows). After getting reached out to by <span className="text-white italic underline mr-1"><a target="_blank" href="https://www.linkedin.com/in/francesco-bonacci-70428a121/">@Franceso Bonacci</a></span> (Founder of Cua YC X25), my task was to build an Android Docker provider for the Cua Computer SDK. This would give the ability to run Android devices and control them using the existing Cua agent framework.
<br></br>
<br></br>
Now, initially, the task seemed daunting but yet fun as I had never worked with Android emulators moreover an Android itself. On top of that, it was my first time working with an existing codebase that I had to understand before I could start working on it.
         </p>
              </section>

            

              <section id="tech-stack-selection">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Initial Outlook</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Going into the project, I had no idea what I was getting into. All I knew was that I had to use an existing docker image <a target="_blank" href="https://github.com/budtmo/docker-android"><span className="text-white underline">(https://github.com/budtmo/docker-android)</span></a> and build an Android Docker provider for the Cua Computer SDK.
                
                <br></br>
                <br></br>
                In hindsight, the requirements were pretty straightforward. Implement <span className="text-white font-mono bg-white/10 px-1 rounded">AndroidDockerProvider</span> (which extends <span className="text-white font-mono bg-white/10 px-1 rounded">BaseVMProvider</span>) and register it in <span className="text-white font-mono bg-white/10 px-1 rounded">VMProviderFactory</span>.
                < br></br>
                <br></br>
                After getting familiar with the existing setup on how other providers were implemented like Lume, Lumier, Docker etc., it was merely a matter of following the same development pattern. However it was obviously easier said than done. 
                
                <br></br>
                <br></br>
                Turns out, I had completely forgot about the specifications and requirements of the docker image and thought it would be a simple installation via Docker. Once again, having no clue how Android emulators work, I spent a ton of time reading through documentation for the actual image instead of Cua's (I probably spent more time getting the emulator to run than actually implementing the provider!!). Of course, this was the least of my struggles. Turns out, since I was working on a MacOS device with ARM64 instead of the old intel chips, there's something called <span className="text-white">KVM (Kernel-based Virtual Machine)</span> which is required to run the docker image.
                <br></br>
                <br></br>
                Simply put, to run the Docker image itself, I had to be on a machine that had KVM support. That's where my first step into the rabbit hole came. I started off by installing <span className="text-white">VirtualBox</span> to run a Linux system, all so I could actually start visualizing the emulator...
                <br></br>
                <br></br>
                That clearly didn't work. Although you can use a virtual machine to run a Linux system which I thought would have KVM enabled, a subproblem was that nested virtualization wasn't supported on my machine. That's the first time I learned about nested virtualization and how it works! 
                <br></br>
                <br></br>
                <span className="italic text-white">Learning 1: If you're running a Linux VM on a physical machine and want to use KVM to host additional VMs inside that guest, the physical host must support and enable nested virtualization. </span>
                <br></br>
          
                <br></br>
                Now after experimenting with VirtualBox, Parallels and even a Remote Connection to a Windows machine which Franceso had given me, none of those worked. It was not until I was given access to a Linux VM which Franceso had provisioned for me that I was able to finally check for KVM support and it was enabled!<br></br>
                <br></br>
                </p>
                    <CodeBlock className="border-none rounded-2xl mt-5 mb-5" data={code} defaultValue={code[0].language}>
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
              </section>

              <section id="Remote Connection">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Remote Connection</h2>
                <p id="Docker" style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Now that I was finally in an environment where I could start the actual development work, I had to make sure that the emulator atleast showed up, disregarding the fact that I had no idea how to do it. I did think ahead and saw that the actual Cua implementation was built on 3 OSes, Linux, Windows and MacOS. I figured it would be smart to just run a linux docker container and use that as my environment to run the docker image. So using docker, I just pulled the budtmo docker image and started it up.
                
  </p>

  <video
  src="/vncdocker.mp4"
  className="w-full aspect-video rounded-2xl"
  autoPlay
  loop
  muted
  playsInline
></video>    

  {/* <CodeBlock className="border-none rounded-2xl mt-5 mb-5" data={code} defaultValue={code[0].language}>
    <CodeBlockBody>
      {(item) => (
        <CodeBlockItem key={item.language} value={item.language}>
          <CodeBlockContent language={item.language as BundledLanguage} syntaxHighlighting={false}>
            {item.code}
          </CodeBlockContent>
        </CodeBlockItem>
      )}
    </CodeBlockBody>
  </CodeBlock> */}
               
                <p id="Android Emulator" style={{ color: fadedText, fontSize: "0.9rem" }}>

                  <br></br>
                  <br></br>
                  This is where another issue came up. Although the docker android image was running as seen above, the emulator itself was not showing up. I had no idea what was going on, but I did know that I had to use VNC to connect to the docker image and run the emulator. Up till this point, I have yet to integrate the Cua provider but I knew if I had the emulator running, I could start working on the provider easily as that would just be a change to the docker execution command.
                  <br></br>
                  <br></br>
                  Although multiple emulators were available via the docker image, I saw that the docker image when running, it needed a default emulator/device had to be set on runtime. That's where I figured out the basis of how the docker execution command would fit into the provider.
                
                 </p>
                  
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

Now you'll see that there are a few commands in the docker execution command. This was specifically curated so that the emulator would appear in the NoVNC web interface and would give control to a few ports which was later used for abd connections and VNC clients.   
   <br></br>
   <br></br>
   <span id="Execution">I've put together a detailed list on what each paramter to the docker execution command does and what the usage of it is.
    <br></br>
    <br></br>
    <span className="text-white font-mono bg-white/10 px-1 rounded">docker run</span> | Create and start a new container from an image
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">--privileged</span> | Grant the container extended Linux capabilities needed for the emulator and nested virtualization features
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">-d</span> | Run the container detached in the background
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">-p 6080:6080</span> | Map host port 6080 to container 6080 to access the web VNC UI in a browser
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">-p 5554:5554</span> | Map the emulator console port for emulator control connections
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">-p 5555:5555</span> | Map the ADB over TCP port to connect adb from the host to the emulator
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">-p 5900:5900</span> | Map native VNC port for standard VNC clients
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">-e EMULATOR_DEVICE="Samsung Galaxy S10"</span> | Set the emulator device profile to a Galaxy S10 preset inside the image
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">-e WEB_VNC=true</span> | Enable the noVNC web interface served on port 6080 for browser-based viewing
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">--device /dev/kvm</span> | Pass through the host's KVM device so the emulator can use hardware virtualization acceleration
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">--name android-container</span> | Assign a readable name to the container instance
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">budtmo/docker-android:emulator_11.0</span> | Use the budtmo/docker-android image variant preconfigured with Android 11 emulator

   </span>
   <br></br>
   <br></br>

   <img src="/emulator.png" className="w-full aspect-video rounded-2xl"></img>
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

A new 3D Vector where x, y, and z are the Cartesian coordinates calculated above—this represents the position in 3D space for given (lat, lon) on a sphere.






</MathJaxContext>


   <br></br>


     
                </p>

                <div id="result" className="mt-8 rounded-2xl" style={{ background: "#111111", border: "1px solid #2a2a2a" }}>
                <video
  src="/globe-animation.mp4"
  className="w-full aspect-video object-cover rounded-2xl"
  autoPlay
  loop
  muted
  playsInline
></video>            </div>
              </section>


              <section id="runtime-agent">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Runtime Agent</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                One of the other things I worked on was the runtime agent powering all the <span className="text-white">AI personas</span> inside Tunnel, so I wanted to break down how it actually works behind the scenes. The runtime agent is basically the heart of our persona simulation—it’s the thing that lets each persona have unique, consistent opinions, behaviors, and even voice conversations with users.

<br></br>
<br></br>
Whenever you submit a product idea, the agent kicks into action by grabbing all the relevant persona profiles from our database (demographics, psychographics, past interactions, and more). It fetches related agent profiles by extracting a niche from the product idea and matching it with the personas' interests. For example, refer to how the Extraction identified a Financial Technology niche from the prompt.
</p>
<CodeBlock id="niche-extraction" className="border-none rounded-2xl mt-5 mb-5" data={code4} defaultValue={code4[0].language}>
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

 From there, we filter through ALL the agents that are created using a quick search algorithm. This algorithm matches the niche with the agents' interests via <span className="text-white">Cohere's ranker</span>. You can see a small snippet of an agent's  persona below which we generate and store as metadata for each agent. We store these as 'users' in the <span className="text-white">Auth0 user database</span>.

  </p>

<CodeBlock className="border-none rounded-2xl mt-5 mb-5" data={code3} defaultValue={code3[0].language}>
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

<p id="ranking" style={{ color: fadedText, fontSize: "0.9rem" }}>

  
For every single simulation, it orchestrates multiple stages: first, it runs <span className="text-white">Cohere’s reranking</span> to figure out which personas actually care about this idea, then it generates tailored reactions using our AI pipelines. Each agent’s response isn’t generic—it’s built from the persona’s attributes, combined with pattern recognition and sentiment extraction, so every reply feels unique and grounded.

</p>

<CodeBlock className="border-none rounded-2xl mt-5 mb-5" data={code5} defaultValue={code5[0].language}>
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

<br></br>

<p style={{ color: fadedText, fontSize: "0.9rem" }}>

But we didn’t stop at just text. When you want to actually “call” a persona, the runtime agent passes all their context; personality, history, specific feedback—into <span style={{ color: textColor }}>Vapi (AI Voice Agent)</span>, which then transforms that into a real-time, dynamic voice call right in the browser. All the state, conversation transcripts, and even evolving feedback are instantly synced, so the agent can remember what’s happened before and respond accordingly in future sessions.

<br></br>
<br></br>
Everything the agent does happens in real-time, with results stored, tracked, and sent back to the user. This means you’re never stuck waiting or wondering if the system is keeping up. The end result is that every simulated persona feels alive, coherent, and actually grows over time, making the whole market simulation so much more real and useful.                </p>
              </section>


              <section id="experience">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Ending Remarks</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                I walked into the hackathon with a brand new team (shoutout <a target="_blank" href="https://www.linkedin.com/in/krish-garg/" className="text-white">@Krish Garg</a>, <a target="_blank" href="https://www.linkedin.com/in/suneruperera/" className="text-white">@Suneru Perera</a> & <a target="_blank" href="https://www.linkedin.com/in/haresh-goyal/" className="text-white">@Haresh Goyal</a>), completely different ambitions, a Google Doc full of big ideas, and absolutely no sleep in sight. Being only one of the few hackers from a "non-target" university, it was definetely a whole different atmosphere. The ideas, the skill-level and execution was all on another level. Our group wasn’t shy about setting wild goals; actually, we were pretty loud about it. We wanted to win, yes, but more than that, we wanted to build something that felt genuinely new.
<br></br>
<br></br>


We ended up pouring everything into Tunnel, a platform that helps makers validate product ideas and features in seconds with AI-driven, real-market personas. And the loss of sleep? Totally worth it. When they announced us for both the <span className="text-white">MLH Track</span> and <span className="text-white">Best use of Vapi - AI Voice Agent</span> awards, we were stunned into silence (something that rarely happened over the weekend).
<br></br>
<br></br>
 The biggest plot twist? Out of the 100+ projects submitted towards the <span className="text-white">Y Combinator</span> track, we were shortlisted as one of the <span className="text-white">top 10</span> teams for an interview! We sat down with none other than <a href="https://www.ycombinator.com/people/nicolas-dessaigne" target="_blank"><span className="text-white">Nicolas Dessaigne</span></a> and <a href="https://www.ycombinator.com/people/andrew-miklas" target="_blank"><span className="text-white">Andrew Miklas</span></a> from <span className="text-white">Y Combinator</span> to talk about the future of our project. Having YC interviewers poke holes in your pitch is nerve-wracking and surreal: one moment you’re just a sleep-deprived student, the next you’re tossing ideas around with people who’ve seen a thousand startups rise and fall. Winning big, meeting genuine legends, and realizing how much is possible when you just show up and start buildaing—it made every hour totally, absolutely worth it.
                </p>
              </section>
<div className="mt-52"></div>
            </article>


            {/* <section className="hidden lg:block mt-12 grid grid-cols-2 gap-6">
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
            </section> */}


            </div>
          </div>
        </div>
      </div>
    </>
  );
}