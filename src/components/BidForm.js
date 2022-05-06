import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import VideoHeader from "./VideoHeader";
import NavBar from "./NavBar";


function BidForm( {bid, userBid, setUserBid, handleBidSubmit} ) {

    let navigate = useNavigate();


    // const [userBid, setUserBid] = useState(0);

    function handlebidInput(e) {
        setUserBid(e.target.value)
    }

    return (
        <>
        <VideoHeader />
        <NavBar />
        <form onSubmit={handleBidSubmit} className="buy-form">
            <label id="bid-label" for="bid-input" className="buy-form-text">Enter Your Bid</label>
            <input onChange={handlebidInput} id="bid-input" type="number" placeholder="Your Bid" value={userBid} className="buy-form-input"></input>
            <button className="btn-btn-primary" type="submit">submit</button>
        </form>
        </>
    )
}

export default BidForm