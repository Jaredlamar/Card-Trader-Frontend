import React from 'react'

function Cards({card}) {
  console.log(card)
  return (
    <div className="card">
      <img src={card.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
         <h5 className="card-title">{card.card_name}</h5>
         <p className="card-text">${card.price}</p>
         <a href="#" className="btn btn-primary">Buy</a>
      </div>
    </div>
  )
}

export default Cards
