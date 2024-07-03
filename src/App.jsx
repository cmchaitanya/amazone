import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import LogIn from './LogIn.jsx'
import Payment from './Payment.jsx'
import { BrowserRouter as Router, Routes, Route,Link }
from "react-router-dom";
import Checkout from './Checkout.jsx'
import { auth } from './Firebase.jsx'
import { useStateValue } from './StateProvider.jsx'

function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        // console.log("the user is ",authUser);
        if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser,
          })
        }else{
          dispatch({
            type:'SET_USER',
            user:null,
          })
        }
      });
  },[])

  return (
  <Router>
      <div className="App">
       <Header />
        <Routes>
          <Route path='/login' element={[<LogIn/>]} />
          <Route path='/payment' element={[<Payment/>]} />
          <Route path="/" element={[<Home />]} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
