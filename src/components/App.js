import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import SellerForm from './SellerForm';
import PastPurchases from "./PastPurchases"
import CheckoutForm from "./CheckoutForm";
import ErrorPage from './ErrorPage';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          
          
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/sell" element={<SellerForm />}/>
          <Route path="/past-purchases" element={<PastPurchases />}/>
          <Route path="/checkout" element={<CheckoutForm />}/>
          <Route path="*" element={<ErrorPage />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
