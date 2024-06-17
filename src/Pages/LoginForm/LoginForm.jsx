import React, { useState } from 'react';
import "./Loginform.css";
import Layout from '../../Components/Layout/Layout';
import { Link , Navigate, useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';

function Loginform() {
  const bgcolor = useSelector((state) => state.theme.value)
  const [login , setLogin] = useState({
    username : '',
    password : ''
  })
  const navigate = useNavigate();

  const showLoginData = (e) =>{
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const allowLogin = () => {
    let loginData = JSON.parse(localStorage.getItem('signupData'));
    console.log(loginData)
    for(let i = 0; i < loginData.length; i++){
      if(login.username === loginData[i].username && login.password === loginData[i].password){
        alert('Login Successfull')
        checkcart('true')
        navigate('/home');
        clearlogin();
        return true;
      }
      else{
        alert('User Not Found')
        return false;
      }

    }
  }

  const clearlogin = () => {
    setLogin({
      username : '',
      password : ''
    })
  }

  const checkcart = (val) => {
    let showlogin =JSON.stringify(localStorage.setItem("showlogin", val));
  }
   return (
    <>
    <Layout>
    <div className='loginform-container'>
      <div className="form-container">
      <h2>Login</h2>
      <img src="https://th.bing.com/th?id=OIP.mrfb_atnkblnmsDiAbLNKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
      <form action="" autoComplete='off'>
        <span className='create'>Dont Have An Account <a href=""><Link to = "/SignupForm">Create Account</Link></a></span>
        <div className='input-container'>
          <input type='text' value={login.username} placeholder='Username'className="form-control" onChange={showLoginData} name='username'></input>
        </div>
        <div className='input-container'>
          <input type='password'  value={login.password} placeholder='password'className="form-control" onChange={showLoginData} name='password'></input>
          <span className='forgetpass'><a href="#">Forget Password</a></span>
        </div>
        <div className='login-container'>
          <button className='login' id='login' onClick={allowLogin}>Login</button>
        </div>
      </form>
    </div>
    </div>
    </Layout>
    </>
  )
}

export default Loginform
