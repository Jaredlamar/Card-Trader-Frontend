import React from 'react'

function Cards({card}) {
  console.log(card)
  return (
    <div className="wrapper">
        <div class="card">
            <img style={{width : "200px"}}src={card.image}/>
            <div class="descriptions">
                <h1>{card.card_name}</h1>
                <h1>{card.price}</h1>
                <h1>{card.seller_id}</h1>
                
                <button>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards
