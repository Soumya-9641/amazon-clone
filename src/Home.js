import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
    
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg" alt=""/>
        </div>
            <div className="home__row">

                <Product
                    id="189390"
                    title="The lean startup"
                    price={2367.93}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}
                />
                <Product
                    id="802783"
                    title="Apple iPhone 13 (128GB) - Midnight"
                    price={68900}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31tyUh1todL._SY445_SX342_QL70_FMwebp_.jpg"
                    rating={5}
                
                 />
                

            </div>
            <div className="home__row">
            <Product
                id="672973"
                title="Allen Solly Men's Regular Shirt"
                    price={1063.00 }
                    image="https://m.media-amazon.com/images/I/61e0DVZk4UL._UY741_.jpg"
                    rating={5}
                
            
             />
            <Product
                    id="196203"
                    title="HP All-in-One AMD Ryzen 3-3250U 22-inch(54.6 cm) FHD Desktop(4GB/1TB HDD/Win 11/MS Office 2019/AMD Radeon Graphics), 22-dd0201in, Jet Black"
                    price={37990.00 }
                    image="https://m.media-amazon.com/images/I/81pSrz0gw2L._SX679_.jpg"
                    rating={5}
                
             />
            <Product
                    id="239103"
                    title="boAt Blaze Smart Watch with 1.75” HD Display, Fast Charge, Apollo 3 Blue Plus Processor, 24x7 Heart Rate & SpO2 Monitor, Multiple Watch Faces, Multiple Sports Modes & 7 Days Battery Life(Active Black)"
                    price={3699.00 }
                    image="https://m.media-amazon.com/images/I/61Go9-1iPyL._SX522_.jpg"
                    rating={5}
                
            
             />

            </div>
            <div className="home__row" id="single__product" >
            <Product
                    id="128902"
            
                    title="Ebansal Solid Wood Finish Designer Study Writing Desk Table for Office | Unique Computer Table with Open Shelf Storage for Home and Office | Sheesham Wood, Brown"
                    price={15199.00}
                    image="https://m.media-amazon.com/images/I/61co9N8sL3L._SX679_.jpg"
                    rating={5}

            />

            </div>
        </div>
    )
    }

    export default Home