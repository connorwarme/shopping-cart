import React, { useEffect } from "react";
import '../style/Home.css';

const Home = () => {
    useEffect(() => {
        const app = document.querySelector('div.app');
        app.removeAttribute('id');
    }, [])
    return (
        <div className="home">

        </div>
    )
}

export default Home;