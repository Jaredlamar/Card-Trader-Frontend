import React from 'react'
import { useNavigate } from "react-router-dom";

function NavBar() {

  let navigate = useNavigate();

  return (
    <div className='topnav'>
      <a onClick={() => navigate("/main")} className="active" href="/main">H O M E</a>
      <a onClick={() => navigate("/sell")} href="/sell">S E L L</a>
      <a onClick={() => navigate("/past-purchases")} href="/past-purchases">P A S T {`${"__"}`} P U R C H A S E S</a>
    </div>
  )
}

export default NavBar

