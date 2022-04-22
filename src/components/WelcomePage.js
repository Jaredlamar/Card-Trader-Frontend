import React from "react";
import { useNavigate } from "react-router-dom";
import video from "./yu-gi-oh.mp4";
import video2 from "./yugioh.mov"

function WelcomePage() {

    let navigate = useNavigate();

    return (
        <section id="welcome-section">
            <button id="welcome-button" onClick={() => navigate("/main")}>Enter Yu-Gi-Bay</button>
            <video src={video2} autoPlay loop muted id="background-video"></video>
        </section>
    )
}


export default WelcomePage