import React from 'react'
import "../components/css/cite2page.css"
import man_on_bike from "../images/e4be4b810154d2d5146a366a9f02d120.jpg"
function AboutComponent() {
  return (
    <div class="div">
      <img class='man_bike' src={man_on_bike}></img>
      <div class="text">
      <p class="p">Bike plans for<br />
      employees.</p>
      <p class="p1">Veloretti Electrics benefit both the environment and the health of<br />
      your employees. Oh, and they look good too. Cost-free for the<br />
      employer and outside of the WKR.</p>
      <button class="but_3">Discover More</button>
      <p></p>
      </div> 
    </div>
  )
}

export default AboutComponent