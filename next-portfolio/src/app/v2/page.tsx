    "use client";

    import { useState } from "react";
    import styles from "./page.module.css";

    export default function V2Page() {
    const [activeTab, setActiveTab] = useState("cool things i've built");

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
            small space on the internet where i write about myself, code, projects, and a lot of random other things.
            </p>

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
                        <div className={styles.secondaryText}>bluejay (yc x25)</div>
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
                <div className={styles.secondaryText}>fidelity investments</div>
                </div>
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
                <div className={styles.secondaryText}>fidelity investments</div>
                </div>
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
                <a href="#" className={styles.readMore}>[→]</a>
            </li>
            </ul>

            <div className={styles.divider}></div>

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
                <ul className={styles.list} style={{ marginTop: "1.5rem" }}>
                <li className={styles.listItem}>
                    <div className={styles.icon}>
                    <img 
                        src="/v2/v2_fidelity.png" 
                        alt="Project" 
                        className={styles.iconImage}
                    />
                    </div>
                    <div className={styles.listItemText}>
                    <div className={styles.primaryText}>project name</div>
                    <div className={styles.secondaryText}>project description</div>
                    </div>
                    <a href="#" className={styles.readMore}>[→]</a>
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

        </main>
        </div>
    );
    }

