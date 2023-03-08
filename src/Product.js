import React from "react"
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id,title ,image, price,rating }) {
  const [{basket},dispatch]= useStateValue();
  //console.log("This is the basket>>",basket); 
  const addToBasket=()=>{
      dispatch({
        type:"ADD_TO_BASKET",
        item:{
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating,
        },
      });
  };
  return (
   
    <div className="product">
        <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">
                  {Array(rating).fill().map((_,i)=>(
                    <span role="img" aria-label="star">⭐</span>
                  ))}
                     
                </p>

        </div>
        <img className="product__img" src={image}alt="" />
        <button className="product__button" onClick={addToBasket}>
            Add to Basket
        </button>


    </div>

  )
}

export default Product