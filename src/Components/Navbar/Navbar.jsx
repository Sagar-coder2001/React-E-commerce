import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.css"
import { white , dark } from '../../Features/changeTheme';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  const [humberger, sethumberger] = useState(false);
  const [changeicon , setChangeicon] = useState(true)
  const bgcolor = useSelector((state) => state.theme.navbar )
  const textcolors = useSelector((state) => state.theme.textcolor)
  const totalQuantity = useSelector((state) => state.addproduct.totalQuantity);
  const dispatch = useDispatch();
  const changeTheme = () => {
    if(bgcolor == 'black'){
      dispatch(white());
      setChangeicon(false)
    }
    else{
      dispatch(dark())
      setChangeicon(true)
    }
  }
  const toggle = () => {
    sethumberger(!humberger)
  }

  return (
    <>
      <header >
        <nav style={{backgroundColor : bgcolor}}>
          <div className='left'>
            <img src="https://img.freepik.com/free-vector/instagram-shop-logo-design_23-2149750724.jpg?size=626&ext=jpg" alt="" />
            <a href="">E-Commerce</a>
          </div>
          <div className='middle' id={humberger ? "nav" : ""} >
            <div>
              <ul style={{backgroundColor : bgcolor}}>
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
            <i className = "fa-solid fa-cart-shopping carticon">
              <span className='cartquantity' style={{color : textcolors}}>{totalQuantity}</span>
            </i>
            </Link>
            <Link to='/loginform'>
              <a href=""><i className='fa fa-user'></i></a>
            </Link>
            <i className={changeicon == true ? "fa fa-moon" :  "fa fa-sun" } onClick={changeTheme} style={{color:textcolors,cursor : 'pointer'}}></i>
          </div>
        </nav>
      </header>
    </>
  )
}
