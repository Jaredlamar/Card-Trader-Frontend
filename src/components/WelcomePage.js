import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {

    let navigate = useNavigate();

    return (
        <button onClick={() => navigate("/main")}>Enter our website</button>
    )
}

export default WelcomePage