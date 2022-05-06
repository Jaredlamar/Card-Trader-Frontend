import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import VideoHeader from "./VideoHeader";

function SellerForm() {

  ///SETTING STATE///

  const [sellerFormState, setSellerFormState] = useState({
      name: "",
      phone_number: 0
  })

  const [cardFormState, setCardFormState] = useState({
      card_name: "",
      image: "",
      price: 0,
      buyer_id: null,
      seller_id: null
  })

  const [toggleH2, setToggleH2] = useState(true)


  ///TOGGLING FORMS///

  const [toggle, setToggle] = useState(true)

  function toggleForm() {
    setToggle(!toggle)
  }



  ///SELLER FORM///



  function handleSellerInputChange(e) {
    const newSellerFormState = {...sellerFormState, [e.target.name]: e.target.value}
    setSellerFormState(newSellerFormState)
  }

  function handleSellerFormSubmit(e) {
    e.preventDefault()
    toggleForm()
  }



  ////CARD FORM/////

  function handleCardInputChange(e) {
    const newCardFormState = {...cardFormState, [e.target.name]: e.target.value}
    setCardFormState(newCardFormState)
  }

  function handleCardFormSubmit(e) {
    e.preventDefault()
   fetch("http://localhost:9292/cards", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
       },
       body: JSON.stringify({
           card_name: cardFormState.card_name,
           image: cardFormState.image,
           price: cardFormState.price
       })
   })
   .then( res => res.json())
   .then( data => setCardFormState(data))
   .catch( error => console.log(error.message));
   setCardFormState({
     card_name: "",
     image: "",
     price: 0,
     buyer_id: null,
     seller_id: null
    })
    setToggleH2(() => !toggleH2)
  }

  return (
    <div>
      <VideoHeader />
      <NavBar />
      {toggleH2 ? <h2 id="sell-header">SELL YOUR YU-GI-OH CARD!</h2> : <h2 id="card-listed-header">YOUR CARD HAS BEEN LISTED SUCCESSFULLY!<br></br>PLEASE NAVIGATE HOME TO VIEW YOUR LISTING</h2>}
      {toggle ? 
      <form className="sell-form" onSubmit={handleSellerFormSubmit}>
        <div className="row">
          <div className="col">
            <label className="form-text" htmlFor="name-input">Your Name:</label>
            <input id="name-input" className="form-input" type="text" name="name" placeholder="Your Name" onChange={handleSellerInputChange} value={sellerFormState.name}></input>
            <label className="form-text" htmlFor="phone-input">Your Phone Number:</label>
            <input id="phone-input" className="form-input" type="text" name="phone_number" placeholder="Your Phone Number" onChange={handleSellerInputChange} value={sellerFormState.phone_number}></input>
          </div>
          <button type="submit" className="form-btn">Continue</button>
        </div>
      </form> 
      : 
      <>
      <form className="sell-form" onSubmit={handleCardFormSubmit}>
        <label className="form-text" htmlFor="card-name-input">Card Name:</label>
        <input id="card-name-input" className="form-input" type ="text" name="card_name" placeholder="Card Name" onChange={handleCardInputChange} value={cardFormState.card_name}></input>
        <label className="form-text" htmlFor="image-input">Image:</label>
        <input id="image-input" className="form-input" type ="text" name="image" placeholder="Image" onChange={handleCardInputChange} value={cardFormState.image}></input>
        <label className="form-text" htmlFor="price-input">Price:</label>
        <input id="price-input" className="form-input" type ="number" name="price" placeholder="Price" onChange={handleCardInputChange} value={cardFormState.price}></input>
        <button id="sell-card-btn" type="submit" className="form-btn">List your card!</button>
      </form>
      </>
      }
    </div>
  )
}

export default SellerForm