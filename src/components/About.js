import React, { useEffect } from "react";
import '../style/About.css';

const About = () => {
    useEffect(() => {
        const app = document.querySelector('div.app');
        app.setAttribute('id', 'about');
    }, [])

    return (
        <div className="about-container">
            <div className="about-content">
            <h1>About Amity</h1>
            <p>I'm a professional rock climber. I live as a nomad, traveling to climbing destinations throughout the western US with my husband, Connor. Our home: a cargo van we built out nearly 5 years ago.</p>
            <p>My favorite climbing zones: Yosemite, CA, and Indian Creek, UT.</p>
            <p>I graduated with a Master's in Sports Nutrition from the University of Colorado at Colorado Springs in December 2021.</p>
            <p>I'm excited to combine my passion for climbing and nutrition knowledge to empower fellow athletes to reach peak performance while preserving long-term health.</p>
            </div>
        </div>
    )
}

export default About;