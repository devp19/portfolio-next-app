"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import CustomCursor from "./CustomCursor";

export default function CanopyDemo() {
  const [zooming, setZooming] = useState(false);
  const [lightMode, setLightMode] = useState<boolean>(true); // default safe for SSR

  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const router = useRouter();

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

  const iconColor = lightMode ? "#111" : "#fff";
  const textColor = lightMode ? "#111" : "#111";
  const bgColor = lightMode ? "#ffffff" : "#ffffff";

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
        }}
      >
        <img
          src="/ascii-white.gif"
          alt="ASCII Art"
          style={{
            opacity: lightMode ? 0.85 : 1,
            width: isMobile ? "120px" : "clamp(180px, 18vw, 180px)",
            height: "auto",
            transition:
              "transform 0.6s cubic-bezier(.4,2.2,.2,1), filter 0.6s",
            transform: zooming ? "scale(20)" : "scale(1)",
            display: "block",
          }}
          draggable={false}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: isMobile ? "1rem" : "2rem",
          bottom: isMobile ? "1.2rem" : "2rem",
          color: textColor,
          fontSize: isMobile ? "0.93rem" : "0.95rem",
          opacity: 0.85,
          lineHeight: 1.5,
          maxWidth: isMobile ? "92vw" : "550px",
          zIndex: 20,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
        }}
      >
        <div
          style={{
            fontWeight: 300,
            fontSize: isMobile ? "0.88rem" : "0.9rem",
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
            <FaXTwitter color="black" opacity={0.85} />
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
            <FaGithub color="black" opacity={0.85} />
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
            <FaLinkedin color="black" opacity={0.85} />
          </a>
        </div>

        <div
          style={{
            fontWeight: 300,
            fontSize: isMobile ? "0.88rem" : "0.9rem",
            marginBottom: "0.5em",
            lineHeight: 1.8,
          }}
        >
          <span data-cursor-hover>
            <a
              onClick={() => handleNavigation("/innovation")}
              style={{
                textDecoration: "underline",
                fontWeight: 300,
                fontSize: isMobile ? "0.88rem" : "0.9rem",
                color: textColor,
                display: "inline-flex",
                cursor: "pointer",
                opacity: 0.85,
                alignItems: "center",
              }}
              tabIndex={0}
            >
              code, cognitive science, and applied research
             <CgArrowTopRight color="black" opacity={0.85} />
            </a>
          </span>
          <br />
          ai developer (f25), prev automation
          <span
            data-cursor-hover
            onClick={() => handleNavigation("/fidelity")}
            style={{
              textDecoration: "underline",
              fontWeight: 300,
              fontSize: isMobile ? "0.88rem" : "0.9rem",
              color: textColor,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              opacity: 0.85,
              marginLeft: "0.2em",
            }}
            tabIndex={0}
          >
            @fidelity <CgArrowTopRight color="black" opacity={0.85} />
          </span>
          <br></br>
          honours computer science
          <span
            data-cursor-hover
            onClick={() => handleNavigation("/torontomet")}
            style={{
              textDecoration: "underline",
              fontWeight: 300,
              fontSize: isMobile ? "0.88rem" : "0.9rem",
              color: textColor,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              opacity: 0.85,
              marginLeft: "0.2em",
            }}
            tabIndex={0}
          >
            @torontomet <CgArrowTopRight color="black" opacity={0.85} />
          </span>

          {/* <span
            data-cursor-hover
            onClick={() => handleNavigation("/innovation/resdex")}
            style={{
              textDecoration: "underline",
              fontWeight: 300,
              fontSize: isMobile ? "0.88rem" : "0.9rem",
              color: textColor,
              display: "inline-flex",
              cursor: "pointer",
              opacity: 0.85,
              alignItems: "center",
              marginLeft: "0.2em",
            }}
            tabIndex={0}
          >
            @resdex <CgArrowTopRight color={iconColor} />
          </span> */}
          <br />
        </div>
      </div>

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
