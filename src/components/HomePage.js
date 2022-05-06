import NavBar from './NavBar'
import Header from './Header'
import CardContainer from './CardContainer'
import React from 'react'
import video2 from "./yugioh.mov"

function HomePage( {cards, setSelectedCard, selectedCard, bid, setBid} ) {

  

  return (
    <>
    <div><Header/></div>
    <div><NavBar /></div>
    <video src={video2} autoPlay loop muted id="background-video"></video>
    <div><CardContainer setSelectedCard={setSelectedCard} selectedCard={selectedCard} cards={cards} bid={bid} setBid={setBid}/></div>
    
    </>
  )
}

export default HomePage