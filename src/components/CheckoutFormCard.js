import React from "react";

function CheckoutFormCard({displayedCard}) {

    

    return (
        <>
        <div id="checkout-card" className="card">
            <img src={displayedCard.image} className="card-img-top" id="checkout-img" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{displayedCard.card_name}</h5>
                <p className="card-text">${displayedCard.price}</p>
            </div>
        </div>
        </>
    )
}

export default CheckoutFormCard