"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function HotspotsPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <button
          onClick={() => router.back()}
          style={{
            color: "#656765",
            fontSize: "0.8rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem 0.5rem",
            marginBottom: "1.5rem",
            textDecoration: "none",
            transition: "all 0.2s ease",
            borderRadius: "2px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#c6cdce";
            e.currentTarget.style.backgroundColor = "#404140";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#656765";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          ← back
        </button>
        <p style={{ color: "#656765", fontSize: "0.6rem", margin: 0, marginBottom: "0.5rem" }}>
          june 29th, 2025
        </p>
        <header style={{ marginBottom: "2rem" }}>
          <div className={styles.header}>
            <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>hotspots</h1>
            <div className={styles.socialLinks}>
              <a href="https://hotspots-ai.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[website]</a>
              <a href="https://www.linkedin.com/posts/devp19_the-recent-heat-across-the-city-of-toronto-activity-7345587728895328257-vc3u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
              <a href="https://github.com/devp19/HotSpots-AI" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
            </div>
          </div>
          <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
            machine learning data visualization for urban heat vulnerability
          </p>
        </header>

        <div className={styles.divider}></div>

        <article style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <img 
              src="/hotspots-cover.png" 
              alt="HotSpots AI" 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          </div>

          <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <section id="introduction">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                mapping heat, growing green
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                HotSpots AI addresses the critical issue of urban heat vulnerability by leveraging machine learning and satellite data to identify areas most susceptible to extreme heat. With 489,000 heat-related deaths occurring annually and rising due to climate change, our platform provides actionable insights for sustainable urban planning.
              </p>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                By combining Land Surface Temperature (LST), Normalized Difference Vegetation Index (NDVI), and building density data, HotSpots AI creates comprehensive heat vulnerability maps that guide strategic tree planting initiatives and urban development decisions in Toronto, transforming how cities approach climate resilience and public health protection.
              </p>
            </section>

            <section id="problem-statement">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                the urban heat crisis
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                Heat-related deaths are trending upward to 489,000 by 2025, driven by climate change, urban heat islands, and vulnerable populations lacking access to cooling or green space. Traditional approaches to urban planning often overlook the complex relationship between vegetation, building density, and temperature distribution.
              </p>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                Urban heat islands create dangerous microclimates where temperatures can be significantly higher than surrounding areas. These effects disproportionately impact marginalized communities who often live in areas with less green space and more concrete infrastructure.
              </p>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                We wanted a data-driven approach that could identify these critical areas before they become health hazards. HotSpots AI is our answer: a machine learning platform that puts environmental justice and proactive urban planning first; created to solve the very climate adaptation challenges cities face today.
              </p>
            </section>

            <section id="ml-approach">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                machine learning approach
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                Our Random Forest model processes three key environmental factors: Land Surface Temperature (LST), Normalized Difference Vegetation Index (NDVI), and building footprint density. Google Earth Engine provides the satellite data infrastructure, while Gemini 2.5 Flash fine-tunes our model weights for optimal accuracy.
              </p>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                The model uses carefully tuned weights (60% temperature, 20% vegetation, 20% buildings) to generate heat vulnerability scores. We then rasterize both building and tree density into uniform 100m grid cells across Toronto, creating a comprehensive feature matrix that captures the complex spatial relationships affecting urban heat.
              </p>

              <div style={{ marginBottom: "1rem" }}>
                <img 
                  src="/hotspots-flow.png" 
                  alt="HotSpots AI Flow" 
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <img 
                  src="/hotspots-raster.png" 
                  alt="HotSpots AI Raster" 
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <img 
                  src="/hotspots-ml.png" 
                  alt="HotSpots AI ML" 
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              </div>

              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                Through feature extraction and advanced ML techniques, our system identifies patterns that human planners might miss, providing unprecedented accuracy in predicting heat vulnerability across diverse urban environments.
              </p>
            </section>

            <section id="data-visualization">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                3d data visualization
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                Our interactive 3D city visualization brings heat vulnerability data to life, making complex environmental data accessible to urban planners, policymakers, and community stakeholders. The visualization layer combines multiple data rasters into an intuitive, explorable interface.
              </p>

              <div style={{ marginBottom: "1rem" }}>
                <img 
                  src="/hotspots-3d.png" 
                  alt="HotSpots AI 3D Visualization" 
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                />
              </div>

              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                Users can explore tree density, building density, and temperature patterns across Toronto in real-time, with color-coded heat maps that clearly highlight areas requiring intervention. The 3D perspective provides crucial context that traditional 2D maps cannot convey.
              </p>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                This visualization framework transforms raw satellite data into actionable insights, enabling stakeholders to make informed decisions about urban development, green infrastructure investment, and climate adaptation strategies.
              </p>
            </section>

            <section id="future-plans">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                future development
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                Future enhancements include expanding coverage beyond Toronto to other major Canadian cities, incorporating real-time weather data for dynamic vulnerability assessment, and developing predictive models for climate change scenarios over the next decade.
              </p>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                We're exploring integration with municipal planning systems, automated alert systems for extreme heat events, and AI-powered recommendations for optimal tree species selection based on local environmental conditions and climate projections.
              </p>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                Long-term goals include developing mobile applications for community engagement, partnering with environmental organizations for tree planting initiatives, and creating open-source tools that other cities can adapt for their own heat vulnerability assessments.
              </p>
            </section>
          </div>
        </article>

        <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
      </main>
    </div>
  );
}
