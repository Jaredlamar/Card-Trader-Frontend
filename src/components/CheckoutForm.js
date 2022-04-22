import React, { useState, useEffect } from "react";
import CheckoutFormCard from "./CheckoutFormCard";
import VideoHeader from "./VideoHeader";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";


function CheckoutForm ({selectedCard, displayedCard, setDisplayedCard, setToggleState}) {

  console.log("from checkout: ", selectedCard)

  let navigate = useNavigate();

  
  // const [displayedCard, setDisplayedCard] = useState({})



  


  function handleConfirmPurchase(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/cards/${displayedCard.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
          displayedCard: displayedCard.id
        })
    })
    .then(res => res.json())
    .then(data => setToggleState(data))
    navigate("/main")
  }
      
    

  useEffect(() => {
    fetch(`http://localhost:9292/cards/${selectedCard}`)
    .then( res => res.json())
    .then( data => setDisplayedCard(data))
    .catch( error => console.log(error.message));
  }, [])



    return (
        <>
          <VideoHeader />
          <NavBar />
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h2 className="checkout-header">You Chose: </h2>
                <CheckoutFormCard displayedCard={displayedCard} />
              </div>
              <div className="col-6">
                <form onSubmit={handleConfirmPurchase} className="buy-form">
                   <label for="buy-name-input" className="buy-form-text">Your Name:</label>
                    <input id="buy-name-input" className="buy-form-input" type="text" placeholder="Name"></input>
                    <label for="buy-number-input" className="buy-form-text">Your Phone Number:</label>
                    <input id="buy-number-input" className="buy-form-input" type="number" placeholder="Phone Number"></input>
                    <label for="buy-address-input" className="buy-form-text">Your Address:</label>
                    <input id="buy-address-input" className="buy-form-input" type="text" placeholder="Address"></input>
                    <label for="buy-creditcard-input" className="buy-form-text">Credit Card Number:</label>
                    <input id="buy-creditcard-input" className="buy-form-input" type="number" placeholder="Credit Card Number"></input>
                    <button id="buy-btn" type="submit">Confirm Purchase</button>
                </form>
              </div>
            </div>
          </div>
        </>
    );
}

export default CheckoutForm;