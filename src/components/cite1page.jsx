import React from 'react'
import bike_img from "../images/982259a96f988a19c294dad5d4ce1148.png"
import "./css/cite1page.css"
function BodyComponent() {
  return (
    <div>
      <div class='div_bike'>
        <img class="img_bike" src={bike_img}></img>
        <p class="text_1">VELORETTI BUSINESS</p>
        <b class="text_2">Bike lease plan for employees.</b>
      </div>
    </div>
  );
}

export default BodyComponent