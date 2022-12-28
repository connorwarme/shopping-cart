import React from "react";
import GitHub from "../imgs/github.svg";
import LinkedIn from "../imgs/linkedin.svg";
import "../style/Footer.css";

const Footer = ({data}) => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let value = params.some_key; // "some_value"
    console.log(value);
    const action = () => {
        console.log(params);
        console.log(value);
    }

    return (
        <div className="footer-container"> 
            <div className="footer-content">
                <p>Photographer: {action()}</p>
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