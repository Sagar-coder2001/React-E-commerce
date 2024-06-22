import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import '../LoginForm/Loginform.css'
import axios from 'axios';
const SignupForm = () => {
  const [formdata, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confpassword: ''
  })
  const showFormData = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const formSubmit = (e) => {
    e.preventDefault();
    if (formdata.username == '' || formdata.email == '' || formdata.mobile == '' || formdata.password == '') {
      alert('please filed all requird feilds')
      return false;
    }
    else if (formdata.password !== formdata.confpassword) {
      alert('password doesnt match')
    }
    else {
      try {
        // const existingData = JSON.parse(localStorage.getItem('signupData')) || [];
        // existingData.push(formdata);
        // localStorage.setItem('signupData', JSON.stringify(existingData));
        axios.post('http://localhost:3000/signup',formdata);
        setFormData({
          name: '',
          mobile: '',
          email: '',
          password: ''
        });
        alert('Details Saved Succesfully');
      }
      catch (error) {
        alert("Error Saving Details")
        console.log(error)
      }
    }
  };
  return (
    <>
      <Layout>
        <div className='loginform-container'>
          <div className="form-container">
            <h2>Sign Up</h2>
            <img src="https://th.bing.com/th?id=OIP.mrfb_atnkblnmsDiAbLNKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
            <form onSubmit={formSubmit} autoComplete='off'>
              <span className='create'>Already Have An Account <a href=""><Link to="/Loginform">Login</Link></a></span>
              <div className='input-container'>
                <input type='text' value={formdata.username} placeholder='Name :' name='name' className='form-control' onChange={showFormData}></input>
              </div>
              <div className='input-container'>
                <input type='tel' value={formdata.mobile} name='mobile' placeholder='Mobile No :' className='form-control' onChange={showFormData}></input>
              </div>
              <div className='input-container'>
                <input type='eamil' value={formdata.email} name='email' placeholder='Email :' className='form-control' onChange={showFormData}></input>
              </div>
              <div className='input-container'>
                <input type='password' value={formdata.password} name='password' placeholder='password :' className='form-control' onChange={showFormData}></input>
              </div>
              <div className='input-container'>
                <input type='password' value={formdata.confpassword} placeholder='Confirm Password :' className='form-control' name='confpassword' onChange={showFormData}></input><br></br>
              </div>
              <div className='login-container'>
                <button className='login' id='signup'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default SignupForm
