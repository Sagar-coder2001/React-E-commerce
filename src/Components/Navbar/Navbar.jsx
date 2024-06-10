import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.css"
import { white , dark } from '../../Features/changeTheme';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  const [humberger, sethumberger] = useState(false);
  const current = useSelector((state) => state.theme.navbar )
  const textcolors = useSelector((state) => state.theme.textcolor)
  const dispatch = useDispatch();
  const changeTheme = () => {
    if(current == 'black'){
      dispatch(white())
    }
    else{
      dispatch(dark())
    }
  }
  const toggle = () => {
    sethumberger(!humberger)
  }
  return (
    <>
      <header >
        <nav style={{backgroundColor : current}}>
          <div className='left'>
            <img src="https://img.freepik.com/free-vector/instagram-shop-logo-design_23-2149750724.jpg?size=626&ext=jpg" alt="" />
            <a href="">E-Commerce</a>
          </div>
          <div className='middle' id={humberger ? "nav" : ""} >
            <div>
              <ul style={{backgroundColor : current}}>
                <Link to='/'><li><a href='#' style={{color:textcolors}}>Home</a></li></Link>
                <li><a href='#' style={{color:textcolors}}>All Products</a></li>
                <li><a href='#' style={{color:textcolors}}>Service</a></li>
                <li><a href='#' style={{color:textcolors}}>Gallery</a></li>
                <li><a href='#' style={{color:textcolors}}>Contact-us</a></li>
              </ul>
            </div>
            <i className="fa-solid fa-bars" style={{color : textcolors}} onClick={toggle}></i>
          </div>
          <div className='right'>
            <Link to='/cart'>
            <i className = "fa-solid fa-cart-shopping">
            </i>
              <span className='cartquantity'>0</span>
            </Link>
            <Link to='/loginform'>
              <a href="">Login</a>
            </Link>
            <i className="fa-solid fa-moon" onClick={changeTheme} style={{color:textcolors,cursor : 'pointer'}}></i>
          </div>
        </nav>
      </header>
    </>
  )
}
