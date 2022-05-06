import React from 'react';
import { useNavigate } from "react-router-dom";




function Cards({card, setSelectedCard, selectedCard, bid, setBid}) {

  let navigate = useNavigate();

  function handleBuyClick() {
    setSelectedCard(selectedCard = card.id)
    navigate(`/checkout`);
  }
  

  function handleBidClick() {
    setBid(bid = card.id)
    navigate("/bid")
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
       <p id="card-price" className="card-text">Price: ${card.price}</p>
      
        {card.bid1 ? <p className="card-text">Bid: ${card.bid1}</p> : null}
        {card.bid2 ? <p className="card-text">Bid: ${card.bid2}</p> : null}
        {card.bid3 ? <p className="card-text">Bid: ${card.bid3}</p> : null}

       
       <button onClick={handleBidClick} id={card.id} href="/checkout" className="btn-btn-primary">Bid</button>
       <button onClick={handleBuyClick} id={card.id} href="/checkout" className="btn-btn-primary">Buy</button>
    </div>
  </div>}
    </>
  )
}

export default Cards

        
   