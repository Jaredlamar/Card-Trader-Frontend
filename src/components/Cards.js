import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import soldImg from "./soldimg.png"



function Cards({card, setSelectedCard, selectedCard}) {

  let navigate = useNavigate();

  // function handleBuyClick(e) {
  //   let myCard = e.target.id
  //   setSelectedCard(myCard)
    
    
  //   console.log(myCard)
  //   // navigate("/checkout")
  // }

  function handleBuyClick() {
    // console.log("from cards:" ,card.id)
    setSelectedCard(selectedCard = card.id)
    navigate(`/checkout`);
  }


  
  return (
    <>
    {card.buyer_id ? 

    <div className="card">
      
        <img src={card.image} className="card-img-top" alt="..."></img>
        <div className="sold-card-body">
          <h5 id="sold-header">S O L D</h5>
          <h5 className="sold-card-title">{card.card_name}</h5>
          <p className="sold-card-text">${card.price}</p>
          <button onClick={handleBuyClick} id={card.id} href="/checkout" className="disabled-btn" disabled>Buy</button>
        </div>
      
    </div> : 
    <div className="card">
    <img src={card.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
       <h5 className="card-title">{card.card_name}</h5>
       <p className="card-text">${card.price}</p>
       <button onClick={handleBuyClick} id={card.id} href="/checkout" className="btn-btn-primary">Buy</button>
    </div>
  </div>}
    </>
  )
}

export default Cards

        
   