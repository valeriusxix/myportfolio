import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../assets/image.png';

const NAV_LINKS = [
    { id: 'home',          label: 'Home'          },
    { id: 'about',         label: 'About'         },
    { id: 'PoW',           label: 'Proof of Work' },
    { id: 'contact',       label: 'Contact'       },
];

const SECTION_IDS = NAV_LINKS.map(link => link.id);

function NavBar() {
    const [activeId, setActiveId] = useState('home');

    // Scroll-spy — watches which section is in the middle of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                rootMargin: '-40% 0px -40% 0px', // only fires when section hits vertical center
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        SECTION_IDS.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="nav-scene">
            <div className="nav-wrapper">
                <div className="nav-glow nav-glow--left" />
                <div className="nav-glow nav-glow--right" />
                <div className="nav-reflect nav-reflect--left" />
                <div className="nav-reflect nav-reflect--right" />
                <div className="nav-border">
                    <nav className="navbar">
                        <div className="logo">
                            <img src={logo} alt="val's logo" />
                        </div>
                        <div className="nav-divider" />
                        <div className="nav-links">
                            {NAV_LINKS.map(({ id, label }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`nav-item${activeId === id ? ' nav-item--active' : ''}`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;