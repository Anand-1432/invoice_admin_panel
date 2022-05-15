import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const Navbar = () => {

  const [state, setState] = useState(false)

  const show = () => {
    let l = document.getElementById("sideBar");
    if (l.style.marginLeft === "0px") {
      l.style.marginLeft = "-260px"
    } else {
      l.style.marginLeft = "0px"
    }
  }

  return (
    <>
      <div id='sideBar'>
        <details>
          <summary><span>Forms</span></summary>
          <Link className='link' to="/products"><p> Product </p></Link>
          <Link className='link' to="/product_guide"><p> Product Guide </p></Link>
          <Link className='link' to="/brands"><p> Brand </p></Link>
          <Link className='link' to="/brand_service"><p> Service Center </p></Link>
          <Link className='link' to="/sellers"><p> Seller </p></Link>
          <Link className='link' to="/users"><p> User </p></Link>
          <Link className='link' to="/invoice"><p> Invoice </p></Link>
        </details>
      </div>

      {/* sideBar//////////////////////////////////////////////////////////////////////    */}

      <div className='navbar'>
        <p>Invoicify</p>
        <button className='btn' onClick={() => { show(); setState(!state) }}>
          {state ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </>
  )
}

export default Navbar