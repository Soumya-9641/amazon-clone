import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket,user}]= useStateValue();
  return (
    <div className="checkout">
    <div className="checkout__left">
        <img className="checkout__ad" 
        
        src="https://digiday.com/wp-content/uploads/sites/3/2016/06/prime-day-banner.jpg"
        alt=""
         />
         <div>
         <h3> Hello {user?.email} </h3>
            <h1  className="checkout__title">Your shopping list</h1>
            {/* CheckoutProduct */}
            {basket.map(item =>(
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
    <div className="checkout__right">
            <Subtotal />
    </div>
    </div>
  )
}

export default Checkout