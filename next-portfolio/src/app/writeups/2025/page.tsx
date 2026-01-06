  "use client";

  import { useRouter } from "next/navigation";
  import { useState, useEffect } from "react";
  import styles from "../../page.module.css";

  export default function WriteupPage() {
    const router = useRouter();
    const [viewerCount, setViewerCount] = useState<string>("");

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

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
          <button
            onClick={() => router.push("/")}
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
            january 4th, 2025
          </p>
          <header style={{ marginBottom: "2rem" }}>
            <div className={styles.header}>
              <h1 style={{ color: "#c6cdce", margin: 0, fontSize: "1.8rem" }}>a year in review [ 2025 ]</h1>
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
                  bit of a stretch but i'm going to try to put my 2025 into a single page. (or atleast what i can put online lol) -- got inspired by a few people who posted theirs and after reading them, seems like a good personal reflection thing to do every year. going to be as transparent as possible about my year especially with this being the first sort of personal reflection i put up. met a ton of cool people this year so you'll see a lot of names mentioned here.
                  <br></br>
                  <br></br>
                  before i start, i just want to say im not special. im not some prodigy who has it all figured out even though some people think so. whatever i mention here is just on the surface level of what you can accomplish if you put in the work, no matter how small or big so hopefully this crazy roller coaster of a year inspires you in some shape or form :) 
                  <br></br>
                  <br></br>
                  to begin and probably the most corniest opening to a reflection, <span style={{color: "#c6cdce", fontStyle: "italic" }}>2025 was definitely not what i expected it to be.</span> i feel like everyone says this in hindsight of a year but you know those <span style={{ opacity: 1, color: "#c6cdce", fontStyle: "italic" }}>"where do you see yourself in 5 years"</span> type of questions? well yeah definitely did not see myself here.
                  <br></br>
                  <br></br>
                  anyways, to make this a bit easier to read and write, i've split it into 3 phases of 2025.
                  <br></br>
                  <br></br>
                </p>
                <ul style={{ borderLeft: "2px solid #656765", paddingLeft: "1rem" }}>
                  <li
                    style={{
                      color: "#c6cdce",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    onClick={() => scrollToSection('section-1')}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#c6cdce";
                      e.currentTarget.style.transform = "translateX(0px)";
                    }}
                  >
                    <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>phase 1:</span> not sure what im even doing at this point...but it seems to be working?
                  </li>
                    <br></br>
                    <li
                      style={{
                        color: "#c6cdce",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                      onClick={() => scrollToSection('section-2')}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#c6cdce";
                        e.currentTarget.style.transform = "translateX(0px)";
                      }}
                    >
                      <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>phase 2:</span> internship? trying to reach self-satisfaction?
                    </li>
                    <br></br>
                    <li
                      style={{
                        color: "#c6cdce",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                      onClick={() => scrollToSection('section-3')}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#c6cdce";
                        e.currentTarget.style.transform = "translateX(0px)";
                      }}
                    >
                      <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>phase 3:</span> how did this happen? wow.
                    </li>
                </ul>
                <p style={{ color: "#656765", marginBottom: "2rem" }}>
                
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
                weird description of phase 1 but honestly that's the best way to describe it. heading into a fresh year, i was really unsure of what was in store. the only thing i knew was that i was comparing myself with all the <span style={{color: "#c6cdce", fontStyle: "italic" }}>"cracked"</span> people. 
                <br></br>
                <br></br>
                as funny as that sounds, something i learned fairly quickly about myself was my sense of ego. but it was the good type of ego. it was the ego that pushed me to believe that <span style={{color: "#c6cdce", fontStyle: "italic" }}>"if he can. why can't i?"</span>
                <br></br>
                <br></br>
                i compared myself in every single aspect of my life. i was comparing myself to the people i looked up to and the people that i thought were successful. everyone has their own definition of success but as self-loathing as that sounds, turns out these same successful people had one common trait. it was a mentality that let them put their head down and just work. and i dont mean work as in 9-5 but i mean work like their <span style={{color: "#c6cdce", fontStyle: "italic" }}>"tomorrow"</span> depended on it. that's the mentality i wanted to embody in 2025. i'll talk more about this later on but i kept this in my mind throughout the year. 
                <br></br>
              <br></br>
              now besides the motivation, i was lost in january. i was lost in the sense of what i wanted to do with my life, my career, my future, everything. so what did i do? as like any lost cs student, jumped into a hackathon. <span style={{color: "#c6cdce", fontStyle: "italic" }}>deltahacks</span>.
                <br></br>
                <br></br>
                first ever hackathon for the year, and not just any hackathon but a pretty big one. this was also last minute, ended up taking <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ kush ]</span>'s spot (someone i got very close with this year). mind you, this is <span style={{color: "#c6cdce", fontStyle: "italic" }}>"pre-cursor"</span> and pretty much before "vibe coding" started getting hype. (also i didnt even know cursor existed back then but that's a whole other story). 
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
                you might ask why the explanation was just 2 sentences long for something as big as a hackathon win and it's because looking back on it, it was honestly such a bad project. of course when we were actually building it we thought we had solved cancer or something lol but if there's something that i took away from it, it was that ui matters a lot. like a lot. it was the main reason as to why we won i'd say.
                <br></br>
                <br></br>
                <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>if ui didn't matter, then why isn't everything just done in your terminal?</span>
                <br></br>
                <br></br>
                <img src="/v2/auth0.jpeg" alt="qonnectr" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                here's a picture of us winning (im in the black mcmaster hoodie which i took from my brother...)
                <br></br>
                <br></br>
                after this hackathon things started to i guess fall into place. started to realize there were a lot of things outside just school work. i was never one to care about credit or recognition but this acheivement put me under the spotlight which was a change for once. however, it definitely wasn't something i was boasting about because i knew there was so much more to it than that. something valuable that i did take away from this was that the level of competition is out of the room. and this was a place where i felt like i could actually apply myself. it was also a good place for my ego to be because i was actually competing with people who were insanely cracked.
                <br></br>
                <br></br>
  for those of you that complain about not being able to find a job/internship and aren't building things or yet alone going to hackathons, i assure you the problem is not the market, it's you. once you see the things that people are building, you'll realize you're not as special as you think you are and that's just the harsh reality.
                <br></br>
                <br></br>
                now around this time the pressure of finding a summer internship started to build up. now with a hackathon win under my belt and a lot of other stuff going on, i realized that with no prior experience i had no chance competing against other candidates. i had to build my credibility and start building my portfolio. something i highly encourage everyone to do. take ownership of your experience and build your own if you don't have any. this started off with me, <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>[ fenil (co-founder and pm), deep (outreach) and bhavi (outreach) ]</span> to really start working on <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>resdex</span> again.
                <br></br>
                <br></br>
                resdex was something i had been working on for a while but never really gave it the attention it deserved. also now that im writing this, for some strange reason i hated telling people i was working on it because it was a startup? in general though i think i just never liked to show off or come off as too excited about it. anyways it was a project (which turned into a startup) that i was really passionate about and i wanted to build it into something past just text on a page. for those of you that don't know, resdex is a research discovery platform that allows students to discover research opportunities and connect with other students who are interested in the same field of research.  
                <br></br>
                <br></br>
                over the next month or so i'd say i put more time into resdex than i did for my courses and exam season. this grind definitely paid off since we ended up collaborating with different undergrad research labs from <span style={{color: "#c6cdce", fontStyle: "italic" }}>mcmaster university, university of toronto, university of waterloo, wilfred laurier university and a few more</span>! we're nearing around 500+ pre-signups already!
                <br></br>
                <br></br>
                <img src="/v2/resdex.png" alt="resdex" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                <br></br>
                a lot of people saw the potential in this project not just via the mission but also the complex technical challenges we were tackling. in essence we were recreating a mixture of linkedin and github from the ground up. this experience is something that will stick with me forever. as the primary founding engineer, i was working across all aspects of the project from the frontend to the backend to the database to the ai capabilities. learned a crazy amount of system design and architecture skills that i wouldnt have learned otherwise (things like database design, authentication, websockets, caching, aws, etc.) -- which school was def not teaching me.
                
                {/* <img src="/v2/profile.png" alt="resdex-profile" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                here's a sneak-peek of the profile view! */}
                <br></br>
                <br></br>
                around this same time a lot of <span style={{color: "#c6cdce", fontStyle: "italic" }}>new</span> people started to learn about what we were building. people i had never talked to. it was a feeling of validation, knowing that people wanted to be a part of this and that we were actually doing something right. that pretty much sums up phase 1. lots of self-learning, realization and discovering my passion for building things.
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
                  as with the first word in the description...internship. i had landed my first internship at <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ fidelity ]</span>, one of the largest financial services company in the world. i was under the scope of an automation developer / tech consultant within the emerging technologies team. huge thanks to <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ divya ]</span> and <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ andre ]</span> for taking a chance on me (in hindsight it definitely paid off for the team!).
                  <br></br>
                  <br></br>
                  now of course this wasn't a swe role. but i didn't let that affect me. i feel like a lot of people base their work-ethic on the title and compensation of their role but there's so much more to learn when you're genuinely passionate about what you're doing. i was determined to make the most of it and learn as much as i could and i don't mean this sarcastically, i honestly did.
                  <br></br> 
                  <br></br>
                  i was putting in well over <span style={{color: "#c6cdce"}}>50 hour work weeks</span>-- a lot of my friends always told me that it was useless to work more hours than i was billed for or that "work-life balance" was important or that "you'll get a return offer" but none of that mattered to me. frankly speaking, i wasn't even thinking about a return offer. i was just dialed in on power automate and the azure registry lol.
                  <br></br>
                  <br></br>
                  but anyways, that was one thing that was going pretty well in life for me. however i was still searching for self-satisfaction. even though i was happy with the work i was doing and would definitely take the role if i was offered it again (foreshadowing *cough cough*), i was still searching for that feeling of accomplishment that i was getting from my hackathon win and just building cool things.
                  <br></br>
                  <br></br>
                  someone told me to put this into this writeup but they like to say it was the beginning of my <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>summer arc</span>.
                  <br></br>
                  <br></br>
                  this "arc" changed my trajectory for the rest of the year and definitely the rest of my life. i mentioned above that i was putting in more than 50 hour work weeks in but simultaneously i was also <span style={{color: "#c6cdce", fontStyle: "italic" }}>building and shipping at an insane rate</span>. may-september was honestly a blur. either i was working for fidelity or i was coding. and no i don't mean leetcode, i mean actual full-fledged applicable projects that often encompassed end to end system design.
                  <br></br>
                  <br></br> 
                  a lot of you reading this probably are thinking im crazy. it was my summer and i was just working? where's my social life or definition of "fun"? frankly speaking, i also went out the most i ever did. out with friends, out with family, random sidequests, you name it. it's crazy how much free time you get when you're self-aware about the things you waste time on. as corny as it sounds, i cut off all my distractions and focused on one thing: <span style={{color: "#c6cdce", fontStyle: "italic" }}>improving myself</span>.
                  <br></br>
                  <br></br>
                  i also don't think people understand the level of dedication and commitment it takes to do what i did. and by no means am i saying this to brag, honestly including this for those of you that want to genuinely improve. right after work, i'd open up my laptop to start building. and more so doing this so consistently that it got to a point where if i didn't do something productive (outside of work) it would feel like a day wasted. as im writing this i think im shakespeare but i was obsessed. obsessed with this feeling of accomplishment that if i was out even at 2am and i hadn't done something, i'd go home and work even if it meant for an hour.
                  <br></br>
                  <br></br>
                  <img src="/v2/contribution.png" alt="summer_arc" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                  here's a screenshot of my contribution graph for the year (1091 contributions). rough start but most of my contributions came while doing an internship...(btw none of these are related to fidelity, didn't even use git at work)
                  <br></br>
                  <br></br>
                  now...it's much easier said than done. first few days of this mentality definitely was draining and felt very forced. it took time to adapt like with anything and after a week of grind and consistency, that feeling of "force" never showed up again. rather it felt like a natural extension of my day. 
                  <br></br>
                  <br></br>
                  during this time something that i didn't let go was hackathons. no job or grind was stopping me from doing them. the next one i went to was <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>spurhacks</span>. this hackathon was sort of different. there were 3 different tracks, one for your normal project based, one for venture and one for new ideas. we <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ fenil, darsh, jay, tirth and kush ]</span> were in the venture track with resdex. (yes we ended up recruiting a few more people).
                  <br></br>
                  <br></br>
                  definitely a new type of experience. wasn't the typical hackathon but it made us deeply think about how startups actually work. what revenue models, what market size, what problem were we really solving etc. we were pitching for upwards to $1m in funding! we ended up getting invited to the spur accelerator program which was amazing. after this experience i've become more and more interested in startups and the startup ecosystem.
                  <br></br>
                  <br></br>
                  before i close off this phase, i also went to another hackathon with a few friends (<span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ darsh and dhruvil ]</span>) to build <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>hotspots</span>. we built a custom machine-learning pipeline to predict heat vulnerability in toronto based on satellite lst, ndvi (natural density vegetation index) and building density. it would give the city of toronto actionable insights to help them plan on where vegetation was weak and located places that were most vulnerable to heat.
                  <br></br>
                  <br></br>
                  <img src="/v2/hotspots.png" alt="hotspots" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                  <br></br>
                  this was by far the best project i worked on so far into the year (keyword *so far*). it used mapbox gl to visualize a 3d apple-like map and put pinpoint heatmaps directly in the view. especially with this being my first time playing around with machine learning and data visualization, it was definitely something out of my comfort zone. i had raised my expectation of what was possible and what i could accomplish.
                  <br></br>
                  <br></br>
                  so far, a generational run for me. want to end this phase of by saying i was offered to come back to <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ fidelity ]</span> for the next term for a second internship, this time under the scope of an <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>ai developer</span>! so now it's something down my line of field!
                  <br></br>
                  <br></br>
                </p>
              </section>
             
              <section id="section-3">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "1rem", marginBottom: "1rem" }}>
                  phase 3
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                how did this happen? wow.                
                <br></br>
                <br></br>
                these next 4 months (september - december) is straight unreal. it feels like i lived a whole year in just 4 months. a lot of things happened in such a short amount of time that it's super hard to even process now that i'm writing this. 
                <br></br>
                <br></br>
                starting off with my new role at fidelity as an ai developer, it was a huge personal win. now that i was moving off of a low-code environment into production ready code overseeing the whole sdlc from requirements gathering to design, development, testing, documentation and deployment, it was the best learning experience i could ask for (besides the corporate access nightmares). 
                <br></br>
                <br></br>
                i also met a ton of other cool interns this time around. just to name a few -- <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ vincent, nidhi, adam, navdeep ]</span> and a lot more. whether it was from talking about the next stock that we should invest in to become rich <span style={{color: "#c6cdce", fontStyle: "italic" }}>(vincent)</span>, jumpscaring each other for no reason <span style={{color: "#c6cdce", fontStyle: "italic" }}>(nidhi)</span>, or saying the task for today was sending a single email during standup <span style={{color: "#c6cdce", fontStyle: "italic" }}>(navdeep)</span>, this term is definitely going to be hard to beat. it was all the little interactions that left a lasting impression.
                <br></br>
                <br></br>
                besides the fun i also had the opportunity to work right under the vp of data and technology and transformation, <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ nazia ]</span> during an internal sdlc discovery project. during this, i built a multi-agent orchestrator that would build a brd (business-requirements document) for business analysts from just a transcript of a meeting. 
                <br></br>
                <br></br>
                anyways besides fidelity, there was something else i was looking forward to. and that was....yes. another hackathon. not just any hackathon, but the largest hackathon in canada. <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>hack the north</span>.
                <br></br>
                <br></br>
                as people like to say, this was where canada's best and brightest come to compete. there was one thing different this time around, and it was having a completely new team. it was me, <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ krish, haresh and suneru ]</span>. i think i was one of only a couple students from tmu that got accepted. i'd want to say 90% of the competition was waterloo students so you already know the level of competition. depsite the difference in universities, there was one thing in common with my team and that was to build something new and innovative. im joking, it was obviously to win.
                <br></br>
                <br></br>
                after non-stop brainstorming we settled to build a platform that would help makers validate product ideas and features in seconds with ai-driven, real-market personas with their existing userbase. imagine wanting to launch a new feature but not knowing if it's actually worth spending the time and resources to build it. <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>tunnel</span> is that platform. it basically creates a thousand different ai "agents" replicating real users, allowing you to test your product idea globally and even talk with them.
                <br></br>
                <br></br>
                <img src="/v2/tunnel.png" alt="tunnel" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                <br></br>
                after 2 days of no sleep, we ended up winning not once but twice! we won the <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>mlh track</span> and the <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>best use of vapi - ai voice agent</span> award. we were also shortlisted for the <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>y combinator</span> track.
                <br></br>
                <br></br>
                we sat down with none other than <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>[ nicolas dessaigne and andrew miklas ]</span> from <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>y combinator</span> to talk about the future of our project. winning big and realizing how much is possible when you just show up and start building made every hour totally, absolutely worth it.
                <br></br>
                <br></br>
                this huge win is what i would say my next 3 months of 2025 were influenced by. my past 4 months of constant work and dedication paid off and i was rewarded for it. i was behind the ui and the on-runtime agent creation for opinion ranking via cohere. after sharing this online on linkedin and x, it went insanely viral (ended up getting over 500k impressions across all platforms, s/o krish for his gold midas hands) and tons of people reached out to me. 
                <br></br>
                <br></br>
                i like to look at all of this as noise though. the most important thing i took away from all of this was that <span style={{color: "#c6cdce"}}>i grew as a person</span>. from someone who earlier in the year was very kept to myself and thought i didn't have <span style={{color: "#c6cdce" }}>any value</span> to anyone, i ended up helping a ton of people with their projects and built relationships with some really cool people. and i dont mean help as in a 5 minute conversation, i mean constant checkups, hour long deep-talks and even got to a time where i was putting everything aside just to help others. i ended up helping a lot of people by doing lots of resume reviews, interview prep, and even sitting on calls teaching things like setting up projects, building portfolio sites, database schemas etc.
                <br></br>
                <br></br>
                anyways after this win, my inbound requests for interviews skyrocketed. multiple companies reached out to me for interviews ranging from capital markets and banks all the way to startups. around this time i also had gotten another extension offer from fidelity to come back again as an ai developer. i dont mean to include this to show off by any means, it's honestly a personal reflection of myself compared to 8 months ago when it came from a last minute offer to now getting <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>head-hunted</span> from different companies. i ended up turning down a lot of inbound requests but there were 2 companies that i was really interested in. <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>cua (yc x25) and bluejay (yc x25)</span>.
                <br></br>
                <br></br>
                i was first reached out to by <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ francesco ]</span> (ceo) from <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ cua (yc x25) ]</span>. for those of you that don't know, cua (computer-use-agents) is an open-source infrastructure for computer-use agents which utilizes sandboxes, sdk's and benchmarks to train and evaluate ai agents that can control full desktops (macos, linux, windows). 
                <br></br>
                <br></br>
                a little bit about the interview process for those that are interested, besides a technical i also had a takehome project. it was my first time having one of these. a project that you work on outside of the interview process. i feel like these are unheard of in the corporate world but after doing a few now, it's honestly a much better way to evaluate candidates. my takehome was definitely not easy by any means. i was tasked with building an <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>android docker provider for the cua computer sdk</span>. when i was first told about this, i honestly thought it was funny. it was like having 5 buzz words put together. also as an avid ios user, i've never worked with android emulators moreoever docker. 
                <br></br>
                <br></br>
                however, i was also no stranger to a challenge. i think managing timelines was definitely the hardest thing around this time. i was balancing work, interviews, 2 takehomes (i'll talk about the next one below) and building resdex at the same time.
                <br></br>
                <br></br>
                after constant research, learning docker from the ground up, navigating unfamiliar codebases, reading documentation on kvm's (kernel-based virtual machine) and virtual machines in general, i was able to get the implementation working. obviously it's much easier said than done, but this takehome was honestly the most challenging thing i've ever done. working with llm disparities, point-click offsets across different devices, converting commands into android adb commands, and even having to learn the basics of android development.
                <br></br>
                <br></br>
                <video
                  src="/test.mp4"
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                quick demo of the implementation!
                <br></br>
                <br></br>
                happy to say that after a follow-up interview, i was <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>offered the role</span> to come down to san francisco to join the team! it was a no-brainer. i had pretty much made my mind up on accepting the offer but i guess god had other plans for me. in hindsight and a bit of foreshadowing, everything happens for a reason, it's all gods timing.
                <br></br>
                <br></br>
                the reason i say that was i was also still interviewing with bluejay (yc x25) at the same time. i had even rescheduled interviews twice because i had already made up my mind. however i ended up hopping on the grind again and going through the process one more time.
                <br></br>
                <br></br>
                with bluejay it was a similar process however much more in depth. i was initially reached out to by <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ rohan ]</span> (co-founder and ceo) from <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ bluejay (yc x25) ]</span> on linkedin. bluejay is building the trust layer for voice and text ai agents, recently raising $4m. btw i got a ton of inbound requests from linkedin just because of the hackathon post. so definitely make sure to share your work online!
                <br></br>
                <br></br>
                anyways, bluejay's interview process was lengthy to say the least. from an initial behavioural interview, to another behavioural interview and technical interview with the co-founder and cto <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ faraz ]</span>, to a 3-day takehome project, to a 3-hour system design interview with the founding engineer <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ yash ]</span>, to a final one-day work trial, it was a lot.
                <br></br>
                <br></br>
                as with almost everything, the takehome for bluejay was also something i had no experience with. it was with retrieval augmented generation (rag). i was familiar with basic concepts of rag but i had never actually gotten around to perfect my knowledge around it. i was tasked to build a rag voice agent with external tool calls. i ended up building <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ adrian ]</span>, a rag voice agent that had context to fia formula 1 regulations.
                <br></br>
                <br></br>
                <img src="/f1reg.png" alt="adrian" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                <br></br>
                <br></br>
                high level overview, the rag pipeline is the core of adrian's ability to answer regulation questions. it starts with the fia formula 1 sporting regulations pdf (a 200+ page document) loaded using <span style={{color: "#c6cdce", fontStyle: "italic", backgroundColor: "#404140", borderRadius: "2px" }}>[ pypdfloader ]</span> and split into 1000-character chunks with 200-character overlap. i chose this chunk size because it was the most balanced between relevance and context length. these chunks are embedded using openai's text-embedding-ada-002 model into 1536-dimensional vectors and stored in chromadb. when a user asks a question, it detects regulation queries and performs similarity search to find the top 4 most relevant chunks, injecting them into the llm's context with source pages. this gives adrian access to the entire rulebook without fitting it all in the context window. 
                <br></br>
                <br></br>
                definitely want to give a shoutout to <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ faraz ]</span> for speeding up this whole long interview process and putting together evals in such short notice. i was time constrained with having to accept multiple other offers that were going to expire, and we were able to get through the whole interview process within a week. i also got offered the role to join the team in san francisco!
                <br></br>
                <br></br>
                now this is where things got interesting. had multiple offers on the table and it was honestly a tough decision to make. i honestly didn't care about compensation. like i said earlier before, i was just focused on positioning myself in a place where i think i could learn and grow the most. i ended up accepting the offer from bluejay for 8 months. 
                <br></br>
                <br></br>
                now i guess it was time to take a breather. after a hackathon of course.
                <br></br>
                <br></br>
                me, <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ fenil and kush ]</span> went to <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ hackwestern ]</span>. sort of a side note but why is western so far away? we ended up sleeping in a car the first day which was definitely not fun.
                <br></br>
                <br></br>
                <img src="/v2/western.png" alt="hackwestern" style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
                here's a picture of kush sleeping and taking apart the headrest.
                <br></br>
                <br></br>
                besides the sleeping situation, we honestly created something really cool. the week before, we had won <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ deltahacks lite ]</span>, a 3 hour hackathon. we built <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ gmi @ mcmaster ]</span>, an application that makes finding housing on campus much easier. by taking in geospatial data and surrounding high-population density places like restaurants, we built a tinder like experience to swipe through listings. we won and we got a few compact-esp32 devices. we honestly thought this was the worst prize and the most useless peice of hardware created.
                <br></br>
                <br></br>
                turns out it wasn't. not until we reverse engineered it. we built <span style={{color: "#c6cdce", backgroundColor: "#404140", borderRadius: "2px" }}>[ mesh ]</span>, the coordination layer for geospatial data. it might sound fancy but in essence it allows you control any 3d object in real time using just your fingers. imagine jarvis from ironman. 
                <br></br>
                <br></br>
                <video
                  src="/movements.mp4"
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <br></br>
                <br></br>
                it's camera independent so it's not one of those computer vision projects. it had a real usecase like for example a professor walking around class, breaking down the anatomy of a brain from across the room. we didnt win which we were upset about but we met a ton of other cool hackers that saw the insane capabilities of our project.
                <br></br>
                <br></br>

                  this pretty much sums up phase 3. the best, most challenging and most rewarding phase of 2025. 
                </p>
              </section>
              <section id="section-1">
                <h2 style={{ color: "#c6cdce", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>
                  ending remarks
                </h2>
                <p style={{ color: "#656765", marginBottom: "1rem" }}>
                  for those of you that made it this far, thank you for reading. took a while to write this, trying to keep a balance between just random yapping, inspirational stuff and personal reflection for me to look back on in the future. for the people that made this year memorable, thank you for being part of it. if there's something besides the progression i made in my career, it's the people that i've met and the relationships that i've built whether on a micro or macro level of interaction, i've learnt to take in everything because it's the little things that make a difference. 
                  <br></br>
                  <br></br>
                  if anyone wants to reach out to ask questions about anything, feel free to reach out. will give a hand where i can!
                  <br></br>
                  <br></br>
                 for now, time to pack my bags to explore san francisco and the bay area for the next 8 months...
                </p>
              </section>
            </div>
          </article>

          <div className={styles.divider} style={{ marginTop: "3rem" }}></div>

          <div className={styles.footer}>
            <span className={styles.viewerCount}>
              {viewerCount ? `${viewerCount} total views` : ''}
            </span>
            <span className={styles.footerDate}>
              <span className={styles.pulsingDot}></span>
              last updated: 01/05/2026
            </span>
          </div>
        </main>
      </div>
    );
  }

