import React from 'react'
import './Footer.css'
import { useDispatch , useSelector , } from 'react-redux'

export default function Footer() {
  const gbcolor = useSelector((state) => state.theme.navbar)
  let textcolor = useSelector((state) => state.theme.textcolor)

  

  return (
    <>
    <div className="footer-container" style={{backgroundColor : gbcolor , color : textcolor}}>
      <h3>Footer</h3>
      <footer className="footer">
      <div className="row">
        <div className="footer-col">
          <h4 style={{color : textcolor}}>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{color : textcolor}}>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{color : textcolor}}>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{color : textcolor}}>follow us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
  </footer>
    </div>
    
    </>
  )
}
