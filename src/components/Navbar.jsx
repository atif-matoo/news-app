import React from 'react'
import HamburgerDrawer from './HamburgerDrawer';
import './Navbar.css';
function Navbar({setCategory}) {
  return (
<div className="nav">

    <div className="menu">
<HamburgerDrawer setCategory={setCategory}/>
    </div>
    <img src='https://www.marketingmind.in/wp-content/uploads/2018/02/Inshorts_logo.png' alt='logo' height='70px' width='100px'
    style={{cursor:'pointer',objectFit:'contain'}} />
</div>    
  )
}

export default Navbar