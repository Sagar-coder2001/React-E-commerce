import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.css"
import { white, dark } from '../../Features/changeTheme';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Features/Userslice';
import { useNavigate } from 'react-router-dom';



export default function Navbar() {
  const userexist = useSelector((state) => state.loggedin.isLoggedIn)
  const [humberger, sethumberger] = useState(false);
  const [changeicon, setChangeicon] = useState(true)
  const bgcolor = useSelector((state) => state.theme.navbar)
  const textcolors = useSelector((state) => state.theme.textcolor)
  const totalQuantity = useSelector((state) => state.addproduct.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isusername , setUsername] = useState('');

  const changeTheme = () => {
    if (bgcolor == 'black') {
      dispatch(white());
      localStorage.removeItem('theme');
      setChangeicon(false)
    }
    else {
      dispatch(dark())
      setChangeicon(true)
    }
  }
 
  useEffect(() => {
    let username = localStorage.getItem('username');
    setUsername(username);
  })
  

  const handlelogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if(confirmLogout){
      localStorage.removeItem('isLoggedIn'); // Clear login status
      localStorage.removeItem('showemail'); // Clear login status
      localStorage.removeItem('userid');
      localStorage.removeItem('username');
      dispatch(logout()); // Dispatch logout action
      navigate('/loginform');
    }
  }

  const openUserProfile = () => {
    navigate('/SignupForm')
  }


  const handleLoginClick = () => {
    window.scrollTo(0, 0); // Scroll to top
  }

const handlehome = () => {
  window.scrollTo(0,0);
}

  return (
    <>
      <header >
        <nav style={{ backgroundColor: bgcolor }}>
          <div className='left'>
            <img src="https://img.freepik.com/free-vector/instagram-shop-logo-design_23-2149750724.jpg?size=626&ext=jpg" alt="" />
            <a href="/" onClick={handlehome}>E-Commerce</a>
          </div>
          <div className='middle'>
            <div>
              <ul style={{ backgroundColor: bgcolor }}>
                <Link to='/' onClick={handlehome}><li><a href='#' style={{ color: textcolors }}>Home</a></li></Link>
                <li><a href='#' style={{ color: textcolors }}>All Products</a></li>
                <li><a href='#' style={{ color: textcolors }}>Service</a></li>
                <li><a href='#' style={{ color: textcolors }}>Gallery</a></li>
                <li><a href='#' style={{ color: textcolors }}>Contact-us</a></li>
              </ul>
            </div>
            <i className="fa-solid fa-bars" style={{ color: textcolors }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
          </div>
          <div className='right'>
            {
              userexist ?
                <>
                  <Link to='/cart'>
                    <i className="fa-solid fa-cart-shopping carticon">
                      <span className='cartquantity' style={{ color: textcolors }}>{totalQuantity}</span>
                    </i>
                  </Link>
                  <a onClick={handlelogout} className='u_logout'>logout</a> 
                </>
                :
                <>
                  <Link to='/loginform' onClick={handleLoginClick}>
                    <a href="" className='u_login'>login</a>
                  </Link>
                </>
              
                  
            }

            <i className={changeicon == true ? "fa fa-moon" : "fa fa-sun"} onClick={changeTheme} style={{ color: textcolors, cursor: 'pointer', fontSize:'20px', margin:'0px 8px' }}></i>

            {
              userexist && (
                <span className='user-details' onClick={openUserProfile}><img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" /></span>
              )
            }

            <div class="offcanvas offcanvas-end" style={{backgroundColor:bgcolor, color:textcolors}} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title fs-3" id="offcanvasRightLabel" >E-Commerce</h5>
                <button type="button" data-bs-dismiss="offcanvas" style={{color:textcolors, backgroundColor:bgcolor}} aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
              </div>
              <div class="offcanvas-bod">
              <div>
                
                  <h2 className='mb-5'>{isusername}</h2>
                
              </div>
                  {
                    userexist && (
                      <div href="" onClick={openUserProfile}><img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" /><a>User Profile</a></div>
                    )
                  }

                <ul>
                <a href="" style={{color:textcolors}}>Home</a>
                <a href="" style={{color:textcolors}}>All Products</a>
                <a href="" style={{color:textcolors}}>Gallery</a>
                <a href="" style={{color:textcolors}}>Services</a>
                <a href="" style={{color:textcolors}}>Contact</a>
                </ul>
                {
                  userexist && (
                    <div className='u-logout' onClick={handlelogout} style={{color:textcolors}}>Logout</div>
                  )
                }
                
              </div>
            </div>
          </div>

        </nav>
      </header>
    </>
  )
}
