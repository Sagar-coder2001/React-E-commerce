import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import '../LoginForm/Loginform.css';
import axios from 'axios';

const SignupForm = () => {
  const [formdata, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confpassword: ''
  });

  const [userprofileformdata, setUserProfileFormData] = useState({
    profilename: '',
    profilemobile: '',
    profileemail: '',
    profilepassword: '',
    profilenewpassword: '',
    profileconfnewpassword: ''
  });

  const [showuserprofile, setShowUserProfile] = useState(false);
  
  // Get user ID from local storage
  const userid = localStorage.getItem('userid');

  // Update form data handler
  const showFormData = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Update user profile handler
  const setprofile = (e) => {
    setUserProfileFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value // Fixed typo here
    }));
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    const { profileemail, profilemobile, profilename, profilepassword, profilenewpassword, profileconfnewpassword } = userprofileformdata;

    if (profileemail === '' || profilemobile === '' || profilename === '' || profilepassword === '') {
      alert('Please fill all required fields');
    } else if (profilenewpassword !== profileconfnewpassword) {
      alert('New passwords do not match');
    } else {
      try {
        const response = await axios.post(`http://localhost/Ecommercephp/updateuserprofile.php?userid=${userid}`, userprofileformdata, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response);
        if (response.data.success) {
          alert('Profile updated successfully');
          setUserProfileFormData({ profilename: '', profileemail: '', profilemobile: '', profilepassword: '', profilenewpassword: '', profileconfnewpassword:'' });
        } else {
          alert(response.data.message || 'Error updating profile');
        }
      } catch (err) {
        console.error(err);
        alert('Error updating profile');
      }
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    
    if (formdata.name === '' || formdata.email === '' || formdata.mobile === '' || formdata.password === '') {
      alert('Please fill all required fields');
      return;
    } else if (formdata.password !== formdata.confpassword) {
      alert('Passwords do not match');
      return;
    } else {
      try {
        const response = await axios.post('http://localhost/Ecommercephp/signup.php', formdata, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (response.data.success) {
          alert('Details saved successfully');
          setFormData({ name: '', mobile: '', email: '', password: '', confpassword: '' });
        } else {
          alert(response.data.message || 'Error saving details');
        }
      } catch (error) {
        console.error(error);
        alert('Error saving details');
      }
    }
  };

  // Fetch user profile on mount
  useEffect(() => {
    const userprofile = async () => {
      if (userid) {
        try {
          const response = await axios.get(`http://localhost/Ecommercephp/userprofilesignup.php?userid=${userid}`);
          if (response.data.success) {
            setShowUserProfile(true);
            setUserProfileFormData({
              profilename: response.data.data.name,
              profilemobile: response.data.data.mobile,
              profileemail: response.data.data.email,
              profilepassword: response.data.data.password,
              profilenewpassword: '',
              profileconfnewpassword: ''
            });
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    userprofile();
  }, [userid]);

  return (
    <Layout>
      {showuserprofile ? (
        <div className='loginform-container'>
          <div className="form-container">
            <h2>User Profile</h2>
            <form autoComplete='off' onSubmit={updateProfile}>
              <div className='input-container text-start'>
                <label htmlFor="" className='ml-1 text-white'>Name : </label>
                <input type='text' value={userprofileformdata.profilename} placeholder='Name :' name='profilename' className='form-control' onChange={setprofile}/>
              </div>
              <div className='input-container text-start'>
              <label htmlFor="" className='ml-1 text-white'>Mobile : </label>
                <input type='tel' maxLength={10} value={userprofileformdata.profilemobile} name='profilemobile' placeholder='Mobile No :' className='form-control' onChange={setprofile}/>
              </div>
              <div className='input-container text-start'>
              <label htmlFor="" className='ml-1 text-white'>Email : </label>
                <input type='email' name='profileemail' value={userprofileformdata.profileemail} placeholder='Email :' className='form-control' onChange={setprofile}/>
              </div>
              <div className='input-container text-start'>
              <label htmlFor="" className='ml-1 text-white'>Password : </label>
                <input type='password' name='password' value={userprofileformdata.profilepassword} placeholder='Current Password :' className='form-control' readOnly />
              </div>
              <div className='input-container text-start'>
              <label htmlFor="" className='ml-1 text-white'>New Password : </label>
                <input type='password' name='profilenewpassword' value={userprofileformdata.profilenewpassword} placeholder='New Password :' className='form-control' onChange={setprofile} />
              </div>
              <div className='input-container text-start'>
              <label htmlFor="" className='ml-1 text-white'>Confirm Password : </label>
                <input type='password' name='profileconfnewpassword' value={userprofileformdata.profileconfnewpassword} placeholder='Confirm New Password :' className='form-control' onChange={setprofile} />
              </div>
              <div className='login-container mt-4'>
                <button className='login' id='signup' type='submit'>Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className='loginform-container'>
          <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={formSubmit} autoComplete='off' method='post'>
              <span className='create'>Already Have An Account <Link to="/Loginform">Login</Link></span>
              <div className='input-container'>
                <input type='text' value={formdata.name} placeholder='Name :' name='name' className='form-control' onChange={showFormData} />
              </div>
              <div className='input-container'>
                <input type='tel' maxLength={10} value={formdata.mobile} name='mobile' placeholder='Mobile No :' className='form-control' onChange={showFormData} />
              </div>
              <div className='input-container'>
                <input type='email' value={formdata.email} name='email' placeholder='Email :' className='form-control' onChange={showFormData} />
              </div>
              <div className='input-container'>
                <input type='password' value={formdata.password} name='password' placeholder='Password :' className='form-control' onChange={showFormData} />
              </div>
              <div className='input-container'>
                <input type='password' value={formdata.confpassword} placeholder='Confirm Password :' className='form-control' name='confpassword' onChange={showFormData} />
              </div>
              <div className='login-container'>
                <button className='login' id='signup' type='submit'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default SignupForm;
