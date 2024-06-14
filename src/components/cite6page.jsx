import React from 'react'
import "../components/css/cite6page.css"
import scsw from "../images/span-color-swatch_wrapper.png"
import scsw1 from "../images/span-color-swatch_wrapper-1.png"
import scsw2 from "../images/span-color-swatch_wrapper-2.png"
import scsw3 from "../images/span-color-swatch_wrapper-3.png"
import scsw4 from "../images/span-color-swatch_wrapper-4.png"
import bike_ace from "../images/415c9478d68b7543070b4c9786ed250f.png"
import bike_ivy from "../images/91f45267d8722e8114ad014e10c4db8a.png"
import left from "../images/Vector.png"
import right from "../images/Vector(1).png"

function BikesComponent() {
  return (
    <div class="main_div">
      <div class="div_main_ace">
        <div class='div_ace'>
        <p class='t1'>Electric Ace&nbsp; <sup class="sup">Two</sup></p>
        <p class='t2'>€69,07 NET/MONTH</p>
        </div>
        <div class='bike_div'>
        <img class='left' src={left}></img>
        <img class='bike_ace' src={bike_ace}></img>
        <img class='right' src={right}></img>

        </div>
        <div class='colors'>
        <img class='scsw' src={scsw}></img>
        <img class='scsw1' src={scsw1}></img>
        <img class='scsw2' src={scsw2}></img>
        <img class='scsw3' src={scsw3}></img>
        </div>
      </div>
      <div class="main_div_ivy">
        <div class='div_ivy'>
        <p class='t3'>Electric Ivy &nbsp;<sup class="sup">Two</sup></p>
        <p class='t4'>€69,07 NET/MONTH</p>
        </div>
        <div class='bike_div1'>
        <img class='left' src={left}></img>
        <img class='bike_ivy' src={bike_ivy}></img>
        <img class='right' src={right}></img>

        </div>
        <div class='colors1'>
        <img class='scsw' src={scsw}></img>
        <img class='scsw1' src={scsw1}></img>
        <img class='scsw2' src={scsw2}></img>
        <img class='scsw3' src={scsw4}></img>
        </div>
      </div>
    </div>
  )
}

export default BikesComponent