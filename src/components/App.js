import '../App.css';
import React, { useState, useEffect,  } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import SellerForm from './SellerForm';
import PastPurchases from "./PastPurchases"
import CheckoutForm from "./CheckoutForm";
import ErrorPage from './ErrorPage';
import CheckoutFormCard from './CheckoutFormCard';



function App() {




const [selectedCard, setSelectedCard] = useState()
const [displayedCard, setDisplayedCard] = useState({})
const [toggleState, setToggleState] = useState([])
const [purchasedCard, setPurchasedCard] = useState([])
const [cards , setCards] = useState([]);


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
  // console.log("from app: ", e.target.id)
  fetch(`http://localhost:9292/cards/${e.target.id}`, {
      method: "DELETE"
  })
  .catch( error => console.log(error.message));
}




  return (
    <div className="App">

      <Router>
        <Routes>
          
          
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<HomePage cards={cards} setSelectedCard={setSelectedCard} selectedCard={selectedCard}/>} />
          <Route path="/sell" element={<SellerForm />}/>
          <Route path="/past-purchases" element={<PastPurchases displayedCard={displayedCard} purchasedCard={purchasedCard} handleDelete={handleDelete} />} />
          <Route path="/checkout" element={<CheckoutForm setToggleState={setToggleState} displayedCard={displayedCard} setDisplayedCard={setDisplayedCard} selectedCard={selectedCard} />} />
          <Route path="*" element={<ErrorPage />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
