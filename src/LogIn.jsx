import React, { useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom";
// import {getDatabase} from "firebase/database";

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app,auth} from "./Firebase.jsx"
// const auth=getAuth(app);

function LogIn() {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const signin=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((value)=>{
      if(value){
        navigate("/");
      }
    }).catch(error=>alert(error.message));
  }

  const register=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,
      email,password)
      .then((value)=>{
        if(value){
          navigate("/");
        }
      })
      .catch(error=>alert(error.message));
  }

  return (
      <div className='login'>
        <Link to="/">
          <img 
            className='login_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
         />
        </Link>          
        <div className="login_container">
          <h1>Sign in</h1>
          <form className='login_form'>
            <label htmlFor="E_mail">E-mail</label>
            <input type="email" value={email} 
                onChange={e=>setEmail(e.target.value)}/>

            <label htmlFor="password">Password</label>
            <input type="password" value={password}
              onChange={e=>setPassword(e.target.value)}/>

            <button type='submit' className='login_signinButton'
              onClick={signin}>Sign In</button>

          </form>
          <p>By signing-in you agree to Amazon's Condtion of Use & Sale.</p>
          <button onClick={register}
            className='login_registerButton'>Create your Amazon Account</button>
        </div>
      </div>
  )
}

export default LogIn
