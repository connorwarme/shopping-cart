import React, { useEffect } from "react";
import '../style/Home.css';

const Home = () => {
    useEffect(() => {
        const app = document.querySelector('div.app');
        app.removeAttribute('id');
    }, [])
    return (
        <div className="home">
            <h1>Home</h1>
        </div>
    )
}

export default Home;