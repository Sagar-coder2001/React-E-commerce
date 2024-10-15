import React, { useState } from 'react';
import "./Loginform.css";
import Layout from '../../Components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout, userlogin } from '../../Features/Userslice';



function Loginform() {

  const dispatch = useDispatch();

  const bgcolor = useSelector((state) => state.theme.value);
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const showLoginData = (e) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const allowLogin = async (e) => {
    e.preventDefault();
    if (login.email === '' || login.password === '') {
      alert('Please fill all required fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost/Ecommercephp/login.php', login, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      let showemail;
      let userid;
      let username;
      if (response) {
        // alert('Login successful');
        if(response.data.success === true){
          console.log(response.data)

          dispatch(userlogin());  

          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('showemail', showemail);
          localStorage.setItem("userid",userid);
          localStorage.setItem("username",username);

          navigate('/');
          
        }else{
          alert('Invalid Credentials')
          dispatch(logout());
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('User not found');

      } else {
        alert('Error logging in');
      }
    }
  };



  return (
    <>
        <Layout>
        <div className='loginform-container'>
          <div className="form-container">
            <h2>login</h2>
            <img src="https://th.bing.com/th?id=OIP.mrfb_atnkblnmsDiAbLNKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Login" />
            <form autoComplete='off' action='Ecommercephp/login.php' onSubmit={allowLogin} method='post' >
              <span className='create'>
                Don't Have An Account? <Link to="/SignupForm">Create Account</Link>
              </span>
              <div className='input-container'>
                <input
                  type='email'
                  value={login.email}
                  placeholder='Email'
                  className="form-control"
                  onChange={showLoginData}
                  name='email'
                />
              </div>
              <div className='input-container'>
                <input
                  type='password'
                  value={login.password}
                  placeholder='Password'
                  className="form-control"
                  onChange={showLoginData}
                  name='password'
                />
                <span className='forgetpass'><a href="#">Forget Password</a></span>
              </div>
              <div className='login-container'>
                <button className='login' id='login' type='submit'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

// Exporting the UserContext for other components to use

export default Loginform;
