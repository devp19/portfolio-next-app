"use client";

import { useRouter } from "next/navigation";
import styles from "../../page.module.css";

export default function WriteupPage() {
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
          december 31, 2025
        </p>
        <header style={{ marginBottom: "2rem" }}>
          <div className={styles.header}>
            <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>a year in review (wip!)</h1>
            {/* <div className={styles.socialLinks}>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[website]</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[linkedin]</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>[github]</a>
            </div> */}
          </div>
          <p style={{ color: "#656765", fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>
            my surprising, never in a million years would I expect, 2025...put into a single page.
          </p>
        </header>

        <div className={styles.divider}></div>

        <article style={{ marginTop: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            {/* <img 
              src="/placeholder-cover.png" 
              alt="Cover" 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            /> */}
          </div>

          <div style={{ color: "#c6cdce", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <section id="introduction">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                introduction
              </h2>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                bit of a stretch but i'm going to try to put my 2025 into a single page. got inspired by a few people who posted theirs and after reading them, seems like a good personal reflection thing to do every year. i'm going to try to be as honest and transparent as possible about my year especially with this being the first sort of personal reflection i put up. hopefully inspires whoever reads this in some way or another.
                <br></br>
                <br></br>
                to begin and probably the most corniest opening to a reflection, <span style={{color: "#c6cdce", fontStyle: "italic" }}>2025 was definetely not what i expected it to be.</span> i feel like everyone says this in hindsight of a year but you know those <span style={{ opacity: 1, color: "#c6cdce", fontStyle: "italic" }}>"where do you see yourself in 5 years"</span> type of questions? well yeah definetely did not see myself here.
                <br></br>
                <br></br>
                anyways, to make this a bit easier to read and write, i've split it into 3 phases of 2025.
                <br></br>
                <br></br>
                <ul style={{ borderLeft: "2px solid #656765", paddingLeft: "1rem" }}>
                  <li style={{ color: "#c6cdce" }}><span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>phase 1:</span> not sure what im even doing at this point...but it seems to be working?</li>
                  <br></br>
                  <li style={{ color: "#c6cdce" }}><span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>phase 2:</span> internship? trying to reach self-satisfaction?</li>
                  <br></br>
                  <li style={{ color: "#c6cdce" }}><span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>phase 3:</span> how did this happen? wow.</li>
                </ul>
                <br></br>
                <br></br>
               
              </p>
            </section>

            <section id="section-1">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                phase 1
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
              not sure what im even doing at this point...but it seems to be working?
              <br></br>
              <br></br>
              weird description of phase 1 but honestly that's the best way to describe it. heading into a fresh year, i was really unsure of what was in store. all i knew was i was comparing myself with all the <span style={{color: "#c6cdce", fontStyle: "italic" }}>"cracked"</span> people. 
              <br></br>
              <br></br>
              as funny or however you want to put it sounds, it's something i learned fairly quickly about myself and that's my sense of ego. but it's a good ego. the way i like to put it is in a simple sentence. <span style={{color: "#c6cdce", fontStyle: "italic" }}>"if he can. why can't i?"</span> (this is a bit of foreshadowing bc for those of you that know me, this is what i say all the time -- and im the living proof of it). 
              <br></br>
              <br></br>
              but anyways, i compared myself in every single aspect of my life. i was comparing myself to the people i looked up to and the people i thought were successful. now everyone has their own definition of success but as self-loathing as that sounds, turns out these same successful people had one common trait. and it was to not even care about what other people had to say and could put their head down and just work. and i dont mean work as in 9-5 but i mean work like their <span style={{color: "#c6cdce", fontStyle: "italic" }}>"tomorrow"</span> depended on it. i'll talk more about this later on but i kept this in my mind all of 2025.
              <br></br>
              <br></br>
              now onto what i actually took apart from this mentality within the first week of january, probably nothing. it became apparent it was one of those <span style={{color: "#c6cdce", fontStyle: "italic" }}>"new year new me only for a few days"</span> type of thing. managing school work, was definetely something that pushed me back and that's when i started to realize i was wasting time.
              <br></br>
              <br></br>
              so what did i do? as like any lost cs student, jumped into a hackathon. <span style={{color: "#c6cdce", fontStyle: "italic" }}>deltahacks</span>.
              <br></br>
              <br></br>
              now this is where life i guess took a turn. first hackathon, and not just any hackathon but a pretty big one. mind you, this is <span style={{color: "#c6cdce", fontStyle: "italic" }}>"pre-cursor"</span> and pretty much before "vibe coding" started getting hype. (also i didnt even know cursor existed back then but that's a whole other story). 
              <br></br>
              <br></br>
              so i was with my team, <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ Fenil, Aryan and Sapna ]</span> and we built <span style={{color: "#c6cdce", fontStyle: "italic" }}>qonnectr</span>. 
              <br></br>
              <br></br>
              <img src="/v2/qonnectr.png" alt="qonnectr" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              <br></br>
              we built it to bridge the gap for individuals struggling to bring their project ideas to life by connecting them with like-minded collaborators. the project was built in 24 hours and we won the <span style={{color: "#c6cdce", fontStyle: "italic" }}>best use of auth0 mlh track</span>.
              <br></br>
              <br></br>
              looking back on it, it was honestly such a bad project. of course when we were actually building it we thought we had solved cancer or something lol but if there's something that i took away from it, it was that UI matters alot. like ALOT. it was the main reason as to why we won i'd say.
              <br></br>
              <br></br>
              <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>if ui didn't matter, then why isn't everything just done in your terminal?</span>
              <br></br>
              <br></br>
              <img src="/v2/auth0.jpeg" alt="qonnectr" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              here's a picture of us winning (im in the black mcmaster hoodie which i took from my brother...)
              <br></br>
              <br></br>
              after this hackathon things started to i guess fall into place. started to realize there were a lot of things outside just school work. the level of competition is tenfold in a hackathon setting and this was a place where i felt like i could actually apply myself. it was also a good place for my ego to be because i was actually competing with people who were actually good at what they did. it was like perfecting my craft because <span style={{color: "#c6cdce", fontStyle: "italic" }}>"when you surround yourself with people who are better than you, objectively speaking your bar of success is raised."</span>
              <br></br>
              <br></br>
              now around this time the pressure of finding a summer internship started to build up. now with a hackathon win under my belt and alot of other stuff going on, i realized that with no prior experience i had no chance competing against other candidates. i had to build my credibility and start building my portfolio. this is when me and <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>[fenil]</span> really started to work on <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>resdex</span> again.
              <br></br>
              <br></br>
              resdex was something i had been working on for a while but never really gave it the attention it deserved. it was a project that i was really passionate about and i wanted to build it into something past just text on a page. for those of you that don't know, resdex is a research discovery platform that allows students to discover research opportunities and connect with other students who are interested in the same research. not only this but as computer science and eng students, a big part of our portfolios are our projects and where we put them (github). this is the exact issue we wanted to solve. research students don't have any portfolio of their own and they are left to their own devices to showcase their work.
              <br></br>
              <br></br>
              over the next month or so i'd say i put more time into resdex than i did for my courses and exam season. this grind definetely paid off since we ended up partnering with different undergrad research labs from <span style={{color: "#c6cdce", fontStyle: "italic" }}>mcmaster university, university of toronto, university of waterloo, laurier university and a few more</span>!
              <br></br>
              <br></br>
              <img src="/v2/resdex.png" alt="resdex" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              <br></br>
              <br></br>
              alot of people saw the potential in this project not just via the mission but also the complex technical challenges we were tackling. in essence we were recreating a mixture of linkedin and github from the ground up. this experience is something that will stick with me forever. as the primary founding engineer, i was working across all aspects of the project from the frontend to the backend to the database to the ai capabilities. learned a crazy amount of system design and architecture skills that i wouldnt have learned otherwise (things like supabase, jwt tokens, authentication, websockets, etc.) -- which school was def not teaching me.
              </p>
             
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                [content]
              </p>
            </section>

            <section id="section-2">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                section title
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
                [content]
              </p>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                [content]
              </p>
            </section>
          </div>
        </article>

        <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
      </main>
    </div>
  );
}

