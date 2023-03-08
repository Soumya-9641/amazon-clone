import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import "./Payment.css";
import {Link, useNavigate} from "react-router-dom";
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal  } from './reducer';

import axios from "./axios";
function Payment() {
    const stripe=useStripe();
    const navigate=useNavigate();
    const elements = useElements();
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);
    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [{basket,user},dispatch] = useStateValue();
    useEffect(()=>{
            const getClientSecret = async ()=>{
                    const response = await axios({
                        method: 'post',
                        url:`/payments/create?total=${getBasketTotal(basket)*100}`
                    });
                    setClientSecret(response.data.clientSecret)
            } 
            getClientSecret();
    },[basket])  
    console.log("The secret is >> ",clientSecret);
    const handleSubmit = async (event)=>{
                event.preventDefault();
                setProcessing(true);
               const payload = await stripe.confirmCardPayment(clientSecret,{
                payment_method:{
                    card:elements.getElement(CardElement)
                 }
               }).then(({paymentIntent})=>{
                //paymentIntent=payment confirmation
                setSucceeded(true);
                setError(null)
                setProcessing(false)
                navigate.replace("/orders")
               })
    }

    const handleChange=e=>{ 
            setDisabled(e.empty);
            setError(e.error?e.error.message:"");
    }
  return (
    <div className="payment">
        <div className="payment__container">
        <h1>
            checkout  {
                <Link to="/checkout">{basket?.length} items</Link>
            }
        </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h2>Delivery Address</h2>
                </div>
                <div className="payment__address" id="payment__address1">
                    <p>{user?.email}</p>
                    <p>525 Spandan apartment,Anandapur Police Station</p>
                    <p>Kolkata ,India</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h1>Review items and delivery</h1>

                </div>
                <div className="payment__items" id="payment__img">
                   {basket.map(item=>(
                    <CheckoutProduct 
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price ={item.price}
                         rating={item.rating}

                    />
                   ))}
                </div>
                
            </div>
            <div className="payment__section">

                    <div className="payment__title">
                        <h1>Payment Method</h1>
                    </div>
                    <div className="payment__details">
                        <from onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__pricecontainer">
                            <CurrencyFormat
      
                              renderText={(value)=>(
                             
                            <h3>Order total : {value}</h3>
                             

                             
                             )} 
                            decimalScale={2} 
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                               prefix={"$"}   
  
                                 />
                            <button disabled={processing||disabled||succeeded}>
                                <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                            </button>
                            </div>  
                            {error && <div>{error}</div>}
                        </from>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Payment