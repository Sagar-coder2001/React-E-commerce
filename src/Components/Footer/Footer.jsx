import React from 'react';
import './Footer.css';
import { useSelector } from 'react-redux';

export default function Footer() {
  const gbcolor = useSelector((state) => state.theme.navbar);
  const textcolor = useSelector((state) => state.theme.textcolor);
  const tempp = useSelector((state) => state.simple.value);
  console.log(tempp)




  return (
    <>
      <div className="footer-container" style={{ backgroundColor: gbcolor, color: textcolor }}>
        <h3>Footer</h3>
        <footer className="footer">
          <div className="row">
            <div className="footer-col">
              <h4 style={{ color: textcolor }}>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Affiliate Program</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ color: textcolor }}>Get Help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Payment Options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ color: textcolor }}>Online Shop</h4>
              <ul>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Bag</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Dress</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ color: textcolor }}>Follow Us</h4>
              <p></p>
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
  );
}
