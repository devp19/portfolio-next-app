    "use client";

    import { useState, useEffect } from "react";
    import Link from "next/link";
    import styles from "./page.module.css";
    import {
      ContributionGraph,
      ContributionGraphBlock,
      ContributionGraphCalendar,
      ContributionGraphFooter,
    } from '@/components/ui/kibo-ui/contribution-graph';
    import {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger,
    } from '@/components/ui/tooltip';
    import { Skeleton } from '@/components/ui/skeleton';
    import { getCachedContributions } from "@/lib/github-contributions";

    export type Activity = {
      date: string;
      count: number;
      level: number;
    };

    export default function V2Page() {
    const [activeTab, setActiveTab] = useState("cool things i've built");
    const [contributions, setContributions] = useState<Activity[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [loadingContrib, setLoadingContrib] = useState(true);
    const [viewerCount, setViewerCount] = useState<string>("");

    useEffect(() => {
      const load = async () => {
        try {
          const { contributions, total } = await getCachedContributions();
          setContributions(contributions);
          setTotal(total);
        } finally {
          setLoadingContrib(false);
        }
      };
      load();
    }, []);

    useEffect(() => {
      const handleViewCount = async () => {
        try {
          // Increment the view count
          const incrementResponse = await fetch('/api/increment-views', {
            method: 'POST',
          });
          const incrementData = await incrementResponse.json();
          
          if (incrementData.count) {
            // Format the number with commas
            const formatted = incrementData.count.toLocaleString();
            setViewerCount(formatted);
          }
        } catch (error) {
          console.error('Failed to handle view count:', error);
          // Fallback: try to just get the count
          try {
            const response = await fetch('/api/get-views');
            const data = await response.json();
            if (data.count) {
              const formatted = data.count.toLocaleString();
              setViewerCount(formatted);
            }
          } catch (e) {
            console.error('Failed to fetch view count:', e);
          }
        }
      };
      handleViewCount();
    }, []);

    return (
        <div className={styles.container}>
        <main className={styles.mainContent}>
            <div className={styles.header}>
                <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>dev patel</h1>
                <div className={styles.socialLinks}>
                    <a href="https://github.com/devp19" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
                    <a href="https://linkedin.com/in/devp19" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
                    <a href="https://x.com/_devp" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[x]</a>
                </div>
            </div>
            <p style={{ color: "#656765", fontSize: "0.8rem"}}>
            swe @ <span className={styles.highlightedText}>bluejay (yc x25)</span>, prev ai @ <span className={styles.highlightedText}>fidelity</span>, cs @ <span className={styles.highlightedText}>tmu</span>
            </p>
            <p style={{ color: "#656765", fontSize: "0.8rem"}}>
            welcome to my small space on the internet where i write about myself, code, projects, and a lot of random other things.
            </p>
            <p style={{ color: "#656765", fontSize: "0.8rem"}}>
            exploring san francisco for the time being...
            </p>

            

            {loadingContrib ? (
                <>
                    <p style={{ color: "#c6cdce", fontSize: "0.8rem", marginTop: "1.5rem", fontStyle: "italic" }}>
                    
                    </p>
                    <div style={{ marginTop: "0.5rem" }}>
                        <Skeleton 
                            style={{ 
                                width: "100%", 
                                height: "120px", 
                                backgroundColor: "#2a2a2a",
                                borderRadius: "0"
                            }} 
                        />
                    </div>
            <div className={styles.divider}></div>
                </>
            ) : contributions.length > 0 && (
                <>
                    <p style={{ color: "#c6cdce", fontSize: "0.8rem", marginTop: "1.5rem", fontStyle: "italic" }}>
                    
                    </p>
                    <style>{`
                        .contribution-scrollable div[class*="overflow-x-auto"] {
                            scrollbar-width: thin !important;
                            scrollbar-color: #656765 #1a1a1a !important;
                        }
                        .contribution-scrollable div[class*="overflow-x-auto"]::-webkit-scrollbar {
                            height: 4px !important;
                            display: block !important;
                        }
                        .contribution-scrollable div[class*="overflow-x-auto"]::-webkit-scrollbar-track {
                            background: #1a1a1a !important;
                            border-radius: 2px;
                        }
                        .contribution-scrollable div[class*="overflow-x-auto"]::-webkit-scrollbar-thumb {
                            background: #656765 !important;
                            border-radius: 2px;
                        }
                        .contribution-scrollable div[class*="overflow-x-auto"]::-webkit-scrollbar-thumb:hover {
                            background: #7a7d7d !important;
                        }
                    `}</style>
                    <div className={`${styles.contributionWrapper} contribution-scrollable`} style={{ marginTop: "0.5rem" }}>
                        <TooltipProvider>
                            <ContributionGraph data={contributions} totalCount={total} style={{ marginTop: '1rem' }} blockRadius={0}>
                                <ContributionGraphCalendar>
                                {({ activity, dayIndex, weekIndex }) => (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <g>
                                                <ContributionGraphBlock
                                                    activity={activity}
                                                    className={styles.contributionBlock}
                                                    dayIndex={dayIndex}
                                                    weekIndex={weekIndex}
                                                />
                                            </g>
                                        </TooltipTrigger>
                                        <TooltipContent className={styles.tooltipContent}>
                                            <p className={styles.tooltipText}>{activity.date}</p>
                                            <p className={styles.tooltipText}>{activity.count} contributions</p>
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                            </ContributionGraphCalendar>
                            <ContributionGraphFooter />
                        </ContributionGraph>
                        <div className={styles.contributionFooter}>
                            {total} contributions in {new Date().getFullYear()}
                        </div>
                    </TooltipProvider>
                    </div>
                    <div className={styles.divider}></div>
                </>
            )}

<div className={styles.tabs}>
                <button 
                    className={styles.tab}
                    onClick={() => setActiveTab("cool things i've built")}
                    data-active={activeTab === "cool things i've built"}
                >
                    <span className={styles.tabBracket}>[</span>
                    <span className={styles.tabText}>cool things i've built</span>
                    <span className={styles.tabBracket}>]</span>
                </button>
                <span className={styles.tabSeparator}>/</span>
                <button 
                    className={styles.tab}
                    onClick={() => setActiveTab("writeups")}
                    data-active={activeTab === "writeups"}
                >
                    <span className={styles.tabBracket}>[</span>
                    <span className={styles.tabText}>writeups</span>
                    <span className={styles.tabBracket}>]</span>
                </button>
                <span className={styles.tabSeparator}>/</span>
                <button 
                    className={styles.tab}
                    onClick={() => setActiveTab("blogs")}
                    data-active={activeTab === "blogs"}
                >
                    <span className={styles.tabBracket}>[</span>
                    <span className={styles.tabText}>blogs</span>
                    <span className={styles.tabBracket}>]</span>
                </button>
            </div>
            {activeTab === "cool things i've built" && (
                <>
                <ul className={styles.listGrid} style={{ marginTop: "1.5rem" }}>
                <li className={styles.projectCard}>
                    <Link href="/mesh" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                        <div className={styles.coverImage}>
                        <img 
                            src="/v2/meshlarge.png" 
                            alt="Mesh" 
                            className={styles.coverImg}
                        />
                        </div>
                        <div className={styles.projectContent}>
                            <div className={styles.projectTitle}>mesh</div>
                            <div className={styles.projectDescription}>built the coordination layer for 3d geospatial data</div>
                            <span className={styles.projectLink}>[read more]</span>
                        </div>
                    </Link>
                </li>
                <li className={styles.projectCard}>
                    <Link href="/tunnel" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                        <div className={styles.coverImage}>
                        <img 
                            src="/v2/tunnel_v2.png" 
                            alt="Tunnel" 
                            className={styles.coverImg}
                        />
                        </div>
                        <div className={styles.projectContent}>
                            <div className={styles.projectTitle}>tunnel</div>
                            <div className={styles.projectDescription}>ai agents for accurate pmf (product market fit) simulations</div>
                            <span className={styles.projectLink}>[read more]</span>
                        </div>
                    </Link>
                </li>
                </ul>
                <ul className={styles.list} style={{ marginTop: "1.5rem" }}>
                <li className={styles.listItem}>
                    <Link href="/cua" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/cua_v2.png" 
                            alt="CUA" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>cua (yc x25)</div>
                        <div className={styles.secondaryText}>android docker provider for computer use agents</div>
                        </div>
                        <span className={styles.readMore}>[→]</span>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/hotspots" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/hotspots_v2.png" 
                            alt="hotspots" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>hotspots</div>
                        <div className={styles.secondaryText}>machine learning data visualization for urban heat vulnerability</div>
                        </div>
                        <span className={styles.readMore}>[→]</span>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/adrian.png" 
                            alt="Adrian" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>adrian</div>
                        <div className={styles.secondaryText}>voice-powered f1 race engineer with rag over fia regulations</div>
                        </div>
                        <span className={styles.readMore}>[→]</span>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/sample.png" 
                            alt="Lyra" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>lyra</div>
                        <div className={styles.secondaryText}>privacy-first, open-source cloud ide with ai and live code execution</div>
                        </div>
                        <span className={styles.readMore}>[→]</span>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/sample.png" 
                            alt="Percepta" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>percepta</div>
                        <div className={styles.secondaryText}>heat-map based identification for documents with keyword injection</div>
                        </div>
                        <span className={styles.readMore}>[→]</span>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/sample.png" 
                            alt="QonnectR" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>qonnectr</div>
                        <div className={styles.secondaryText}>platform for networking and project collaboration through qr code identification</div>
                        </div>
                        <span className={styles.readMore}>[→]</span>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/sample.png" 
                            alt="MyBuddy" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>mybuddy</div>
                        <div className={styles.secondaryText}>generative ai wellness assistant with nlp and real-time speech-to-text</div>
                        </div>
                        <span className={styles.readMore}>[→]</span>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "1rem" }}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/sample.png" 
                            alt="Citco" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>citco</div>
                        <div className={styles.secondaryText}>research analytics platform examining public funding and academic impact</div>
                        </div>
                        <span className={styles.readMore}>[→]</span>
                    </div>
                </li>
                </ul>
                </>
            )}

            {activeTab === "writeups" && (
                <ul className={styles.list} style={{ marginTop: "1.5rem" }}>
                <li className={styles.listItem}>
                    <div className={styles.icon}>
                    <svg 
                        width="40" 
                        height="40" 
                        viewBox="0 0 40 40" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <path 
                            d="M20 6C14 6 8 10 6 16C6 22 10 26 14 28C18 30 20 32 20 34C20 32 22 30 26 28C30 26 34 22 34 16C32 10 26 6 20 6Z" 
                            fill="#656765"
                            opacity="0.3"
                        />
                        <path 
                            d="M20 6C14 6 8 10 6 16C6 22 10 26 14 28C18 30 20 32 20 34C20 32 22 30 26 28C30 26 34 22 34 16C32 10 26 6 20 6Z" 
                            stroke="#656765"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path 
                            d="M20 6L20 34" 
                            stroke="#656765"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path 
                            d="M14 20L20 24L26 20" 
                            stroke="#656765"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    </div>
                    <div className={styles.listItemText}>
                    <div className={styles.primaryText}>coming soon</div>
                    <div className={styles.secondaryText}>coming soon</div>
                    </div>
                    <a href="#" className={styles.readMore}>[→]</a>
                </li>
                </ul>
            )}

            {activeTab === "blogs" && (
                <ul className={styles.list} style={{ marginTop: "1.5rem" }}>
                <li className={styles.listItem}>
                    <div className={styles.icon}>
                    <svg 
                        width="40" 
                        height="40" 
                        viewBox="0 0 40 40" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <rect 
                            x="10" 
                            y="8" 
                            width="20" 
                            height="24" 
                            rx="1" 
                            fill="#656765"
                            opacity="0.2"
                            stroke="#656765"
                            strokeWidth="1.5"
                        />
                        <line 
                            x1="14" 
                            y1="14" 
                            x2="26" 
                            y2="14" 
                            stroke="#656765"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <line 
                            x1="14" 
                            y1="18" 
                            x2="26" 
                            y2="18" 
                            stroke="#656765"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <line 
                            x1="14" 
                            y1="22" 
                            x2="22" 
                            y2="22" 
                            stroke="#656765"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path 
                            d="M10 12L14 8L18 12" 
                            stroke="#656765"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </svg>
                    </div>
                    <div className={styles.listItemText}>
                    <div className={styles.primaryText}>coming soon</div>
                    <div className={styles.secondaryText}>coming soon</div>
                    </div>
                    <a href="#" className={styles.readMore}>[→]</a>
                </li>
                </ul>
            )}

<div className={styles.divider}></div>


            <div className={styles.twoColumnSection}>
                <div className={styles.sectionWithLabel}>
                    <p style={{ color: "#c6cdce", fontSize: "0.8rem", margin: 0, marginBottom: "0.5rem", fontStyle: "italic" }}>
                    currently
                    </p>
                    <div className={styles.listItem}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/v2_bluejay.jpeg" 
                            alt="Bluejay" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>software engineer</div>
                        <div className={styles.secondaryText}>bluejay (yc x25) / internship</div>
                        </div>
                        <a href="#" className={styles.readMore}>[→]</a>
                    </div>
                </div>
                <div className={styles.sectionWithLabel}>
                    <p style={{ color: "#c6cdce", fontSize: "0.8rem", margin: 0, marginBottom: "0.5rem", fontStyle: "italic" }}>
                    studying
                    </p>
                    <div className={styles.listItem}>
                        <div className={styles.icon}>
                        <img 
                            src="/v2/v2_tmu.jpg" 
                            alt="Toronto Metropolitan University" 
                            className={styles.iconImage}
                        />
                        </div>
                        <div className={styles.listItemText}>
                        <div className={styles.primaryText}>computer science '27</div>
                        <div className={styles.secondaryText}>toronto metropolitan university</div>
                        </div>
                        <a href="#" className={styles.readMore}>[→]</a>
                    </div>
                </div>
            </div>
            

            <p style={{ color: "#c6cdce", fontSize: "0.8rem", marginTop: "1.5rem", fontStyle: "italic" }}>
            previously
            </p>

            <ul className={styles.list}>
            <li className={styles.listItem}>
                <div className={styles.icon}>
                <img 
                    src="/v2/v2_fidelity.png" 
                    alt="Fidelity Investments" 
                    className={styles.iconImage}
                />
                </div>
                <div className={styles.listItemText}>
                <div className={styles.primaryText}>ai developer</div>
                <div className={styles.secondaryText}>fidelity investments / internship</div>
                </div>
                <span className={styles.dateText}>sept - dec '25</span>
                <a href="#" className={styles.readMore}>[→]</a>
            </li>
            <li className={styles.listItem}>
                <div className={styles.icon}>
                <img 
                    src="/v2/v2_bluejay.jpeg" 
                    alt="Fidelity Investments" 
                    className={styles.iconImage}
                />
                </div>
                <div className={styles.listItemText}>
                <div className={styles.primaryText}>software engineer</div>
                <div className={styles.secondaryText}>bluejay (yc x25) / contract (part-time)</div>
                </div>
                <span className={styles.dateText}>oct - dec '25</span>
                <a href="#" className={styles.readMore}>[→]</a>
            </li>
            <li className={styles.listItem}>
                <div className={styles.icon}>
                <img 
                    src="/v2/v2_fidelity.png" 
                    alt="Fidelity Investments" 
                    className={styles.iconImage}
                />
                </div>
                <div className={styles.listItemText}>
                <div className={styles.primaryText}>software automation engineer</div>
                <div className={styles.secondaryText}>fidelity investments / internship</div>
                </div>
                <span className={styles.dateText}>may - aug '25</span>
                <a href="#" className={styles.readMore}>[→]</a>
            </li>
            <li className={styles.listItem}>
                <div className={styles.icon}>
                <img 
                    src="/v2/elections.jpeg" 
                    alt="Ontario Elections" 
                    className={styles.iconImage}
                />
                </div>
                <div className={styles.listItemText}>
                <div className={styles.primaryText}>technical support specialist</div>
                <div className={styles.secondaryText}>elections ontario / contract</div>
                </div>
                <span className={styles.dateText}>apr - may '25</span>
                <a href="#" className={styles.readMore}>[→]</a>
            </li>
            <li className={styles.listItem}>
                <div className={styles.icon}>
                <img 
                    src="/v2/v2_resdex.jpeg" 
                    alt="ResDex" 
                    className={styles.iconImage}
                />
                </div>
                <div className={styles.listItemText}>
                <div className={styles.primaryText}>co-founder & founding engineer</div>
                <div className={styles.secondaryText}>resdex</div>
                </div>
                <span className={styles.dateText}>aug '24 - may '25</span>
                <a href="#" className={styles.readMore}>[→]</a>
            </li>
            </ul>

            <div className={styles.divider}></div>

            <div className={styles.footer}>
                <span className={styles.viewerCount}>
                    {viewerCount ? `${viewerCount} views` : ''}
                </span>
                <span className={styles.footerDate}>
                    <span className={styles.pulsingDot}></span>
                    last updated: 12/31/2025
                </span>
            </div>

        </main>
        </div>
    );
    }

