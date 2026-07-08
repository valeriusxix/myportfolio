import React, { useEffect, useRef }from "react";
import puzzlesLogo from '../assets/logos/puzzles.png'
import odysseaaiLogo from '../assets/logos/odysseaai.png'
import webesLogo from '../assets/logos/webes.png'
import skycastLogo from '../assets/logos/skycast.png'
import './PoW.css'


function PoW () {
     const sectionRef = useRef(null);
    
      // Trigger fade-in when section scrolls into view
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              sectionRef.current?.classList.add('PoW--visible');
            }
          },
          { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
      }, []);

      return(
         <section className="PoW-container" id="PoW" ref={sectionRef}>

     {/* Header */}
      <div className="PoW-header">
        <h2 className="PoW-eyebrow">Proof Of Work </h2>

        <div className="PoW-divider" />
      </div>
      
      {/* PoW Display Section */}
      <div className="PoW-section">
         <h2>A <span className="accent">Glimpse</span> into my work </h2>

      <div className="PoW-grid">

            <div className="project-role-card">

             <img src={puzzlesLogo} alt="Puzzles Crusade Logo" />
             <h3>Puzzles Crusade </h3>
             <p>Ambassador & SMM </p>

             <ul>
              <li>Created contents tailored to educate audiences and promote the brand's image</li>
              <li>Drove measurable audience growth, scaling the official account follower's count by over 20% through tailored and structured systems </li>
              <li>Contributed significantly to the overall mindshare growth of the project</li>
             </ul>

          </div>

          <div className="project-role-card">

            <img src={odysseaaiLogo} alt="Odyssea AI Logo" />
            <h3>Odyssea AI</h3>
            <p>SMM & Community Manager</p>

           <ul>
            <li>Grew the brand's presence on X by consistently creating contents for targeted audience </li>
             <li> Scaled the  X account's presence and grew the followers count by more than 30% through structured campaigns and strategies</li>
             <li>Designed and executed strategies that grew the project's community on telegram</li>
           </ul>

          </div>

          
          <div className="project-role-card">

             <img src={webesLogo} alt="Webes gng Logo" />
             <h3>Webes gng </h3>
             <p>SMM</p>

             <ul>
             <li>Grew the community's presence on X by consistently creating community centric contents </li>
             <li>Helped organize whitelist raffles and community collaborations with nft projects</li>
             <li>Leveraged founder's influence and engagment strategies... scaling overall analytic metrics by over 10,000% in under a month</li>
             <li>Grew the page from under 200 followers to 400+ within 1 month</li>
             </ul>

          </div>
              
               <div className="project-role-card">

             <img src={skycastLogo} alt="Skycast Logo" />
             <h3>Skycast Weather App</h3>
             <p>Full-stack Developer</p>

             <ul>
             <li>Designed and implemented the user interface for the Skycast Weather App</li>
             <li>Developed the frontend using ReactJS, ensuring a responsive and user-friendly experience</li>
             <li>Integrated with the backend API to fetch and display weather data</li>
             </ul>

          </div>

          </div>
     </div>

         </section>
      )

}

export default PoW;