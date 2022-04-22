import React from "react";

function PurchasedCards({pCard, handleDelete}) {

    // function handleDelete(e) {
    //     // console.log(e.target.id)
    //     fetch(`http://localhost:9292/cards/${e.target.id}`, {
    //         method: "DELETE"
    //     })
    //     .catch( error => console.log(error.message));
    // }

    // function deleteClick()
    // console.log(handleDelete)

    return (
        <>
        <div id="checkout-card" className="card">
           <img src={pCard.image} className="card-img-top" id="checkout-img" alt="..."></img>
           <div className="card-body">
               <h5 className="card-title">{pCard.card_name}</h5>
               <p className="card-text">${pCard.price}</p>
               <button onClick={handleDelete} id={pCard.id}>D ELETE</button>
           </div>
      </div>
        </>
    )
}

export default PurchasedCards