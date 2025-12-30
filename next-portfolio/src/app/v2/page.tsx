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

            

            {!loadingContrib && contributions.length > 0 && (
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
                <ul className={styles.listGrid} style={{ marginTop: "1.5rem" }}>
                <li className={styles.projectCard}>
                    <Link href="/v2/mesh" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
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
                    <Link href="/v2/tunnel" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
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
                <li className={styles.projectCard}>
                    <Link href="/v2/cua" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                        <div className={styles.coverImage}>
                        <img 
                            src="/v2/cua_v2.png" 
                            alt="CUA" 
                            className={styles.coverImg}
                        />
                        </div>
                        <div className={styles.projectContent}>
                            <div className={styles.projectTitle}>cua (yc x25)</div>
                            <div className={styles.projectDescription}>android docker provider for computer use agents</div>
                            <span className={styles.projectLink}>[read more]</span>
                        </div>
                    </Link>
                </li>
                <li className={styles.projectCard}>
                    <Link href="/v2/hotspots" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                        <div className={styles.coverImage}>
                        <img 
                            src="/v2/hotspots_v2.png" 
                            alt="hotspots" 
                            className={styles.coverImg}
                        />
                        </div>
                        <div className={styles.projectContent}>
                            <div className={styles.projectTitle}>hotspots</div>
                            <div className={styles.projectDescription}>machine learning data visualization for urban heat vulnerability</div>
                            <span className={styles.projectLink}>[read more]</span>
                        </div>
                    </Link>
                </li>
                </ul>
            )}

            {activeTab === "writeups" && (
                <ul className={styles.list} style={{ marginTop: "1.5rem" }}>
                <li className={styles.listItem}>
                    <div className={styles.icon}>
                    <img 
                        src="/v2/v2_fidelity.png" 
                        alt="Writeup" 
                        className={styles.iconImage}
                    />
                    </div>
                    <div className={styles.listItemText}>
                    <div className={styles.primaryText}>writeup title</div>
                    <div className={styles.secondaryText}>writeup description</div>
                    </div>
                    <a href="#" className={styles.readMore}>[→]</a>
                </li>
                </ul>
            )}

            {activeTab === "blogs" && (
                <ul className={styles.list} style={{ marginTop: "1.5rem" }}>
                <li className={styles.listItem}>
                    <div className={styles.icon}>
                    <img 
                        src="/v2/v2_fidelity.png" 
                        alt="Blog" 
                        className={styles.iconImage}
                    />
                    </div>
                    <div className={styles.listItemText}>
                    <div className={styles.primaryText}>blog title</div>
                    <div className={styles.secondaryText}>blog description</div>
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
                <span className={styles.footerDate}>last updated: 12/28/2025</span>
            </div>

        </main>
        </div>
    );
    }

