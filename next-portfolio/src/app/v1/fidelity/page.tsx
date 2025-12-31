"use client";

import Image from "next/image";
import {
  IconCalendar,
  IconStack2,
  IconInfoCircle,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FidelityPage() {
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
            ← Home / Fidelity
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
              src="/fidelitycover.jpg"
              alt="Fidelity Screenshot"
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
              Internship
            </p>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Fidelity Investments
            </h1>
            <p style={{ fontSize: "0.8rem", color: fadedText }}>
              Fidelity Investments is the third-largest asset manager globally,
              with over $12 trillion in assets under administration and $4.5
              trillion in AUM. Ranked just behind BlackRock and Vanguard,
              Fidelity offers industry-leading services in wealth management,
              brokerage, and retirement planning. Known for its innovation and
              strong focus on technology, it remains a top name in global
              finance.
            </p>
          </div>

                    <div style={{ height: "1px", backgroundColor: 'black', opacity: '0.2' }}></div>


          <h1 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              AI Developer (F25)
            </h1>

  <p style={{ color: fadedText, fontSize: "0.8rem" }}>
                As an AI Developer at Fidelity, I worked closely with different teams to build AI-integrated solutions to streamline research, reporting, and data analysis workflows. By utilizing FILxGPT (an in-house custom LLM built on OpenAI's GPT model) and other tools such as Python, Numpy, PerplexitySearch API's, AI Builder and etc, I was able to make a large impact in across multiple departments ranging from HR, Marketing, Compliance, and more.
                
                <br></br>
                <br></br>
                I also participated in an internal discovery project, seeing which new and existing AI tools we can adopt to improve our workflows and processes across the SDLC. Working closely with the Vice President of Data, Technology & Transformation, Nazia S., I was able to explore how we can leverage AI to improve project discovery and kickoff through transcripts.
                <br></br>
                <br></br>
                Additionally, I also took part in an AI hackathon across Fidelity which included teams from across the world, where we wanted to help phase together different parts of the SDLC, primarilty focusing on pre-development (project intake and kickoff meetings) and post-development practices such as documentation, userguide creation and etc.
                {/* I lead end-to-end
                development of cloud workflows using Power Automate and the Azure Registry. I
                work closely with stakeholders to gather requirements, design
                solutions, and manage the full software development lifecycle;
                from planning and building to testing and deployment. My work
                helps teams automate tasks, improve efficiency, and reduce
                manual effort. */}
              </p>

              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7365836092371107840?collapsed=1" height="600" width="100%" frameBorder="0" allowFullScreen={true} title="Embedded post"></iframe>
          
          <div style={{ height: "1px", backgroundColor: 'black', opacity: '0.2' }}></div>

          <h1 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Automation Analyst (S25)
            </h1>

            <p style={{ color: fadedText, fontSize: "0.8rem" }}>
                As an Automation Analyst at Fidelity, I lead end-to-end
                development of cloud workflows using Power Automate and the Azure Registry. I
                work closely with stakeholders to gather requirements, design
                solutions, and manage the full software development lifecycle;
                from planning and building to testing and deployment. My work
                helps teams automate tasks, improve efficiency, and reduce
                manual effort.
              </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
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
                <li>Hybrid Work Environment</li>
                <li>Toronto Office</li>
                <li>4 Months</li>
                <li>September - December 2025</li>
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
                <IconStack2 size={"0.8rem"} color={textColor} /> Tech Stack
              </h3>
              <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                <li>Python</li>
                <li>Power Automate</li>
                <li>Power BI</li>
                <li>Power Apps</li>
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
                <IconInfoCircle size={"0.8rem"} color={textColor} /> Highlights
              </h3>
              <p style={{ color: fadedText, fontSize: "0.8rem" }}>
                <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                <li>Automation Team Member of the Month - August 2025</li>
                <li style={{ color: 'white'}}>.</li>
                <li>1,596 hours saved through workflow automation</li>
              </ul>
                <br></br>
              </p>
            </div>
          </div>
                      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7315829870335336448?collapsed=1" height="600" width="100%" frameBorder="0" allowFullScreen={true} title="Embedded post"></iframe>

        </div>
      </main>
    </>
  );
}
