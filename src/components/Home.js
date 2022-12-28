import React, { useEffect } from "react";
import '../style/Home.css';

const Home = ({ photo }) => {
    useEffect(() => {
        const app = document.querySelector('div.app');
        app.removeAttribute('id');

        photo(0);
    }, [photo])
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Athlete</h1>
                <h1>Dietician</h1>
            </div>
        </div>
    )
}

export default Home;