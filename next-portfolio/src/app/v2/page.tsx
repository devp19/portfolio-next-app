    import styles from "./page.module.css";

    export default function V2Page() {
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

            <div className={styles.sectionLabels}>
                <p style={{ color: "#c6cdce", fontSize: "0.8rem", margin: 0, fontStyle: "italic" }}>
                currently
                </p>
                <p style={{ color: "#c6cdce", fontSize: "0.8rem", margin: 0, fontStyle: "italic" }}>
                studying
                </p>
            </div>

            <ul className={styles.listTwoColumn}>
            <li className={styles.listItem}>
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
            </li>
            <li className={styles.listItem}>
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
            </li>
            </ul>
            

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

        </main>
        </div>
    );
    }

