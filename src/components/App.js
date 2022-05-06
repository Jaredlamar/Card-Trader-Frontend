import '../App.css';
import React, { useState, useEffect,  } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import SellerForm from './SellerForm';
import PastPurchases from "./PastPurchases"
import CheckoutForm from "./CheckoutForm";
import BidForm from './BidForm';
import ErrorPage from './ErrorPage';




function App() {




const [selectedCard, setSelectedCard] = useState()
const [displayedCard, setDisplayedCard] = useState({})
const [toggleState, setToggleState] = useState([])
const [purchasedCard, setPurchasedCard] = useState([])
const [cards , setCards] = useState([]);
const [bid, setBid] = useState(0);
const [userBid, setUserBid] = useState(0);

useEffect(()=>{
  fetch(`http://localhost:9292/cards`)
  .then( res => res.json())
  .then( data => setCards(data))
  .catch(error => alert("404", error));
},[toggleState])


useEffect(() => {
  fetch("http://localhost:9292/purchases")
  .then( res => res.json())
  .then( data => setPurchasedCard(data))
  .catch( error => console.log(error.message));
}, [])

function handleDelete(e) {
  fetch(`http://localhost:9292/cards/${e.target.id}`, {
      method: "DELETE"
  })
  .catch( error => console.log(error.message));
}

function handleBidSubmit(e) {
  
    e.preventDefault()

    console.log("bid from patch: ", bid)
    console.log("userBid from patch: ", userBid)
    fetch(`http://localhost:9292/bid/${bid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
          bid3: userBid
        })
    })
    .then(res => res.json())
    .then(data => console.log("from patch: ", data))
}




  return (
    <div className="App">

      <Router>
        <Routes>
          
          
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<HomePage cards={cards} setSelectedCard={setSelectedCard} selectedCard={selectedCard} bid={bid} setBid={setBid}/> } />
          <Route path="/sell" element={<SellerForm />}/>
          <Route path="/past-purchases" element={<PastPurchases displayedCard={displayedCard} purchasedCard={purchasedCard} handleDelete={handleDelete} />} />
          <Route path="/checkout" element={<CheckoutForm setToggleState={setToggleState} displayedCard={displayedCard} setDisplayedCard={setDisplayedCard} selectedCard={selectedCard} />} />
          <Route path="/bid" element={<BidForm bid={bid} setBid={setBid} userBid={userBid} setUserBid={setUserBid} handleBidSubmit={handleBidSubmit} />} />
          <Route path="*" element={<ErrorPage />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
