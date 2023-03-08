import React, { useEffect } from "react";
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
//import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login.js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {  onAuthStateChanged } from "firebase/auth";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51LWMPiSJls1WPnkKvdoLAp0HY5fPZjLyiYrEWTTeZhA967YI7IFlganJ9GUjKJsOBPUfKFV1jgXISRQTgA50TPwP00xhQAHZs3");
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      console.log("THE USER IS>>>",user);
      if(user){
      

        dispatch({
          type:"SET_USER",
          user:user
        })

      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })


      }
    })

  },[user,dispatch])
  return (
    <Router>
    <div className="App">
    
     <Routes>
      <Route  path="/" element={<>< Header />< Home /><Footer/></>}/>
      <Route  path="/checkout" element={<>< Header />< Checkout /><Footer/></>}/>
      <Route  path="/login" 
        element={<><Login/></>}
      />
      <Route  path="/payment" element={<>

      < Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
     </>}/>
      
      
        </Routes> 
       
   </div>
   </Router>
  
  );
}

export default App;
