import React from "react";
import './Home.css';
import valPfp from '../assets/val-pfp.png';

function Home() {
  return (
    <section className="home-container" id="home">

      {/*TEXTS*/}
      <div className="home-text">
        <h1>Hi, I am <span>VΛLΣRIUS</span></h1>

        <div className="text-changer">
          <h3>A </h3>
          <div className="role-changer">
            <span className="role">Beta Tester</span>
            <span className="role">Social Media Manager</span>
            <span className="role">Content Creator</span>
            <span className="role">Prompt Engineer</span>
            <span className="role">Front-End Developer</span>
          </div>
        </div>
        </div>

      {/* ── RIGHT: penguin that bleeds out of section ── */}
      <div className="home-penguin-wrap">
        <img src={valPfp} alt="Val the Penguin" className="home-penguin-img" />
      </div>

    </section>
  );
}

export default Home;