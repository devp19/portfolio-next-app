"use client";

import Image from "next/image";
import { IconCalendar, IconStack2, IconInfoCircle } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiaGithub } from "react-icons/lia";
import { FaLink, FaLinkedin } from "react-icons/fa6";

export default function HotSpotsAIPage() {
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
      router.push("/innovation");
    }, 200);
  };

  const smoothScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const textColor = lightMode ? "#111" : "#111";
  const fadedText = lightMode ? "#444" : "#444";
  const fadedLabel = lightMode ? "#666" : "#666";
  const bgColor = lightMode ? "#ffffff" : "#ffffff";

  if (isMobile) {
    return (
      <main
        className={`min-h-screen px-4 py-8 font-sans transition-all duration-700 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{ background: bgColor, color: textColor }}
      >
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer"
            style={{ color: fadedText }}
            onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
          >
            ← Back
            <span className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </button>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <p style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                ML Project
              </p>
              <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <span>HotSpots AI</span>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href="https://hotspots-ai.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="HotSpots AI Website">
                    <FaLink size={16} color={textColor} />
                  </a>
                  <a href="https://github.com/devp19/HotSpots-AI" target="_blank" rel="noopener noreferrer" aria-label="HotSpots AI GitHub">
                    <LiaGithub size={20} color={textColor} />
                  </a>
                  <a href="https://www.linkedin.com/posts/devp19_the-recent-heat-across-the-city-of-toronto-activity-7345587728895328257-vc3u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" aria-label="ResDex LinkedIn">
                    <FaLinkedin size={17} color={textColor} />
                  </a>
                </div>
              </h1>
              <p style={{ fontSize: "0.85rem", color: fadedText, lineHeight: "1.5" }}>
                Mapping heat, growing green. HotSpots AI explores urban heat vulnerability and tree planting priorities in Toronto using machine learning, satellite data, and 3D visualization for sustainable urban development.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-2" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconCalendar size={16} color={textColor} /> Details
                </h3>
                <p style={{ color: fadedText, fontSize: "0.8rem" }}>ML Research Project</p>
                <p style={{ color: fadedText, fontSize: "0.8rem" }}>June 2025</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-3" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconStack2 size={16} color={textColor} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Random Forest", "Google Earth Engine", "Gemini 2.5 Flash", "Next.js", "Three.js"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white rounded text-xs border" style={{ color: fadedText, borderColor: "#e5e7eb" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4" style={{ backgroundColor: lightMode ? "#f9fafb" : "#f9fafb" }}>
                <h3 className="inline-flex items-center gap-2 font-medium mb-3" style={{ color: fadedLabel, fontSize: "0.8rem" }}>
                  <IconInfoCircle size={16} color={textColor} /> Table of Contents
                </h3>
                <div className="space-y-2">
                  {[
                    { id: "introduction", title: "Introduction" },
                    { id: "problem-statement", title: "The Urban Heat Crisis" },
                    { id: "ml-approach", title: "Machine Learning Approach" },
                    { id: "data-visualization", title: "3D Data Visualization" },
                    { id: "future-plans", title: "Future Development" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => smoothScrollToSection(item.id)}
                      className="block py-1 text-left w-full"
                      style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer" }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div style={{ background: "#fff", borderRadius: "0.75rem", overflow: "hidden" }}>
              <Image src="/hotspots-cover.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl" priority />
            </div>

            <div className="border-t border-gray-200" style={{ maxWidth: "100%", marginBottom: "1rem", marginTop: '50px' }}></div>

            <article className="space-y-6">
              <section id="introduction">
                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>Mapping Heat, Growing Green</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  HotSpots AI addresses the critical issue of urban heat vulnerability by leveraging machine learning and satellite data to identify areas most susceptible to extreme heat. With 489,000 heat-related deaths occurring annually and rising due to climate change, our platform provides actionable insights for sustainable urban planning.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  By combining Land Surface Temperature (LST), Normalized Difference Vegetation Index (NDVI), and building density data, HotSpots AI creates comprehensive heat vulnerability maps that guide strategic tree planting initiatives and urban development decisions in Toronto.
                </p>
              </section>

              <section id="problem-statement">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>The Urban Heat Crisis</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Heat-related deaths are trending upward to 489,000 by 2025, driven by climate change, urban heat islands, and vulnerable populations lacking access to cooling or green space. Traditional approaches to urban planning often overlook the complex relationship between vegetation, building density, and temperature distribution.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Urban heat islands create dangerous microclimates where temperatures can be significantly higher than surrounding areas. These effects disproportionately impact marginalized communities who often live in areas with less green space and more concrete infrastructure.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  HotSpots AI addresses this challenge by providing data-driven insights that enable proactive intervention, identifying priority areas for tree planting and urban cooling strategies before they become critical health hazards.
                </p>
              </section>

              <section id="ml-approach">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Machine Learning Approach</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Our Random Forest model processes three key environmental factors: Land Surface Temperature (LST), Normalized Difference Vegetation Index (NDVI), and building footprint density. Google Earth Engine provides the satellite data infrastructure, while Gemini 2.5 Flash fine-tunes our model weights for optimal accuracy.
                </p>
                                                      <Image src="/hotspots-flow.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl mt-10 mb-10" priority />

                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  The model uses carefully tuned weights (60% temperature, 20% vegetation, 20% buildings) to generate heat vulnerability scores. We then rasterize both building and tree density into uniform 100m grid cells across Toronto, creating a comprehensive feature matrix that captures the complex spatial relationships affecting urban heat.
                </p>
                                                                      <Image src="/hotspots-raster.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl mt-10 mb-10" priority />
                                                                      <Image src="/hotspots-ml.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl mt-10 mb-10" priority />

                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Through feature extraction and advanced ML techniques, our system identifies patterns that human planners might miss, providing unprecedented accuracy in predicting heat vulnerability across diverse urban environments.
                </p>
              </section>

              <section id="data-visualization">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>3D Data Visualization</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Our interactive 3D city visualization brings heat vulnerability data to life, making complex environmental data accessible to urban planners, policymakers, and community stakeholders. The visualization layer combines multiple data rasters into an intuitive, explorable interface.
                </p>
                                                                                                          <Image src="/hotspots-3d.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl mt-10 mb-10" priority />

                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Users can explore tree density, building density, and temperature patterns across Toronto in real-time, with color-coded heat maps that clearly highlight areas requiring intervention. The 3D perspective provides crucial context that traditional 2D maps cannot convey.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  This visualization framework transforms raw satellite data into actionable insights, enabling stakeholders to make informed decisions about urban development, green infrastructure investment, and climate adaptation strategies.
                </p>
              </section>

              <section id="future-plans">
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Future Development</h2>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Future enhancements include expanding coverage beyond Toronto to other major Canadian cities, incorporating real-time weather data for dynamic vulnerability assessment, and developing predictive models for climate change scenarios over the next decade.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  We're exploring integration with municipal planning systems, automated alert systems for extreme heat events, and AI-powered recommendations for optimal tree species selection based on local environmental conditions and climate projections.
                </p>
                <p style={{ color: fadedText, fontSize: "0.9rem", lineHeight: "1.6", marginTop: "1rem" }}>
                  Long-term goals include developing mobile applications for community engagement, partnering with environmental organizations for tree planting initiatives, and creating open-source tools that other cities can adapt for their own heat vulnerability assessments.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
    );
  }

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
      `}</style>
      <div
        className={`h-screen flex flex-col font-sans transition-all duration-700 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{ background: bgColor, color: textColor }}
      >
        <div className="flex-shrink-0 px-6 py-6">
          <div className="mx-auto max-w-6xl">
            <button
              onClick={handleBack}
              className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer ml-6 mt-10"
              style={{ color: fadedText }}
              onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
              onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
            >
              ← Back
              <span className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-6 flex gap-10">
            <div className="w-[400px] flex-shrink-0 overflow-y-auto pr-4 custom-scrollbar">
              <div className="space-y-6">
                <div>
                  <p style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                    ML Project
                  </p>

                  <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    HotSpots AI
                    <a href="https://hotspots-ai.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="HotSpots AI Website" style={{ paddingLeft: "1rem" }}>
                      <FaLink size={15} color={textColor} />
                    </a>
                    <a href="https://github.com/devp19/HotSpots-AI" target="_blank" rel="noopener noreferrer" aria-label="HotSpots AI GitHub">
                      <LiaGithub size={20} color={textColor} />
                    </a>
                    <a href="https://www.linkedin.com/posts/devp19_the-recent-heat-across-the-city-of-toronto-activity-7345587728895328257-vc3u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" aria-label="ResDex LinkedIn">
                    <FaLinkedin size={17} color={textColor} />
                  </a>
                  </h1>

                  <p style={{ fontSize: "0.8rem", color: fadedText, width: "80%" }}>
                    Mapping heat, growing green. HotSpots AI explores urban heat vulnerability and tree planting priorities in Toronto using machine learning, satellite data, and 3D visualization for sustainable urban development.
                  </p>
                  <div className="flex items-center gap-2 ml-1 mt-4">
                    <div className="relative">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                    </div>
                    <span style={{fontSize: "0.8rem", color: fadedText}}>Completed</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="border-t border-gray-200" style={{ maxWidth: "80%", marginBottom: "1rem" }}></div>

                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconInfoCircle size={"0.8rem"} color={textColor} /> Table of Contents
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li><button onClick={() => smoothScrollToSection('introduction')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Introduction</button></li>
                      <li><button onClick={() => smoothScrollToSection('problem-statement')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>The Urban Heat Crisis</button></li>
                      <li><button onClick={() => smoothScrollToSection('ml-approach')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Machine Learning Approach</button></li>
                      <li><button onClick={() => smoothScrollToSection('data-visualization')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>3D Data Visualization</button></li>
                      <li><button onClick={() => smoothScrollToSection('future-plans')} style={{ color: fadedText, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>Future Development</button></li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200" style={{ maxWidth: "80%", marginBottom: "1rem" }}></div>

                  <div>
                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconCalendar size={"0.8rem"} color={textColor} /> Details
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li>ML Research Project</li>
                      <li>June 2025</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200" style={{ maxWidth: "80%" }}></div>

                  <div>
                    <h3 className="inline-flex items-center gap-2" style={{ color: fadedLabel, fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                      <IconStack2 size={"0.8rem"} color={textColor} /> Tech Stack
                    </h3>
                    <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                      <li>Python</li>
                      <li>Random Forest</li>
                      <li>Google Earth Engine</li>
                      <li>Gemini 2.5 Flash</li>
                      <li>Next.js</li>
                      <li>Three.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-12 pr-4 custom-scrollbar">
              <div className="space-y-5 pr-4">
                <div style={{ background: "#fff", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <Image src="/hotspots-cover.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl" priority />
                </div>

                <div className="border-t border-gray-200" style={{ maxWidth: "100%", marginBottom: "1rem", marginTop: '50px' }}></div>

                <article className="prose prose-invert max-w-none">
                  <section id="introduction">
                    <h2 style={{ fontSize: "1.5rem" }}>Mapping Heat, Growing Green</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      HotSpots AI addresses the critical issue of urban heat vulnerability by leveraging machine learning and satellite data to identify areas most susceptible to extreme heat. With 489,000 heat-related deaths occurring annually and rising due to climate change, our platform provides actionable insights for sustainable urban planning. By combining Land Surface Temperature (LST), Normalized Difference Vegetation Index (NDVI), and building density data, HotSpots AI creates comprehensive heat vulnerability maps that guide strategic tree planting initiatives and urban development decisions in Toronto, transforming how cities approach climate resilience and public health protection.
                    </p>
                  </section>

                  <section id="problem-statement">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>The Urban Heat Crisis</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Heat-related deaths are trending upward to 489,000 by 2025, driven by climate change, urban heat islands, and vulnerable populations lacking access to cooling or green space. Traditional approaches to urban planning often overlook the complex relationship between vegetation, building density, and temperature distribution. Urban heat islands create dangerous microclimates where temperatures can be significantly higher than surrounding areas, disproportionately impacting marginalized communities.
                      <br /><br />
                      We wanted a data-driven approach that could identify these critical areas before they become health hazards. HotSpots AI is our answer: a machine learning platform that puts environmental justice and proactive urban planning first; created to solve the very climate adaptation challenges cities face today.
                    </p>
                  </section>

                  <section id="ml-approach">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Machine Learning Approach</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Our Random Forest model processes three key environmental factors: Land Surface Temperature (LST), Normalized Difference Vegetation Index (NDVI), and building footprint density. Google Earth Engine provides the satellite data infrastructure, while Gemini 2.5 Flash fine-tunes our model weights for optimal accuracy. The model uses carefully tuned weights (60% temperature, 20% vegetation, 20% buildings) to generate heat vulnerability scores.
                    </p>
                                      <Image src="/hotspots-flow.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl mt-10 mb-10" priority />

                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      We then rasterize both building and tree density into uniform 100m grid cells across Toronto, creating a comprehensive feature matrix that captures complex spatial relationships. Through advanced ML techniques, our system identifies patterns that traditional planning might miss, providing unprecedented accuracy in predicting heat vulnerability across diverse urban environments.
                    </p>
                                                                          <Image src="/hotspots-raster.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl mt-10 mb-10" priority />
                                                                      <Image src="/hotspots-ml.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl mt-10 mb-10" priority />

                  </section>

                  <section id="data-visualization">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>3D Data Visualization</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Our interactive 3D city visualization brings heat vulnerability data to life, making complex environmental data accessible to urban planners, policymakers, and community stakeholders. Users can explore tree density, building density, and temperature patterns across Toronto in real-time, with color-coded heat maps that clearly highlight areas requiring intervention.
                    </p>
                                                                                          <Image src="/hotspots-3d.png" alt="HotSpots AI 3D Visualization" width={1200} height={800} className="w-full object-cover rounded-xl mt-10 mb-10" priority />

                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      The 3D perspective provides crucial context that traditional 2D maps cannot convey, transforming raw satellite data into actionable insights that enable informed decisions about urban development, green infrastructure investment, and climate adaptation strategies.
                    </p>
                  </section>

                  <section id="future-plans">
                    <h2 style={{ fontSize: "1.2rem", marginTop: "2rem" }}>Future Development</h2>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "0.5rem" }}>
                      Future enhancements include expanding coverage beyond Toronto to other major Canadian cities, incorporating real-time weather data for dynamic vulnerability assessment, and developing predictive models for climate change scenarios over the next decade. We're exploring integration with municipal planning systems and automated alert systems for extreme heat events.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Long-term goals include developing mobile applications for community engagement, partnering with environmental organizations for tree planting initiatives, and creating open-source tools that other cities can adapt for their own heat vulnerability assessments.
                    </p>
                    <p style={{ color: fadedText, fontSize: "0.8rem", marginTop: "1rem" }}>
                      Additional planned features include AI-powered recommendations for optimal tree species selection, integration with urban planning workflows, and real-time environmental monitoring capabilities that make climate adaptation more responsive and effective.
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}