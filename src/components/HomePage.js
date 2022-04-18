import {useState,useEffect} from 'react'
import NavBar from './NavBar'
import Header from './Header'
import CardContainer from './CardContainer'
import React from 'react'

function HomePage() {
    const [cards,setCards]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/cards`)
        .then( res => res.json())
        .then( data => setCards(data))
        .catch( error => console.log(error.message));
    },[])

  return (
    <>
    <div><Header/></div>
    <div><NavBar /></div>
    <div><CardContainer cards={cards}/></div>
    </>
  )
}

export default HomePage