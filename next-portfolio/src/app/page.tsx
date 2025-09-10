"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import CustomCursor from "./CustomCursor";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Code,
  Workflow,
  Cable,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  CircleGauge
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function CanopyDemo() {
  const [zooming, setZooming] = useState(false);
  const [lightMode, setLightMode] = useState<boolean>(true);
  const [open, setOpen] = React.useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const router = useRouter();

  const [textReady, setTextReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setLightMode(theme === null || theme === "light");
  }, []);

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

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
    return () => clearTimeout(scrollTimeout);
  }, []);

  const iconColor = lightMode ? "#494949ff" : "#ffffffff";
  const textColor = lightMode ? "#494949ff" : "#ffffffff";
  const bgColor = lightMode ? "#0e0e0eff" : "#0e0e0eff";

  const handleNavigation = (path: string) => {
    document.body.style.backgroundColor = lightMode ? "#fff" : "#000";
    setExiting(true);
    setTimeout(() => {
      router.push(path);
    }, 200);
  };

  return (
    <div
      style={{
        background: bgColor,
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "center",
        overflow: "hidden",
        userSelect: "none",
        paddingTop: isMobile ? "4vh" : 0,
        boxSizing: "border-box",
        opacity: loaded && !exiting ? 1 : 0,
        filter: loaded && !exiting ? "blur(0px)" : "blur(12px)",
        transition:
          "opacity 0.2s ease-in-out, filter 0.2s ease-in-out, background 0.2s ease-in-out",
      }}
    >
      {exiting && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: lightMode ? "#fff" : "#000",
            zIndex: 999,
            animation: "fadeIn 0.2s forwards",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: isMobile ? "100vh" : "auto",
          position: isMobile ? "absolute" : "static",
          top: isMobile ? 0 : undefined,
          left: isMobile ? 0 : undefined,
          zIndex: 10,
          pointerEvents: zooming ? "none" : "auto",
          flexDirection: "column", // Add this to stack vertically
        }}
      >
        <img
          src="/final.gif"
          alt="Pixels"
          style={{
            width: isMobile ? "120px" : "clamp(180px, 18vw, 180px)",
            height: "auto",

            display: "block",

            opacity: textReady ? 0.85 : 0,
            transform: textReady ? "translateY(0px)" : "translateY(40px)",
            transition:
              "opacity 0.55s cubic-bezier(.4,2,.3,1), transform 0.6s cubic-bezier(.4,2,.3,1)",
          }}
          draggable={false}
        />

        {/* Centered prompt under the image */}
        <div
          style={{
            marginTop: "1.2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p
            className="text-xs rounded-full mt-5 px-4 py-2"
            style={{
              opacity: textReady ? 0.85 : 0,
              transform: textReady ? "translateY(0px)" : "translateY(40px)",
              transition:
                "opacity 0.55s cubic-bezier(.4,2,.3,1), transform 0.6s cubic-bezier(.4,2,.3,1)",
            }}
          >
            <a onClick={() => setOpen(true)} className="font-mono">
              Press{" "}
              <kbd className="font-mono hover-bg-muted-foreground/50 ml-2 inline-flex bg-muted-foreground/10 select-none items-center gap-1 rounded-sm border px-4 align-middle text-[10px] leading-loose">
                <svg
                  style={{ marginBottom: "1.5px", marginRight: "1px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-command-icon lucide-command"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>{" "}
                + K
              </kbd>
            </a>
          </p>
        </div>

       <CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Search or click to open a page..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Fidelity Investments">
      <CommandItem>
        <img
          src="./fidelity-icon.png"
          width={24}
          height={24}
          alt="Fidelity"
        />
        <span>AI Engineer</span>
        <CommandShortcut>Internship (Current)</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <img
          src="./fidelity-icon.png"
          width={24}
          height={24}
          alt="Fidelity"
        />
        <span>Automation Developer</span>
        <CommandShortcut>Internship (S25)</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Innovation / Projects">
      <CommandItem>
        <img
          src="./beige-logo.png"
          width={24}
          height={24}
          alt="ResDex Logo"
        />
        <span>ResDex</span>
        <CommandShortcut>Founder & Engineer</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <span className="p-1">
        <CircleGauge size={24}/>
        </span>
        <span>HotSpots AI</span>
        <CommandShortcut>ML / Research</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <img
          src="./lyra-icon.png"
          width={24}
          height={24}
          alt="Lyra Logo"
        />
        <span>Lyra</span>
        <CommandShortcut>AI Integrated IDE</CommandShortcut>
      </CommandItem>
      
    </CommandGroup>

    <CommandSeparator />
    <CommandGroup heading="Education">
      <CommandItem>
        <img
          src="./tmu-icon.jpg"
          width={24}
          height={24}
          alt="TMU"
        />
        <span>Toronto Metropolitan University</span>
        <CommandShortcut>2023 - Present</CommandShortcut>
      </CommandItem>
      
    </CommandGroup>
  </CommandList>
  
  {/* Footer section */}
  <div className="flex items-center justify-between border-t px-4 py-2 text-xs bg-muted/50">
    <div className="flex items-center gap-2">
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">Esc</span>
      </kbd>
    </div>
    <div className="flex items-center gap-4">
      <span>Open 
        <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <CornerDownLeft size={10}/>
        </kbd>
      </span>
      <span className="text-muted-foreground">  | 
       
      </span>
      <span>Select</span>
      <div className="flex items-center gap-1">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded  bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <ArrowUp size={10}/>

        </kbd>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded  bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              <ArrowDown size={10}/>

        </kbd>
      </div>
    </div>
  </div>
</CommandDialog>
       
      </div>

      {/* <div
        style={{
          position: "absolute",
          left: isMobile ? "1rem" : "2rem",
          bottom: isMobile ? "1.2rem" : "2rem",
          color: textColor,
          fontSize: isMobile ? "0.93rem" : "0.95rem",
          lineHeight: 1.5,
          maxWidth: isMobile ? "92vw" : "550px",
          zIndex: 20,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
          opacity: textReady ? 0.85 : 0,
    transform: textReady ? "translateY(0px)" : "translateY(40px)",
    transition: "opacity 0.55s cubic-bezier(.4,2,.3,1), transform 0.6s cubic-bezier(.4,2,.3,1)",
        }}
      >
        <div
          style={{
            fontSize: isMobile ? "0.88rem" : "1rem",
            marginBottom: "0.5em",
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
            justifyContent: "flex-start",
          }}
        >
          Dev Patel
          <a
            href="https://x.com/_devp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: iconColor,
              opacity: 0.85,
              fontSize: "1.1em",
              marginLeft: "1em",
            }}
            aria-label="Twitter"
          >
            <FaXTwitter color="white" opacity={1} />
          </a>
          <a
            href="https://github.com/devp19"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: iconColor,
              opacity: 0.85,
              fontSize: "1.1em",
              marginLeft: "0.2em",
            }}
            aria-label="GitHub"
          >
            <FaGithub color="white" opacity={1} />
          </a>
          <a
            href="https://linkedin.com/in/devp19"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: iconColor,
              opacity: 0.85,
              fontSize: "1.1em",
              marginLeft: "0.2em",
            }}
            aria-label="LinkedIn"
          >
            <FaLinkedin color="white" opacity={1} />
          </a>
        </div>

        <div
          style={{
            fontSize: isMobile ? "0.88rem" : "0.9rem",
            marginBottom: "0.5em",
            lineHeight: 1.8,
          }}
        >
          <span data-cursor-hover>
            <a
            className="group inline-flex items-center underline cursor-pointer"
              onClick={() => handleNavigation("/innovation")}
              style={{
                textDecoration: "underline",
                color: textColor,
                display: "inline-flex",
                cursor: "pointer",
                alignItems: "center",
              }}
              tabIndex={0}
            >
              code, cognitive science, and applied research
             <CgArrowTopRight className="transition-transform duration-200 group-hover:translate-x-2 ml-1" color="white" opacity={1} />
            </a>
          </span>
          <br />
          ai developer (f25), prev automation
          <span
            data-cursor-hover
                        className="group inline-flex items-center underline cursor-pointer"

            onClick={() => handleNavigation("/fidelity")}
            style={{
              textDecoration: "underline",
              color: textColor,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "0.2em",
            }}
            tabIndex={0}
          >
            @fidelity <CgArrowTopRight className="transition-transform duration-200 group-hover:translate-x-2 ml-1" color="white" opacity={1} />
          </span>
          <br></br>
          honours computer science
          <span
            data-cursor-hover
                        className="group inline-flex items-center underline cursor-pointer"

            onClick={() => handleNavigation("/torontomet")}
            style={{
              textDecoration: "underline",
              color: textColor,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "0.2em",
            }}
            tabIndex={0}
          >
            @torontomet <CgArrowTopRight className="transition-transform duration-200 group-hover:translate-x-2 ml-1" color="white" opacity={1} />
          </span>

          <br />
        </div>
      </div> */}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
