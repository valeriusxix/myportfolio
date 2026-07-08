import React, { useEffect, useRef, useState } from "react";
import './Contact.css'


function Contact () {
     const sectionRef = useRef(null);
     const [formData, setFormData] = useState({ name: '', email: '', message: '' });

          // Trigger fade-in when section scrolls into view
          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  sectionRef.current?.classList.add('contact--visible');
                }
              },
              { threshold: 0.15 }
            );
            if (sectionRef.current) observer.observe(sectionRef.current);
            return () => observer.disconnect();
          }, []);

          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
          };

          const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
            // Wire up real submission logic here (API route, EmailJS, Formspree, mailto, etc.)
            setFormData({ name: '', email: '', message: '' });
          };

          return(
            <div className="contact-container" ref={sectionRef}>
                <h2>Get In Touch</h2>
                <p>Got questions? OR you require my services, feel free to reach out via any of the communication channels: </p>
               <div className="contact-grid">

                 <div className="val-socials">
                   <a href="https://x.com/_valeriusx" target="_blank" rel="noopener noreferrer" className="social-btn">Via X ( formerly Twitter )</a>
                   <a href="https://t.me/valerius_x" target="_blank" rel="noopener noreferrer" className="social-btn">Via Telegram</a>
                   <a href="mailto: valeriusonchained@gmail.com" className="social-btn">Via E-mail</a>
                 </div>

                 <form className="contact-form" onSubmit={handleSubmit}>
                   <div className="form-field">
                     <label className="form-label" htmlFor="cf-name">Your Name</label>
                     <input
                       id="cf-name"
                       name="name"
                       type="text"
                       className="form-input"
                       placeholder="Enter your name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                     />
                   </div>

                   <div className="form-field">
                     <label className="form-label" htmlFor="cf-email">Email</label>
                     <input
                       id="cf-email"
                       name="email"
                       type="email"
                       className="form-input"
                       placeholder="Enter your email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                     />
                   </div>

                   <div className="form-field">
                     <label className="form-label" htmlFor="cf-message">Message</label>
                     <textarea
                       id="cf-message"
                       name="message"
                       className="form-input form-textarea"
                       placeholder="Tell me about your project..."
                       value={formData.message}
                       onChange={handleChange}
                       required
                     />
                   </div>

                   <button type="submit" className="social-btn form-submit">
                     Send Message
                   </button>
                 </form>

               </div>

            </div>
          )
}

export default Contact; 