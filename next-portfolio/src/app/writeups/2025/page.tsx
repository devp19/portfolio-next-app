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
                bit of a stretch but i'm going to try to put my 2025 into a single page. (or atleast what i can put online lol) -- got inspired by a few people who posted theirs and after reading them, seems like a good personal reflection thing to do every year. going to be as transparent as possible about my year especially with this being the first sort of personal reflection i put up. met a ton of cool people this year so you'll see a lot of names mentioned in this writeup, hopefully inspires whoever reads this in some way or another.
                <br></br>
                <br></br>
                before i start, i just want to say im not special. im not some prodigy who has it all figured out even though some people think so. whatever i mention in this writeup can easily be applied to anyone if you honestly be real with yourself and put in the work. if you want to compare yourself to me, and use that as motivation, that's great. but remember, if you don't want it bad enough then it'll show.
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
              as funny as that sounds, something i learned fairly quickly about myself was my sense of ego. but it's a good ego. the way i always put it was something like <span style={{color: "#c6cdce", fontStyle: "italic" }}>"if he can. why can't i?"</span>
              <br></br>
              <br></br>
              but anyways, i compared myself in every single aspect of my life. i was comparing myself to the people i looked up to and the people that i thought were successful. everyone has their own definition of success but as self-loathing as that sounds, turns out these same successful people had one common trait. it was to not give a shit about what other people think and could put their head down and just work. and i dont mean work as in 9-5 but i mean work like their <span style={{color: "#c6cdce", fontStyle: "italic" }}>"tomorrow"</span> depended on it. that's the mentality i wanted to embody in 2025. i'll talk more about this later on but i kept this in my mind throughout the year. 
              <br></br>
             <br></br>
             now besides the motivation, i was lost in january. i was lost in the sense of what i wanted to do with my life, my career, my future, everything. so what did i do? as like any lost cs student, jumped into a hackathon. <span style={{color: "#c6cdce", fontStyle: "italic" }}>deltahacks</span>.
              <br></br>
              <br></br>
              now this is where life i guess took a turn. first hackathon, and not just any hackathon but a pretty big one. this was also last minute, ended up taking <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ kush ]</span>'s spot (someone i got very close with this year). mind you, this is <span style={{color: "#c6cdce", fontStyle: "italic" }}>"pre-cursor"</span> and pretty much before "vibe coding" started getting hype. (also i didnt even know cursor existed back then but that's a whole other story). 
              <br></br>
              <br></br>
              anyways, together our very makeshift last minute yet very capable team, <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ fenil, aryan and sapna ]</span> built <span style={{color: "#c6cdce", fontStyle: "italic" }}>qonnectr</span>. 
              <br></br>
              <br></br>
              <img src="/v2/qonnectr.png" alt="qonnectr" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              <br></br>
              qonnectr (khun-nect-ur) was built to bridge the gap for individuals struggling to bring their project ideas to life by connecting them with like-minded collaborators. the project was built in 24 hours and we won the <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>best use of auth0 mlh track</span>.
              <br></br>
              <br></br>
              you might ask why the explanation was just 2 sentences long for something as big as a hackathon win and it's because looking back on it, it was honestly such a bad project. of course when we were actually building it we thought we had solved cancer or something lol but if there's something that i took away from it, it was that ui matters alot. like alot. it was the main reason as to why we won i'd say.
              <br></br>
              <br></br>
              <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>if ui didn't matter, then why isn't everything just done in your terminal?</span>
              <br></br>
              <br></br>
              <img src="/v2/auth0.jpeg" alt="qonnectr" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              here's a picture of us winning (im in the black mcmaster hoodie which i took from my brother...)
              <br></br>
              <br></br>
              after this hackathon things started to i guess fall into place. started to realize there were a lot of things outside just school work. i was never one to care about credit or recognition but this acheivement put me under the spotlight which was a change for once. however, it definetely wasn't something i was boasting about because i knew there was so much more to it than that. something valuable that i did take away from this was that the level of competition is out of the room. and this was a place where i felt like i could actually apply myself. it was also a good place for my ego to be because i was actually competing with people who were insanely cracked.
              <br></br>
              <br></br>
for those of you that complain about not being able to find a job/internship and aren't building things or yet alone going to hackathons, i assure you the problem is not the market, it's you. once you see the things that people are building, you'll realize you're not as special as you think you are and that's just the harsh reality.
              <br></br>
              <br></br>
              now around this time the pressure of finding a summer internship started to build up. now with a hackathon win under my belt and alot of other stuff going on, i realized that with no prior experience i had no chance competing against other candidates. i had to build my credibility and start building my portfolio. something i highly encourage everyone is to build your own experience if you don't have any! this started off with me, <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>[ fenil (co-founder and pm), deep (outreach) and bhavi (outreach) ]</span> to really start working on <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>resdex</span> again.
              <br></br>
              <br></br>
              resdex was something i had been working on for a while but never really gave it the attention it deserved. it was a project (which turned into a startup) that i was really passionate about and i wanted to build it into something past just text on a page. for those of you that don't know, resdex is a research discovery platform that allows students to discover research opportunities and connect with other students who are interested in the same research.  
              <br></br>
              <br></br>
              over the next month or so i'd say i put more time into resdex than i did for my courses and exam season. this grind definetely paid off since we ended up collaborating with different undergrad research labs from <span style={{color: "#c6cdce", fontStyle: "italic" }}>mcmaster university, university of toronto, university of waterloo, wilfred laurier university and a few more</span>! we're nearing around 500+ pre-signups already!
              <br></br>
              <br></br>
              <img src="/v2/resdex.png" alt="resdex" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              <br></br>
              alot of people saw the potential in this project not just via the mission but also the complex technical challenges we were tackling. in essence we were recreating a mixture of linkedin and github from the ground up. this experience is something that will stick with me forever. as the primary founding engineer, i was working across all aspects of the project from the frontend to the backend to the database to the ai capabilities. learned a crazy amount of system design and architecture skills that i wouldnt have learned otherwise (things like database design, authentication, websockets, caching, api endpoints, etc.) -- which school was def not teaching me.
              
              {/* <img src="/v2/profile.png" alt="resdex-profile" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              here's a sneak-peek of the profile view! */}
              <br></br>
              <br></br>
              around this same time alot of people started to learn about what we were building. people i had never talked to knew what we were building and wanted in on it. that's when it hit. it was a feeling of validation, knowing that people wanted to be a part of this and that we were actually doing something right. that pretty much sums up phase 1. lots of self-learning, realization and discovering my passion for building things.
              <br></br>
              <br></br>
              onto phase 2. where life took a turn.
              </p>
            </section>

            <section id="section-2">
              <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                phase 2
              </h2>
              <p style={{ color: "#656765", marginBottom: "1rem" }}>
              internship? trying to reach self-satisfaction?
              </p>
              <p style={{ color: "#656765", marginBottom: "2rem" }}>
                as with the first word in the description...internship. i had landed my first internship at <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ fidelity ]</span>, one of the largest financial services company in the world. i was under the scope of an automation developer / tech consultant within the emerging technologies team. huge thanks to <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ divya ]</span> and <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ andre ]</span> for taking a chance on me (in hindsight it definetely paid off for the team!).
                <br></br>
                <br></br>
                now of course this wasn't a swe role. but i didn't let that affect me. i feel like a lot of people base their work-ethic on the title, and company of their role but there's so much more to learn when you're genuinely passionate about what you're doing. i was determined to make the most of it and learn as much as i could and i don't mean this sarcastically, i honestly did.
                <br></br> 
                <br></br>
                i was definetely putting more than <span style={{color: "#c6cdce"}}>50 hour work weeks</span>-- a lot of my friends always told me that it was useless to work more hours than i was billed for or that "work-life balance" was important or that "you'll get a return offer" but none of that mattered to me. frankly speaking, i wasn't even thinking about a return offer. i was just dialed in on power automate and the azure registry lol.
                <br></br>
                <br></br>
                but anyways, that was one thing that was going pretty well in life for me. however i was still searching for self-satisfaction. even though i was happy with the work i was doing and would definetely take the role if i was offered it again (foreshadowing *cough cough*), i was still searching for that feeling of accomplishment that i was getting from my hackathon win and just building cool things.
                <br></br>
                <br></br>
                someone told me to put this into this writeup but this was the beginning of my <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>summer arc</span>.
                <br></br>
                <br></br>
                this "arc" changed my trajectory for the rest of the year and definetely the rest of my life. i mentioned above that i was putting almost 50 hour work weeks in but simultanouely i was also building and shipping. may-september was honestly a blur. either i was working for fidelity or i was coding. and no i don't mean leetcode, i mean actual full-fledged applicable projects that often encompassed end to end system design.
                <br></br>
                <br></br> 
                a lot of you reading this probably are thinking im crazy. it was my summer and i was just working? where's my social life or definition of "fun"? frankly speaking, i also went out the most i ever did. out with friends, out with family, random sidequests, you name it. it's crazy how much free time you get when you realize the things you waste time on. 
                <br></br>
                <br></br>
                i also don't think people understand the level of dedication and commitment it takes to do what i did. right after work, opening up my laptop to start building. and more so doing this so consistently that it got to a point where if i didn't do something productive (outside of work) it would feel like a day wasted. as im writing this i think im shakespeare but i was obsessed. obsessed with this feeling of accomplishment that if i was out even at 2am and i hadn't done something, i'd go home and work even if it meant for an hour.
                <br></br>
                <br></br>
                <img src="/v2/contribution.png" alt="summer_arc" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                screenshot of my contribution graph for the year (1091 contributions). rough start but june to september during fidelity was when these contributions really picked up. (btw none of these are related to fidelity, didn't even use git at work)
                <br></br>
                <br></br>
                now it's much easier said than done. first few days of this mentality definetely was draining and felt very forced. after a week of grind and dedication consistently, it never felt forced rather it felt like a natural extension of my day. 
                <br></br>
                <br></br>
                something that i didn't let go was hackathons. no job or grind was stopping me from doing them. the next one i went to was <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>spurhacks</span>. this hackathon was sort of different. there were 3 different tracks, one for your normal project based, one for venture and one for new ideas. we <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ fenil, darsh, jay, tirth and kush ]</span> were in the venture track with resdex. (yes we ended up recruiting a few more people).
                <br></br>
                <br></br>
                definetely a new type of experience. wasn't the typical hackathon but it made us deeply think about how startups actually work. what revenue models, what market size, what problem were we really solving etc. we were pitching for upwards to $1m in funding! we ended up getting invited to the spur accelerator program which was amazing. after this experience i've become more and more interested in startups and the startup ecosystem.
              </p>
            </section>
          </div>
        </article>

        <div className={styles.divider} style={{ marginTop: "3rem" }}></div>
      </main>
    </div>
  );
}

