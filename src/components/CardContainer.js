import React from 'react'
import Cards from './Cards'



function CardContainer({cards}) {
  const renderedCards = cards.map(card=>{
    return <ul className='cards'><Cards key={card.id} card={card}/></ul>
  })
  return (
    <div>{renderedCards}</div>
  )
}

export default CardContainer