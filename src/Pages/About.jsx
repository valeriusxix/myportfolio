import React, { useEffect, useRef } from "react";
import './About.css';

const skills = [
  { role: "Social Media Manager",   duration: "2 Years",   tag: "DeFi · RWA · AI"       },
  { role: "Content Writer",         duration: "2 Years",   tag: "Threads · Articles · QT's"      },
  { role: "Frontend Developer",     duration: "< 1 Year",  tag: "ReactJs · Vite · CSS · Javascript"        },
  { role: "Prompt Engineer",        duration: "< 1 Year",  tag: "Claude · Grok · Gemini · Higgsfield"   },
  { role: "Beta Tester",            duration: "< 1 Year",  tag: "Web3 Protocols · dApps"     },
];

function About() {
  const sectionRef = useRef(null);

  // Trigger fade-in when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('about--visible');
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container" id="about" ref={sectionRef}>

      {/* Header */}
      <div className="about-header">
        <span className="about-eyebrow">WHO AM I</span>
        <h2>About <span className="about-accent">Me</span></h2>
        <div className="about-divider" />
      </div>

      {/* Body */}
      <div className="about-body">

        {/* Left — Bio */}
        <div className="about-bio">
          <p className="bio-main">
            Two years in Web3 taught me that the gap between a protocol and its
            audience is almost always a <span className="about-accent">communication problem.</span> I close that gap.
          </p>
          <p className="bio-sub">
           Hello there, I am Valerius... a creative content writer and social media strategist focused
           on helping crypto projects build mindshare, attention and trust.
           </p>
           
           <p className="bio-sub">I've managed socials, written content, and shipped growth systems & strategies for
            brands across DeFi, AI, and RWA... all while also building real frontend
            interfaces in ReactJs on the side.
            </p> 
          
          <p className="bio-sub">
            I use AI as a force multiplier across both crafts, and I'm still early.
          </p>

          {/* Specialty callout */}
          <div className="about-specialty">
            <span className="specialty-icon">◈</span>
            <div>
              <span className="specialty-title">Growth Strategy</span>
              <span className="specialty-desc">
                Audience architecture, content systems, and positioning for social media brands
              </span>
            </div>
          </div>
        </div>

        {/* Right — Skill Cards */}
        <div className="about-skills">
          <p className="skills-label">EXPERIENCE</p>
          {skills.map((skill, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-left">
                <span className="skill-dot" />
                <div>
                  <span className="skill-role">{skill.role}</span>
                  <span className="skill-tag">{skill.tag}</span>
                </div>
              </div>
              <span className="skill-pill">{skill.duration}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default About;