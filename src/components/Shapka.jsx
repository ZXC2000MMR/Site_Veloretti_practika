import React from 'react'
import "./css/Shapka.css"
import lang_img from "../images/UK-SVG.png"
import profile from "../images/SVG.png"
import cart from "../images/SVG(1).png"

const HeaderComponent = () => {
  return (
    <div class="div_logo">
        <p class="logo">VELORETTI</p>
        <div class="div_opitons">
            <select class="sel_1"><option>ELECTRIC</option></select>
            <select class="sel_2"><option>CITY</option></select>
            <select class="sel_3"><option>KIDS</option></select>
            <button class="but_1">ACCESSORIES</button>
            <button class="but_2">STORES</button>
            <select class="sel_4"><option>LEASING</option></select>
            <span class="span_items">
            <p class="en">EN</p>
            <img class="uk_lang" src={lang_img}></img>
            <img class="profile" src={profile}></img>
            <img class="cart" src={cart}></img>
            </span>
        </div>
    </div>
  )
}

export default HeaderComponent