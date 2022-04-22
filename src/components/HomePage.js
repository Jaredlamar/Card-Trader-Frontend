import {useState,useEffect} from 'react'
import NavBar from './NavBar'
import Header from './Header'
import CardContainer from './CardContainer'
import React from 'react'
import video2 from "./yugioh.mov"

function HomePage( {cards, setSelectedCard, selectedCard} ) {
    

    // useEffect(()=>{
    //     fetch(`http://localhost:9292/cards`)
    //     .then( res => res.json())
    //     .then( data => setCards(data))
    //     .catch(error => alert("404 error"));
    // },[])

  return (
    <>
    <div><Header/></div>
    <div><NavBar /></div>
    <video src={video2} autoPlay loop muted id="background-video"></video>
    <div><CardContainer setSelectedCard={setSelectedCard} selectedCard={selectedCard} cards={cards}/></div>
    
    </>
  )
}

export default HomePage