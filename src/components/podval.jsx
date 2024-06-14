import React from 'react'
import "./css/podval.css"
import lk from "../images/Link.png"
import lk1 from "../images/Link-1.png"
import lk2 from "../images/Link-2.png"
import lk3 from "../images/Link-3.png"
import lk4 from "../images/Link-4.png"

function FooterComponent() {
  return (
    <div>
    <div class="footer_main">
        <div class="left_footer">
            <div class="exp_div">
            <p class="exp_p">Explorer</p>
            <span class="exp_span">
            <p>Electric bikes</p>
            <p>City bikes</p>
            <p>Kids' bikes</p>
            <p>Accessories</p>
            <p>Outlet</p>
            <p>Business</p>
            <p>Insurance Electric</p>
            <p>Size guide</p>
                </span>
            </div>
            <div class="ab_div">
                <p class="ab_p">About</p>
                <span class="ab_span">
                    <p>About us</p>
                    <p>Journal</p>
                    <p>Reviews</p>
                    <p>Press</p>
                    <p>Jobs</p>
                    </span>
                </div>
                <div class="help_div">
                    <p class="help_p">Help</p>
                    <span class="help_span">
                    <p>Contact</p>
                    <p>FAQ</p>
                    <p>Delivery</p>
                    <p>Assembly & manuals</p>
                    <p>Payment options</p>
                    <p>Privacy policy</p>
                    <p>Terms & conditions</p>
                    </span>
                </div>
            </div>
            <div class="jtr_div">
                <p class="jtr_p">Join the ride.</p>
                <p class="jtr_under_p">Sign up for our newsletter.</p>
                <div class="input_email">
                <input class="jtr_input" type='text' placeholder='Enter your email address here'></input><button class="jtr_but">Subscribe</button>
                </div>
                <div class="checkbox_div">
                <input class="input_checkbox" type='checkbox'></input><p class="checkbox_p">By signing up, I agree to the privacy policy of Veloretti.</p>

                </div>
                <div class="social">
                    <img src={lk}></img>
                    <img src={lk1}></img>
                    <img src={lk2}></img>
                    <img src={lk3}></img>
                    <img src={lk4}></img>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent