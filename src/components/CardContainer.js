import React from 'react'
import Cards from './Cards'

function CardContainer({cards}) {
  const renderedCards = cards.map(card=>{
    return <Cards key={card.id} card={card}/>
  })
  return (
    <div>{renderedCards}</div>
  )
}

export default CardContainer