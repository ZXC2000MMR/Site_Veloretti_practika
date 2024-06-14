import React from 'react'
import "../components/css/cite5page.css"
import man_rb from "../images/29ce6a50296b9bdd0194e8fb9a5585ae.png"

function HITComponent() {
  return (
    <div class="div_hit">
      <div class="div_hit1">
        <p class="p_hit1">How it works</p>
        <p class="p_hit2">Register your company</p>
        <p class="p_hit3">Fill in our registration form with your company details. After<br/>
        your registration, our leasing partner will do a credit check. You<br/>
        will hear whether your application has been approved within 24<br/>
        hours.</p>
        <p class="p_hit4">Determine the requirements</p>
        <p class="p_hit5">You get acces to the digital platform. Set the requirements for<br/>
        your employees and share the registration link.</p>
        <p class="p_hit6">Ride your bike!</p>
        <p class="p_hit7">Let's go! Your employees can choose their bikes and they'll be<br/>
        delivered straight to their homes.</p>
        <p class="p_hit8">Administration</p>
        <p class="p_hit9">Everything in one place. The digital platform gives you an easy<br/>
        overview of all the information for your payroll.</p>
        </div>
        <div class="div_hitimg">
          <img class="hit_img" src={man_rb}></img>
        </div>
    </div>
  )
}

export default HITComponent