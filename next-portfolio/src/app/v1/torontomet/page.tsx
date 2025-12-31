"use client";

import Image from "next/image";
import {
  IconCalendar,
  IconStack2,
  IconInfoCircle,
} from "@tabler/icons-react";
import CustomCursor from "../CustomCursor";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
      router.push("/");
    }, 600); 
  };

  const textColor = lightMode ? "#111" : "#111";
  const fadedText = lightMode ? "#444" : "#444";
  const fadedLabel = lightMode ? "#666" : "#666";
  const bgColor = lightMode ? "#ffffff" : "#ffffff";

  return (
    <>

      <main
        className={`min-h-screen px-6 py-12 font-sans transition-all duration-500 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{
          background: bgColor,
          color: textColor,
        }}
      >
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Back button */}
          <button
            onClick={handleBack}
            className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer"
            style={{ color: fadedText }}
            onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
          >
            ← Back
            <span
              className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current
                         origin-left scale-x-0
                         transition-transform duration-300
                         group-hover:scale-x-100"
            />
          </button>

          <div
            style={{
              background: "#fff",
              borderRadius: "0.75rem",
              overflow: "hidden",
              marginTop: "1.25rem",
            }}
          >
            <Image
              src="/tmucover2.jpg"
              alt="Toronto Metropolitan University Drone Shot"
              width={400}
              height={300}
              className="w-full object-cover"
            />
          </div>

          <div>
            <p
              style={{
                color: fadedLabel,
                fontSize: "0.8rem",
                marginBottom: "0.5rem",
              }}
            >
              Education
            </p>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Toronto Metropolitan University
            </h1>
            {/* <p style={{ fontSize: "0.8rem", color: fadedText }}>
              Toronto Metropolitan University (TMU), formerly Ryerson University, is a leading urban institution known for its innovation and focus on experiential learning. The Computer Science program at TMU combines theory with practical application in areas like AI, software engineering, and data science, preparing students for real-world impact in tech-driven industries.
            </p> */}

<br></br>
            {/* Overview */}
            <div>
              <h3
                style={{
                  color: fadedLabel,
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconInfoCircle size={"0.8rem"} color={textColor} /> Overview
              </h3>
              <p style={{ color: fadedText, fontSize: "0.8rem" }}>
                I'm a third-year Computer Science student at Toronto Metropolitan University (TMU), where I’ve built a strong foundation in both theoretical and applied computing. My coursework has covered key areas such as algorithms and data structures (CPS305), systems programming (CPS393), and software engineering (CPS406); equipping me with the technical skills to design, build, and analyze complex software systems.
<br></br>
<br></br>
Beyond the classroom, I've engaged with emerging fields through electives and projects in artificial intelligence, databases, and human-computer interaction, while continuously refining my skills in Python, JavaScript, C++, and cloud services. TMU’s hands-on approach has allowed me to work on real-world problems early on, from building full-stack web apps to developing automation pipelines.
<br></br>
<br></br>
As I head into my third year, I'm focused on deepening my expertise in machine learning, distributed systems, and research-backed development, aiming to merge my academic experience with meaningful innovation in the tech space.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
            <div>
              <h3
                style={{
                  color: fadedLabel,
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconCalendar size={"0.8rem"} color={textColor} /> Details
              </h3>
              <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                <li>Honours Bachelors of Science</li>
                <li>3.94 GPA</li>
                <li>2x Dean's List</li>
                <li>Computer Science</li>
                <li>September 2023 – Present</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  color: fadedLabel,
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconStack2 size={"0.8rem"} color={textColor} /> Relevant Courses
              </h3>
              <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                <li>Discrete Mathematics (MTH 110) A+</li>
                <li>Computer Science (CPS 109, CPS 209) A+</li>
                <li>Data Structures & Algorithms (CPS 305) A+</li>
                <li>Software Engineering (CPS 406) A+</li>
                <li>Comparative Programming Languages (Smalltalk, Haskell, Elixir, Rust) (CPS506) A+</li>
              </ul>
            </div>

        
          </div>
        </div>
      </main>
    </>
  );
}
