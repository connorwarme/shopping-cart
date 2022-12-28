import React from "react";
import GitHub from "../imgs/github.svg";
import LinkedIn from "../imgs/linkedin.svg";

const Footer = () => {
    return (
        <div className="footer-container"> 
            <div className="footer-content">
                <div className="icon-container">
                    <a href="https://github.com/connorwarme">
                        <img src={GitHub} alt="GitHub Link" />
                    </a>
                    <a href="https://www.linkedin.com/in/connor-warme-13c8">
                        <img src={LinkedIn} alt="LinkedIn Link" />
                    </a>
                </div>
                <p className="tagline">Peregrinning Productions</p>
            </div>
        </div>
    )
}

export default Footer;