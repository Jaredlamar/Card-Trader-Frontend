import React from 'react'
import Cards from './Cards'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


function CardContainer({cards}) {
  const renderedCards = cards.map(card=>{
    return <ul className='cards'><Cards key={card.id} card={card}/></ul>
  })
  return (
    <div>{renderedCards}</div>
  )
}

export default CardContainer