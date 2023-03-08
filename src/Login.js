import React, { useState } from 'react'
import "./Login.css";
import {Link ,useNavigate}from "react-router-dom";
//import {auth} from "./firebase.js";
//import {  signInWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase.js";

function Login() {
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const signin =e=>{
    e.preventDefault();
    const user =signInWithEmailAndPassword(auth,email,password).then((auth)=>{
      console.log(user.user);
       if(auth){
        navigate("/");
      
       }
       console.log(auth);
    })
    .catch(error=>alert(error.message));
   
  }
  const register = e=>{
    e.preventDefault();
    const user=  createUserWithEmailAndPassword(auth,email,password).then((auth)=>{
       console.log(user.user); 
   if(auth){
    navigate("/");
      }
      console.log(auth,email,password);
     
      })
      .catch(error=>alert(error.message));
  }
  return (
    
    <div className="login">
    <Link to="/">
       <img className="login__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFW7NFOZajyZitdDxn8E4r6oCtj4xw0b9WzjQ5px2YcXfZsxO_04qPdvY23jQ_jTDVWus&usqp=CAU" alt
       ="" />
        </Link>
        <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                </form>
                <button className="login__signinbutton" onClick={signin} type="submit">Sign In</button>
                <h5>-------------------New in Amazon?------------------</h5>
                <button className="login__register" onClick={register} type="submit">Create a Amazon account</button>
                <p>
                    By signing in you agree to amazon's conditions of use & sale.Please see our privacy policy Notice ,our cookies Notice and Our Interested-based ads Notice
                </p>
        </div>

    </div>
   
  )
}
export default Login