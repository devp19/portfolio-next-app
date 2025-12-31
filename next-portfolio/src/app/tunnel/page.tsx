"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";
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
  `,
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
  `,
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
  `,
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
  `,
  }
];

export default function TunnelPage() {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        /* Dark theme code blocks for v2 */
        .v2-dark-code pre,
        .v2-dark-code code,
        .v2-dark-code [data-rehype-pretty-code-fragment],
        .v2-dark-code [data-language],
        .v2-dark-code [data-theme] {
          background: #1a1a1a !important;
          color: #c6cdce !important;
          border: 1px solid #404140 !important;
        }
        
        .v2-dark-code [data-line] {
          background: transparent !important;
        }
        
        .v2-dark-code [data-line-numbers] {
          color: #656765 !important;
        }
        
        .v2-dark-code .line {
          color: #c6cdce !important;
        }
      `}</style>
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
            september 15th, 2025 · 18min read
          </p>
          <header style={{ marginBottom: "2rem" }}>
            <div className={styles.header}>
              <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>tunnel</h1>
              <div className={styles.socialLinks}>
                <a href="https://tunnel-sigma-six.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[website]</a>
                <a href="https://www.linkedin.com/posts/devp19_everyones-talking-about-tunnel-and-thats-activity-7373715926178803712-4NAM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
                <a href="https://x.com/krishgarg/status/1967713537821675541?s=20" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[x]</a>
              </div>
            </div>
            <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
              ai agents for accurate pmf (product market fit) simulations
            </p>
          </header>

          <div className={styles.divider}></div>

          <article style={{ marginTop: "2rem" }}>
            <div style={{ marginBottom: "2rem" }}>
            <img 
              src="/v2/tunnel_v2.png" 
              alt="Tunnel" 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
            </div>

            <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
              <section id="introduction">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  introduction
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Have you ever spent months building something you believed in, only to launch and realize... no one actually wanted it? I've been there, and it's a brutal feeling. Turns out, we're not alone—most startups fail, and the number one reason is building something with no real market need.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  We looked at the usual ways to validate ideas; surveys, focus groups, user interviews...but they're slow, expensive, and often miss the mark. At <a href="https://hackthenorth.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#c6cdce", fontStyle: "italic" }}>HackTheNorth</a>, our team set out to find a better way. That's how Tunnel was created.
                </p>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  Tunnel is an AI-powered market simulation platform that lets you test product and feature ideas instantly directly with your userbase. You can interact with hundreds <span style={{ fontStyle: "italic" }}>(or even a thousand if you have a strong machine which I clearly don't...)</span> of realistic, personality-driven personas that represent your target market. Instead of guessing what people might think, you can see real-time reactions and insights, all before writing a single line of code.
                </p>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  It's fast, accessible, and built to help makers like us build smarter from day one.
                </p>
              </section>

              <section id="tech-stack-selection">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  building for scale and security
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  When we set out to build Tunnel, we wanted every piece of the architecture to feel seamless, responsive, and as dynamic as the market simulations themselves. On the frontend, we chose a modern stack, <span style={{ color: "#c6cdce" }}>Next.js</span>, <span style={{ color: "#c6cdce" }}>TypeScript</span>, <span style={{ color: "#c6cdce" }}>Tailwind</span>, and <span style={{ color: "#c6cdce" }}>Shadcn UI Primitives</span> <span style={{ fontStyle: "italic" }}>(my absolute favourite)</span>!
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Additionally, we created a real-time 3D globe <span style={{ fontStyle: "italic" }}>(which ended up being a fan favourite from all the feedback we got!)</span> powered by <span style={{ color: "#c6cdce" }}>Three.js</span> and <span style={{ color: "#c6cdce" }}>React Three Fiber</span>. All the UI logic lives alongside beautifully animated transitions, thanks to <span style={{ color: "#c6cdce" }}>Framer Motion</span>, while Tailwind CSS and Radix UI handle styling and accessibility for every component.
                </p>
                
                <div style={{ marginBottom: "1rem" }}>
                  <video
                    src="/loading.mov"
                    style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <p style={{ color: "#656765", fontSize: "0.8rem", fontStyle: "italic", textAlign: "center", marginTop: "0.5rem" }}>
                    Example: Loading screen built using Framer-motion
                  </p>
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  The heart of Tunnel is our custom API layer, built with <span style={{ color: "#c6cdce" }}>Next.js API routes</span>, that orchestrates persona generation, project analysis, voice session bridging, and session management. Intelligence flows from <span style={{ color: "#c6cdce" }}>Cohere's</span> suite of AI tools, which handles everything from <span style={{ color: "#c6cdce" }}>semantic understanding</span> and <span style={{ color: "#c6cdce" }}>ranking algorithms</span> to nuanced conversation generation.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  For voice, we use <span style={{ color: "#c6cdce" }}>Vapi</span> with an <span style={{ color: "#c6cdce" }}>MCP server</span> to provide instant, realistic phone-like interactions with each persona directly from the browser.
                </p>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  All user sessions are managed in <span style={{ color: "#c6cdce" }}>MongoDB Atlas</span>, which allows users to pick up on their iterations at anytime. We utilized <span style={{ color: "#c6cdce" }}>Auth0</span> for authentication and our <span style={{ color: "#c6cdce", fontStyle: "italic" }}>world's first</span> AI agent profiles which are created on run-time.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  This offers the flexibility to store evolving persona profiles [with nested demographic, psychographic, and behavioral data] plus full records of simulations, feedback, and voice transcripts. We use compound indexing and partitioning to make sure data retrieval stays fast, even when scaling to hundreds of concurrent users. Live updates come in via fast polling mechanisms and optimistic UI updates, so users never wait for feedback, and all session data auto-saves in the background using a debounce system to prevent data loss.
                </p>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  Everything runs on Vercel, which enables near-instant deployments and ensures that our app stays globally available and performant. The result is our full-fledged platform that combines next-gen AI, interactive graphics, and robust backend systems, all put together to deliver instant, actionable market insights.
                </p>
              </section>

              <section id="globe">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  the globe
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Thought I'd do a separate writeup on the globe itself, as a lot of people were curious about it! Building the interactive 3D globe for Tunnel was honestly one of my favorite parts of the project. I wanted users to instantly visualize how their product idea resonated with different personas around the world, so I designed the globe using <span style={{ color: "#c6cdce" }}>Three.js</span> and <span style={{ color: "#c6cdce" }}>React Three Fiber</span> for rendering and interactivity. Each persona is represented as a point on the globe, color-coded by their reaction—green for interested, yellow for neutral, red for not interested—so you can see global trends and outliers at a glance.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code} defaultValue={code[0].language}>
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
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <span style={{ color: "#c6cdce", fontWeight: 500 }}>Wireframe Sphere Creation</span>
                  <br />
                  A lot of people have also asked about how the outlines for the continents were rendered on the globe, so here's how it works. I found a very and I mean very large .json file which maps thousands of coordinates to create a polygonial shape of the continent. Refer below for a basic structure.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code2} defaultValue={code2[0].language}>
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
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Using this json file, I created a <span style={{ color: "#c6cdce" }}>loadGeoJsonData()</span> function which is basically responsible for loading up the continent borders in <span style={{ color: "#c6cdce" }}>GeoJSON format</span>. When the app starts or needs to render the globe, it calls this function, which reads the continents.json sitting on the server. If everything goes smoothly, it parses and returns the JSON data, which contains all the coordinates needed to draw those outlines on the 3D globe.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <span style={{ color: "#c6cdce", fontWeight: 500 }}>The next step, and probably the most complex part, is to map coordinates to actual vector coordinates</span> because the globe is round, not flat....
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  To do that, I used a simple conversion algorithm. The <span style={{ color: "#c6cdce" }}>latLonToVector3()</span> function converts a point on a sphere given by geographic coordinates (latitude, longitude, and radius) into a 3D Cartesian coordinate (x, y, z) as used in 3D engines like Three.js. Here's the breakdown:
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <span style={{ color: "#c6cdce", fontWeight: 500 }}>Input Parameters</span>
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>lat</code> = Latitude (in degrees), where 0 is the equator and ±90 are the poles.
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>lon</code> = Longitude (in degrees), where 0 is the Greenwich meridian, ±180 is the International Date Line.
                  <br />
                  <code style={{ color: "#c6cdce", background: "#404140", padding: "2px 6px", borderRadius: "4px" }}>radius</code> = The radius of the sphere (globe) on which the point lies.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <span style={{ color: "#c6cdce", fontWeight: 500 }}>Conversion Math</span>
                  <br />
                  <span style={{ color: "#c6cdce" }}>1. Convert latitude and longitude to radians:</span>
                  <br />
                  θ = (-lon + 180) × π/180 — Shifts latitude so that 0° is the North Pole and 180° is the South Pole, which matches the convention for spherical coordinates in 3D graphics.
                  <br />
                  φ = (90 - lat) × π/180 — Negates longitude to correct for inversion (Three.js uses a left-handed coordinate system), then shifts by 180° so that 0° is at the front.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <span style={{ color: "#c6cdce" }}>2. Calculate Cartesian Coordinates:</span>
                  <br />
                  x = radius × sin(φ) × cos(θ)
                  <br />
                  y = radius × cos(φ)
                  <br />
                  z = radius × sin(φ) × sin(θ)
                  <br />
                  This mapping aligns the poles and the equator correctly in a 3D scene.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  <span style={{ color: "#c6cdce" }}>3. Return Value:</span>
                  <br />
                  THREE.Vector3(x, y, z) — A new 3D Vector where x, y, and z are the Cartesian coordinates calculated above—this represents the position in 3D space for given (lat, lon) on a sphere.
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  <video
                    src="/globe-animation.mp4"
                    style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </section>

              <section id="runtime-agent">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  runtime agent
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  One of the other things I worked on was the runtime agent powering all the <span style={{ color: "#c6cdce" }}>AI personas</span> inside Tunnel, so I wanted to break down how it actually works behind the scenes. The runtime agent is basically the heart of our persona simulation—it's the thing that lets each persona have unique, consistent opinions, behaviors, and even voice conversations with users.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  Whenever you submit a product idea, the agent kicks into action by grabbing all the relevant persona profiles from our database (demographics, psychographics, past interactions, and more). It fetches related agent profiles by extracting a niche from the product idea and matching it with the personas' interests. For example, refer to how the Extraction identified a Financial Technology niche from the prompt.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code4} defaultValue={code4[0].language}>
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
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  From there, we filter through ALL the agents that are created using a quick search algorithm. This algorithm matches the niche with the agents' interests via <span style={{ color: "#c6cdce" }}>Cohere's ranker</span>. You can see a small snippet of an agent's persona below which we generate and store as metadata for each agent. We store these as 'users' in the <span style={{ color: "#c6cdce" }}>Auth0 user database</span>.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code3} defaultValue={code3[0].language}>
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
                </div>

                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  For every single simulation, it orchestrates multiple stages: first, it runs <span style={{ color: "#c6cdce" }}>Cohere's reranking</span> to figure out which personas actually care about this idea, then it generates tailored reactions using our AI pipelines. Each agent's response isn't generic—it's built from the persona's attributes, combined with pattern recognition and sentiment extraction, so every reply feels unique and grounded.
                </p>

                <div className="v2-dark-code" style={{ marginBottom: "1.5rem", borderRadius: "4px", overflow: "hidden" }}>
                  <CodeBlock className="border-none" data={code5} defaultValue={code5[0].language}>
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
                </div>

                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  But we didn't stop at just text. When you want to actually "call" a persona, the runtime agent passes all their context; personality, history, specific feedback—into <span style={{ color: "#c6cdce" }}>Vapi (AI Voice Agent)</span>, which then transforms that into a real-time, dynamic voice call right in the browser. All the state, conversation transcripts, and even evolving feedback are instantly synced, so the agent can remember what's happened before and respond accordingly in future sessions.
                </p>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  Everything the agent does happens in real-time, with results stored, tracked, and sent back to the user. This means you're never stuck waiting or wondering if the system is keeping up. The end result is that every simulated persona feels alive, coherent, and actually grows over time, making the whole market simulation so much more real and useful.
                </p>
              </section>

              <section id="experience">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  ending remarks
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  I walked into the hackathon with a brand new team (shoutout <a href="https://www.linkedin.com/in/krish-garg/" target="_blank" rel="noopener noreferrer" style={{ color: "#c6cdce" }}>@Krish Garg</a>, <a href="https://www.linkedin.com/in/suneruperera/" target="_blank" rel="noopener noreferrer" style={{ color: "#c6cdce" }}>@Suneru Perera</a> & <a href="https://www.linkedin.com/in/haresh-goyal/" target="_blank" rel="noopener noreferrer" style={{ color: "#c6cdce" }}>@Haresh Goyal</a>), completely different ambitions, a Google Doc full of big ideas, and absolutely no sleep in sight. Being only one of the few hackers from a "non-target" university, it was definitely a whole different atmosphere. The ideas, the skill-level and execution was all on another level. Our group wasn't shy about setting wild goals; actually, we were pretty loud about it. We wanted to win, yes, but more than that, we wanted to build something that felt genuinely new.
                </p>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  We ended up pouring everything into Tunnel, a platform that helps makers validate product ideas and features in seconds with AI-driven, real-market personas. And the loss of sleep? Totally worth it. When they announced us for both the <span style={{ color: "#c6cdce" }}>MLH Track</span> and <span style={{ color: "#c6cdce" }}>Best use of Vapi - AI Voice Agent</span> awards, we were stunned into silence (something that rarely happened over the weekend).
                </p>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                  The biggest plot twist? Out of the 100+ projects submitted towards the <span style={{ color: "#c6cdce" }}>Y Combinator</span> track, we were shortlisted as one of the <span style={{ color: "#c6cdce" }}>top 10</span> teams for an interview! We sat down with none other than <a href="https://www.ycombinator.com/people/nicolas-dessaigne" target="_blank" rel="noopener noreferrer" style={{ color: "#c6cdce" }}>Nicolas Dessaigne</a> and <a href="https://www.ycombinator.com/people/andrew-miklas" target="_blank" rel="noopener noreferrer" style={{ color: "#c6cdce" }}>Andrew Miklas</a> from <span style={{ color: "#c6cdce" }}>Y Combinator</span> to talk about the future of our project. Having YC interviewers poke holes in your pitch is nerve-wracking and surreal: one moment you're just a sleep-deprived student, the next you're tossing ideas around with people who've seen a thousand startups rise and fall. Winning big, meeting genuine legends, and realizing how much is possible when you just show up and start building—it made every hour totally, absolutely worth it.
                </p>
              </section>
            </div>
          </article>

          <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
        </main>
      </div>
    </>
  );
}
