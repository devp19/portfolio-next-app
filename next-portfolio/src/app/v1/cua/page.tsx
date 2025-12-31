
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

const code10 = [
  {
    language: "bash",
    filename: "docker.sh",
    code: ` system_prompt = f"""You are an Android automation assistant. Convert user requests into ADB commands.

You can SEE the Android screen in the image provided. Analyze what's visible and determine the correct actions.

Available ADB functions (call these directly):
- home() - Go to home screen
- back() - Press back button
- recents() - Show recent apps
- open_app(package) - Open app by package name (e.g., "com.android.settings")
- open_url(url) - Open URL in browser (automatically adds https:// if missing)
- tap(x, y) - Tap at coordinates (screen is {screen_width}x{screen_height})
- swipe(x1, y1, x2, y2, duration) - Swipe gesture (screen is {screen_width}x{screen_height})
- type_text(text) - Type text
- key_event(keycode) - Send key event (66=Enter, 67=Backspace)

IMPORTANT: Look at the image to find UI elements. The screen resolution is {screen_width}x{screen_height}. When you see UI elements in the image, provide coordinates that match this resolution. If user says "tap the 3 dots top right", look at the image, find the 3 dots icon, estimate its coordinates relative to {screen_width}x{screen_height}, and tap there.

Common package names:
- Settings: com.android.settings
- Chrome: com.android.chrome
- Calculator: com.android.calculator2

For URLs: You can use domain names directly (e.g., "nvidia.com" or "www.nvidia.com"). The system will add https:// automatically.

You can execute MULTIPLE commands in sequence! For example, "open chrome and go to nvidia website":
[
  {{"function": "open_app", "args": {{"package": "com.android.chrome"}}}},
  {{"function": "open_url", "args": {{"url": "nvidia.com"}}}}
]

Another example with navigation:
[
  {{"function": "home"}},
  {{"function": "open_app", "args": {{"package": "com.android.settings"}}}},
  {{"function": "tap", "args": {{"x": 640, "y": 360}}}}
]

Respond with a JSON array of commands to execute. Only return the JSON array, nothing else."""

  `
  
  }
];


const code3 = [
  {
    language: "python",
    filename: "sample_raw_metadata.json",
    code: ` def __init__(
        self,
        port: int = 8000,
        host: str = "localhost",
        image: str = "budtmo/docker-android:emulator_11.0",
        verbose: bool = False,
        storage: Optional[str] = None,
        ephemeral: bool = True,
        vnc_port: int = 6080,
        adb_port: int = 5555,
        device_profile: str = "Samsung Galaxy S10",
        **kwargs
    ):
  `
  
  }
];

const code4 = [
  {
    language: "python",
    filename: "__init__.py",
    code: `"""
verify docker and adb dependencies are instaleld
set has_android bool flag to true if both are installed (further used in factory 
to check if provider is available)
"""

try:
    import subprocess
    # Only check for Docker - ADB is inside the container, not needed on host
    subprocess.run(["docker", "--version"], capture_output=True, check=True)
    HAS_ANDROID = True
except (subprocess.SubprocessError, FileNotFoundError):
    HAS_ANDROID = False

from .provider import AndroidDockerProvider

__all__ = ["AndroidDockerProvider", "HAS_ANDROID"]
`
  
  }
];

const code5 = [
{
  language: "txt",
  filename: "terminal.txt",
  code: ` 
  // base.py 

  class VMProviderType(StrEnum):
    """Enum of supported VM provider types."""
    LUME = "lume"
    LUMIER = "lumier"
    CLOUD = "cloud"
    WINSANDBOX = "winsandbox"
    DOCKER = "docker"
    ANDROID = "android"
    UNKNOWN = "unknown"
 


  // factory.py
  .
  .
  .
  elif provider_type == VMProviderType.ANDROID:
    try:
        from .androiddocker import AndroidDockerProvider, HAS_ANDROID
        if not HAS_ANDROID:
            raise ImportError(
                "AndroidDockerProvider requires Docker to be installed and running. "
                "Please ensure Docker is installed and the Docker daemon is running."
            )
        return AndroidDockerProvider(
            port=port,
            host=host,
            image=image or "budtmo/docker-android:emulator_11.0",
            verbose=verbose,
            **kwargs
        )
    except ImportError as e:
        logger.error(f"Failed to import AndroidDockerProvider: {e}")
        raise ImportError(
            "Cannot use AndroidDockerProvider: Docker is required. "
            "Please install Docker and ensure the Docker daemon is running."
        ) from e
         
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
    { id: 'Cua Implementation', label: 'Cua Implementation',
      subSections: [
        { id: 'Computer SDK', label: 'Computer SDK' },
        { id: 'Agent Workaround', label: 'Agent Workaround' }]
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
                {/* <a href="https://www.linkedin.com/posts/krish-garg_we-won-hack-the-north-twice-in-the-same-day-activity-7373128956130033664-vpse?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" aria-label="ResDex Website" style={{ paddingLeft: "0.75rem" }}>
                  <FaLink size={15} color={textColor} />
                </a> */}
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
   


     
                </p>
              </section>


              <section id="Cua Implementation">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Cua Implementation</h2>
                <p id="Computer SDK" style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                After setting up the emulator, the next step was to implement the provider into the existing factory method. This was pretty straightforward as I had already done the hard testing with execution commands above when I tried running the emulator.
                <br></br>
<br></br>
I started off with the dependency check and availability flag <span className="text-white font-mono bg-white/10 px-1 rounded">androiddocker/__init__.py</span>, mimicking that of the previous implementations that were already built.
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

 From there, I created the provider class <span className="text-white font-mono bg-white/10 px-1 rounded">androiddocker/provider.py</span>. In specific, I added a snippet below for the constructor to talk about the parameters that are needed to run the emulator.

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

You'll see some of the parameters are preset to default values, and some are optional. Most of these come from the way providers are to be setup in the factory method. In specific I wanted to talk about the port mappings. 
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">6080 (noVNC):</span> Browser-based VNC viewers like noVNC typically serve via an HTTP endpoint that upgrades to WebSockets and forward to a VNC server on 5900+x; 6080 is the widely adopted default listen port for that websockify/noVNC endpoint, making it easy to remember and consistent across tooling.
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">5555 (ADB over TCP):</span> Android Debug Bridge uses TCP 5555 by convention for networked devices/emulators; most Android tooling assumes 5555 unless specified, simplifying adb connect :5555 workflows.
<br></br>
<br></br>
<span className="text-white font-mono bg-white/10 px-1 rounded">8000 (service HTTP API/UI):</span> Lightweight development servers frequently default to 8000 for local APIs and dashboards, avoiding collisions with 80/443 and staying familiar to developers; many Python frameworks use 8000 by default.

<br></br>
<br></br>

Additionally, I registed AndroidDocker into the supported VMProvider types and listed it in the factory implementation.
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
</section>

<section id="Agent Workaround">    
<p style={{ color: fadedText, fontSize: "0.9rem" }}>
Now this is where the fun begins, actually implementing the actions! This definetely turned out to be much more difficult then intended as initially, the exisiting computer agent was supposed to be able to handle it directly but due to the docker image not being preloaded with pyautogui (which is the basis of what the Cua computer agent utilizes to perform actions), there needed to be a way to convert natural language that the agent can read and convert it into ABD commands that can be executed on the emulator.

<br></br>
<br></br>
Initally, the idea was to create some sort of websocket bridge that would intercept the request and convert it into ADB commands. This turned out to be a challenge because of how the ports are exposed.
<br></br>
<br></br>
In containerized Android environments like budtmo/docker-android, the VNC port structure becomes particularly problematic. These containers typically expose multiple ports - VNC on 5900, noVNC WebSocket proxy on 6080, and ADB on 5555. The issue is that each VNC session requires its own dedicated port (5900+N pattern), and mapping these dynamically through a WebSocket bridge becomes complex when you need to maintain session isolation and handle multiple concurrent connections.
<br></br>
<br></br>
That's where I got the idea to just bypass the websocket implementation. Although this is a quick fix, it's not the most secure or scalable solution, but it gets the job done. How it works is that it uses direct Docker exec commands to comunicate with the android container. Instead of trying to establish a websocket bridge between the appication and the containers VNC/ADB services, the code directly executes ADB commands inside the running container using subprocess calls.
<br></br>
<br></br>
This pipeline is something similar that I currently use for my work over at Fidelity Investments for automating script calls utilizing nlp. 


</p>              
<CodeBlock className="border-none rounded-2xl mt-5 mb-5" data={code10} defaultValue={code10[0].language}>
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

                    Here's a quick demo below!


                    <video
  src="/test.mp4"
  className="w-full aspect-video rounded-2xl"
  autoPlay
  loop
  muted
  playsInline
></video>    

</section>


              <section id="experience">
                <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Ending Remarks</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Wrapping up this project, I’ve honestly learned a ton by getting the Android Docker system up and running. Messing around with container setup, emulator stuff, and figuring out all the quirks along the way was challenging, but actually pretty fun. I picked up a lot about how everything fits together under the hood, and now I feel way more confident dealing with this kind of tech. Overall, it’s been a great hands-on experience, diving into computer use agents and Cua in general!
                </p>
              </section>
<div className="mt-90"></div>
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