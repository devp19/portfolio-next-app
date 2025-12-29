import styles from "./page.module.css";

export default function V2Page() {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>Dev Patel</h1>
        <p style={{ color: "#656765", fontSize: "0.7rem" }}>
          Software Engineer passionate about Distributed Systems, AI, and LLMs with a focus on building real-world solutions.
        </p>

        <p style={{ color: "#c6cdce", fontSize: "0.8rem", marginTop: "1rem", fontStyle: "italic" }}>
           currently
        </p>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.icon}>
              <img 
                src="/v2/v2_bluejay.jpeg" 
                alt="Bluejay" 
                className={styles.iconImage}
              />
            </div>
            <div className={styles.listItemText}>
              <div className={styles.primaryText}>Software Engineer</div>
              <div className={styles.secondaryText}>Bluejay (YC X25)</div>
            </div>
          </li>
        </ul>
        

        <p style={{ color: "#c6cdce", fontSize: "0.8rem", marginTop: "1rem", fontStyle: "italic" }}>
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
              <div className={styles.primaryText}>Artificial Intelligence Developer</div>
              <div className={styles.secondaryText}>Fidelity Investments (Canada)</div>
            </div>
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
              <div className={styles.primaryText}>Software Automation Engineer</div>
              <div className={styles.secondaryText}>Fidelity Investments (Canada)</div>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.icon}>
              <img 
                src="/v2/v2_bluejay.jpeg" 
                alt="Bluejay" 
                className={styles.iconImage}
              />
            </div>
            <div className={styles.listItemText}>
              <div className={styles.primaryText}>Software Engineer</div>
              <div className={styles.secondaryText}>Bluejay (YC X25)</div>
            </div>
          </li>
        </ul>

      </main>
    </div>
  );
}

