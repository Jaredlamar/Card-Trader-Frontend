import React from "react";

function PurchasedCards({pCard, handleDelete}) {

    return (
        <>
        <div id="checkout-card" className="card">
           <img src={pCard.image} className="card-img-top" id="checkout-img" alt="..."></img>
           <div className="card-body">
               <h5 className="card-title">{pCard.card_name}</h5>
               <button className="btn-btn-primary" onClick={handleDelete} id={pCard.id}>DELETE</button>
           </div>
      </div>
        </>
    )
}

export default PurchasedCards