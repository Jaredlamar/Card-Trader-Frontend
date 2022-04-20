import React from 'react'
import Cards from './Cards'



function CardContainer({cards}) {
  const renderedCards = cards.map(card=>{
    return <Cards key={card.id} card={card}/>
  })

  // console.log("keys: ", renderedCards)

  const allCards = renderedCards.map((card) => {
    return card
  })

  const realFirstHalf = allCards.filter((card) => {
    return card.key <= 5
  })

  const realSecondHalf = allCards.filter((card) => {
    return card.key > 5
  })

  



  return (
    <div id="please-work-div">
    <div id="card-container" className="container">
      <div className="row">
        <div className="col-6">
          {realFirstHalf}
        </div>
      
        <div id="second-column" className="col-6">
          {realSecondHalf}
        </div>
        </div>
    </div>
    </div>
  )
}

export default CardContainer