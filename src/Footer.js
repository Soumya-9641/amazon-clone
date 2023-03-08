import React from 'react'
import "./Footer.css";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
        <div className="footer__itemfirst">
            <div className="footer__item1">
                <h2>Get Us Know</h2>
                <h5>About Us</h5>
                <h5>Careers </h5>
                <h5>Press Releases</h5>
                <h5>Amazon Cares</h5>
                <h5>Gift A Smile</h5>
                <h5>Amazon Science</h5>
            </div>
            <div className="footer__item2">
                <h2>Connect With Us</h2>
                <h6>Facebook</h6>
                <h6>Twitter</h6>
                <h6>Instagram</h6>
            </div>
            <div className="footer__item3">
                <h2>Make Money With Us</h2>
                <h6>Sell on Amazon</h6>
                <h6>Sell Under Amazon Accelerator</h6>
                <h6>Amazon Global Selling</h6>
                <h6>Become an Affiliate</h6>
                <h6>Fulfillmemnt by Amazon</h6>
                <h6>Advertise Your Product</h6>
                <h6>Amazon Pay On Merchants</h6>
            </div>
            <div className="footer__item4">
                <h2>Let Us Help You</h2>
                <h6>Cpvid 19 and Amazon</h6>
                <h6>Your Account</h6>
                <h6>Return Centre</h6>
                <h6>100% Purchase Protection</h6>
                <h6>Amazon App Download</h6>
                <h6>Amazon Assistant Download</h6>
                <h6>Help</h6>
            </div>
        </div>
       <div className="footer__itemsecond">
          <div className="footer__itemsecond1">
           <Link to="/">
                <img id="footer__img" src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" alt="" /> 
                </Link>

          </div>
          <div className="footer__itemsecond2">
                    <p>India</p>
                    <p>Australia</p>
                    <p>Canada</p>
                    <p>Usa</p>
                    <p>Germany</p>
                    <p>Italy</p>
                    <p>Japan</p>
                    <p>Poland</p>
                    <p>Spain</p>
                    <p>Turkey</p>
                    <p>France</p>
                    <p>Mexico</p>
                    <p>Singapore</p>
                    <p>UAE</p>
                    <p>United Kingdom</p>

          </div>
       </div>
       <div className="footer__itemthird">

        <div className="footer__itemthird1">
                <div className="footer__itemthird11">
                <h5>AbeBooks</h5>
                <h6>Books,arts</h6>
                </div>
                <div className="footer__itemthird12">
                <h5>Shopbop</h5>
                <h6>Designer</h6>
                <h6>Fashion Brand</h6>
                </div>
        </div>
        <div className="footer__itemthird2">
                <div className="footer__itemthird21">
                <h5>Amazon Web Service</h5>
                <h6>Scalable Cloud</h6>
                <h6>Computing Service</h6>
                </div>
                <div className="footer__itemthird22">
                <h5>Amazon Business</h5>
                <h6>Everything For</h6>
                <h6>Your Business</h6>
                </div>
        </div>
        <div className="footer__itemthird3">
                <div className="footer__itemthird31">
                <h5>Audible</h5>
                <h6>Download</h6>
                <h6>Audio Books</h6>
                </div>
                <div className="footer__itemthird32">
                <h5>Prime Now</h5>
                <h6>2-hour Delivery</h6>
                <h6>on Everyday items</h6>
                </div>
        </div>
        <div className="footer__itemthird4">
                <div className="footer__itemthird41">
                <h5>DPReview</h5>
                <h6>Digital</h6>
                <h6>Photography</h6>
                </div>
                <div className="footer__itemthird42">
                <h5>Amazon Prime Music</h5>
                <h6>90 million songs,ad-free</h6>
                <h6>over 15 million podcast episods</h6>
                </div>
        </div>
       

       </div>
       <div className="footer__itemforth">
            <p>Condition of Use & Sale</p>
            <p>Privacy Policy</p>
            <p>Interested-Based Ads</p>
            <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>


       </div>
    </div>
  )
}

export default Footer