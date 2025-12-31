"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback, MouseEvent } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion, AnimatePresence } from "framer-motion";
import { SpinningText } from "@/components/magicui/spinning-text";
import { FiGithub, FiLinkedin, FiX } from "react-icons/fi";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { useRouter } from "next/navigation";

// --- TiltEffect helper ---
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const TiltEffect: React.FC<{ children: React.ReactNode; className?: string }>
  = ({ children, className }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;
      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setHovered(false);
  };

  const onMouseEnter = () => {
    setHovered(true);
  };

  return (
    <div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${hovered ? 1.06 : 1}, ${hovered ? 1.06 : 1}, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
};

// Shine effect style for buttons
const ShineStyle = () => (
  <style>{`
    .shine-btn {
      position: relative;
      overflow: hidden;
    }
    .shine-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -75%;
      width: 50%;
      height: 100%;
      background: linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 60%, transparent 100%);
      transform: skewX(-20deg);
      transition: left 0.5s cubic-bezier(.4,0,.2,1);
      pointer-events: none;
    }
    .shine-btn:hover::before {
      left: 120%;
      transition: left 0.5s cubic-bezier(.4,0,.2,1);
    }
  `}</style>
);

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [overlayShouldRender, setOverlayShouldRender] = useState(true);
  const [showRest, setShowRest] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileBtnRef = useRef<HTMLButtonElement>(null);

  // Sequenced headline state
  const [headlineStep, setHeadlineStep] = useState(1);
  const [showHeadline, setShowHeadline] = useState(true);

  // Sample nav items
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Innovation", link: "/innovation" },
    { name: "Contact", link: "/contact" },
  ];

  const router = useRouter();

  useEffect(() => {
    // Start fade out after 1s
    const timeout = setTimeout(() => {
      setOverlayVisible(false);
      // Remove overlay from DOM after fade duration (700ms)
      setTimeout(() => setOverlayShouldRender(false), 300);
      // Show content after overlay fade (0.7s matches fade duration)
      setTimeout(() => setShowContent(true), 300);
      // Start headline sequence after overlay
      setTimeout(() => setHeadlineStep(1), 300);
      // Do NOT show rest here; will be handled after headline sequence
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Show rest of hero only after the final headline animation is fully complete
  useEffect(() => {
    if (headlineStep !== 3 || !showContent) return;
    // Calculate total animation time for the final step
    const text = 'Exploring the intersection of code, cognition, and applied research to build intelligent, real-world solutions.';
    const duration = 1.1, stagger = 0.05;
    const numWords = text.trim().split(/\s+/).length;
    const totalDuration = (duration + stagger * (numWords - 1)) * 1000;
    const timeout = setTimeout(() => setShowRest(true), totalDuration);
    return () => clearTimeout(timeout);
  }, [headlineStep, showContent]);

  // Headline sequencing with simple timeouts and fade
  useEffect(() => {
    if (!showContent) return;
    let timeouts: NodeJS.Timeout[] = [];
    // Animation config
    const configs = [
      { text: 'Hey!', duration: 0.7, stagger: 0.05 },
      { text: "My name is Dev and this is my little space on the internet where I showcase my work and projects by", duration: 1.1, stagger: 0.05, extraDelay: 0.1 },
      { text: 'Exploring the intersection of code, cognition, and applied research to build intelligent, real-world solutions.', duration: 1.1, stagger: 0.05 },
    ];
    if (headlineStep === 1 || headlineStep === 2) {
      setShowHeadline(true);
      const { text, duration, stagger, extraDelay } = configs[headlineStep - 1];
      const numWords = text.trim().split(/\s+/).length;
      let totalDuration = (duration + stagger * (numWords - 1)) * 1000; // ms
      if (extraDelay) totalDuration += extraDelay * 1000;
      timeouts.push(setTimeout(() => setShowHeadline(false), totalDuration));
      timeouts.push(setTimeout(() => { setHeadlineStep(headlineStep + 1); setShowHeadline(true); }, totalDuration + 200));
    }
    // step 3 stays
    return () => timeouts.forEach(clearTimeout);
  }, [headlineStep, showContent]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!profileMenuOpen) return;
    function handleClick(e: Event) {
      if (
        profileBtnRef.current &&
        !profileBtnRef.current.contains(e.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [profileMenuOpen]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <SmoothCursor />
      {showRest && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="fixed left-0 w-full z-[9999]"
          style={{ top: '2rem', position: 'fixed' }}
        >
          <Navbar>
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
              <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
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
        </motion.div>
      )}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden shadow-2xl"
        // style={{
        //   background: "#F49C69",
        //   backgroundImage:
        //     "radial-gradient(circle at 50% 100%, rgba(244, 156, 105, 0.7) 0%, rgba(205, 65, 64, 0.7) 20%, rgba(102, 16, 32, 1) 42%,rgb(10, 10, 10) 65%)",
        // }}
      >
      {/* Fade-in overlay */}
      {overlayShouldRender && !showRest && (
        <div
          className={`fixed inset-0 z-40 bg-black transition-opacity duration-700`}
          style={{ opacity: overlayVisible ? 1 : 0, pointerEvents: overlayVisible ? "auto" : "none" }}
        />
      )}
      {/* Top nav */}
      <motion.header
        className="relative z-10 w-full flex items-center justify-between px-6 pt-6"
        initial={{ opacity: 0, y: 40 }}
        animate={showRest ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        {/* <div className="flex items-center">
          <SpinningText className="absolute left-10 top-10 text-xs" duration={40} radius={9} fontSize={12}>
            Dev Patel • Dev Patel
          </SpinningText>
        </div> */}
        {/* Centered nav */}
        {/* <nav className="absolute left-1/2 top-6 -translate-x-1/2">
          <ul className="flex gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
            <li>
              <a href="#work" className="text-white/90 font-medium px-3 py-1 rounded-full hover:bg-white/20 transition">
                Work
              </a>
            </li>
            <li>
              <a href="#about" className="text-white/90 font-medium px-3 py-1 rounded-full hover:bg-white/20 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white/90 font-medium px-3 py-1 rounded-full hover:bg-white/20 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav> */}
        {/* Top right icons */}
        <div className="flex items-center gap-2 relative">
          {/* <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
            <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </button> */}
          {/* Social icons removed from here; now only in navbar */}
        <AnimatePresence>
          {profileMenuOpen && (
            <motion.div
              key="profile-dropdown"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-0 mt-2 w-56 rounded-xl shadow-xl z-50 backdrop-blur-md bg-black/70 border border-white/10 p-4 flex flex-col gap-2"
              style={{ top: '100%' }}
            >
              <span className="text-white/80 font-semibold">Dev Patel</span>
              <span className="text-white/50 text-sm">Automation Analyst @ Fidelity Investments</span>
              <hr className="border-white/10 my-2" />
              <button className="text-left text-white/80 hover:bg-white/10 rounded-lg px-2 py-1 transition cursor-pointer">Profile</button>
              <button className="text-left text-white/80 hover:bg-white/10 rounded-lg px-2 py-1 transition cursor-pointer">Settings</button>
              <button className="text-left text-red-400 hover:bg-red-400/20 rounded-lg px-2 py-1 transition cursor-pointer">Logout</button>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero section */}
      <main className="flex-1 flex flex-col items-center justify-center z-10 relative px-4">
        {/* Profile */}
        <motion.div
          className="flex flex-row items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={showRest ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* <div className="w-15 h-15 rounded-full border-2 border-white/30 flex items-end justify-center mb-2 overflow-hidden">
            <Image src="/profile.png" alt="Profile" width={68} height={68} className="rounded-full" style={{ marginBottom: '-5px' }} />
          </div> */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-row items-center justify-center gap-2 mb-0 w-full">
              <Image src="/signature.png" alt="Signature" width={100} height={32} />
              <span className="text-white/80 font-regulartext-lg"> · </span>
              <span className="text-white/80 font-regulartext-lg">Dev Patel</span>
            </div>
        
          </div>
        </motion.div>
        {/* Headline */}
        <div className="text-center max-w-5xl mb-10" style={{ top: '100px', minHeight: '3.5em' }}>
          {showContent && headlineStep === 1 && showHeadline && (
            <TextAnimate
              key="hey"
              animation="blurIn"
              as="h1"
              by="word"
              duration={0.7}
              className="text-white font-regular tracking-tight text-4xl md:text-5xl leading-tight"
            >
              Hey!
            </TextAnimate>
          )}
          {showContent && headlineStep === 2 && showHeadline && (
            <TextAnimate
              key="imdev"
              animation="blurIn"
              as="h1"
              by="word"
              duration={1.1}
              className="text-white font-regular tracking-tight text-3xl md:text-4xl leading-tight"
            >
              {"My name is Dev and this is my little space on the internet where I showcase my work and projects by"}
            </TextAnimate>
          )}
          {showContent && headlineStep === 3 && (
            <TextAnimate
              key="exploring"
              animation="blurIn"
              as="h1"
              by="word"
              duration={1.1}
              className="text-white font-regular tracking-tight text-4xl md:text-5xl leading-tight"
            >
              Exploring the intersection of code, cognition, and applied research to build intelligent, real-world solutions.
            </TextAnimate>
          )}
        </div>
        {/* CTA Button */}
        <ShineStyle />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={showRest ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-row gap-4">
            {/* <TiltEffect>
              <button
                className="shine-btn mt-2 px-6 py-2 rounded-full bg-white/10 border border-white/30 text-white/90 font-medium text-base backdrop-blur-md hover:bg-white/20 transition shadow-lg cursor-pointer"
                style={{
                  boxShadow: "0 4px 32px 0 rgba(255,94,98,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                }}
                onClick={() => router.push('/about')}
              >
                Learn More
              </button>
            </TiltEffect>
            <TiltEffect>
              <button
                className="shine-btn mt-2 px-6 py-2 rounded-full bg-white/20 border border-white/30 text-white/90 font-medium text-base backdrop-blur-md hover:bg-white/30 transition shadow-lg cursor-pointer"
                style={{
                  boxShadow: "0 4px 32px 0 rgba(255,94,98,0.15)",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
                onClick={() => router.push('/innovation')}
              >
                View Projects
              </button>
            </TiltEffect> */}
          </div>
        </motion.div>
      </main>
    </div>

   
    </>
  );
}
