import React, { useEffect, useState } from 'react'
import PurchasedCards from "./PurchasedCards"
import VideoHeader from './VideoHeader'
import NavBar from './NavBar'



function PastPurchases({purchasedCard, handleDelete}) {


  console.log("from purchases: ", purchasedCard)

  const mappedPurchases = purchasedCard.map((pCard) => {

   return <PurchasedCards key={pCard.id} pCard={pCard} handleDelete={handleDelete} />

  })

  return (
    <div>
      <VideoHeader />
      <NavBar />
      <div id="please-work-div">
      <div id="card-container" className="container">
        <div className="row">
          <div className="col-6">
          <h2 className="checkout-header">You Purchased: </h2>
          </div>
      
          <div id="second-column" className="col-6">
          {mappedPurchases}
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default PastPurchases