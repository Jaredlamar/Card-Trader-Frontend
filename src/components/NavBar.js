import React from 'react'

function NavBar() {
  return (
    <div className='topnav'>
      <a class="active" href="#home">H O M E</a>
      <a href="#news">S E L L</a>
      <a href="#contact">P A S T {`${"__"}`} P U R C H A S E S</a>
    </div>
  )
}

export default NavBar