import React from 'react'

function Cards({card}) {
  console.log(card)
  return (
    <div>
      <img src={card.image}/>
      <p> {card.card_name}</p>
      <p> {card.price}</p>
      <p> {card.seller_id}</p>
    </div>
  )
}

export default Cards