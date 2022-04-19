import React from "react";
import { useState } from "react"

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
  //   console.log("submitted")
  //  fetch("http://localhost:9292/seller"`, {
  //      method: "POST",
  //      headers: {
  //          "Content-Type": "application/json",
  //          Accept: "application/json"
  //      },
  //      body: JSON.stringify({
  //          name: sellerFormState.name,
  //          phone_number: sellerFormState.phone_number
  //      })
  //  })
  //  .then( res => res.json())
  //  .then( data => setSellerFormState({...sellerFormState, data}))
  //  .catch( error => console.log(error.message));
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
   .then( data => console.log(data))
   .catch( error => console.log(error.message));
    console.log("submitted")
  }



  return (
    <div>
      <h2>Sell Your Yu-Gi-Oh Card!</h2>
      {toggle ? 
      <form onSubmit={handleSellerFormSubmit}>
        <label for="name-input">Your Name:</label>
        <input id="name-input" type="text" name="name" placeholder="Your Name" onChange={handleSellerInputChange} value={sellerFormState.name}></input>
        <label for="phone-input">Your Phone Number:</label>
        <input id="phone-input" type="text" name="phone_number" placeholder="Your Phone Number" onChange={handleSellerInputChange} value={sellerFormState.phone_number}></input>
        <button type="submit">Submit</button>
      </form> 
      : 
      <>
      <form onSubmit={handleCardFormSubmit}>
        <label for="card-name-input">Card Name:</label>
        <input id="card-name-input" type ="text" name="card_name" placeholder="Card Name" onChange={handleCardInputChange} value={cardFormState.card_name}></input>
        <label for="image-input">Image:</label>
        <input id="image-input" type ="text" name="image" placeholder="Image" onChange={handleCardInputChange} value={cardFormState.image}></input>
        <label for="price-input">Price:</label>
        <input id="price-input" type ="number" name="price" placeholder="Price" onChange={handleCardInputChange} value={cardFormState.price}></input>
        <button type="submit">List your card!</button>
      </form>
      </>
      }
    </div>
  )
}

export default SellerForm