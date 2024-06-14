import React from 'react'
import image_of_bike from "../images/025d9fe07e01ce680521620d22b09326.jpg"
import "../components/css/cite4page.css"

function EmployersComponent() {
  return (
    <div>
      <div class='div_emp'>
      <img class="emp_img" src={image_of_bike}></img>
        <div class="text_emp">
        <p class="p_emp1">Free of charge for<br/>
        employers</p>
        <p class="p_emp2">The bike plan is totally independent of the WKR and is free for you as<br/>
        an employer. The employee pays the lease costs and you, as the<br/>
        employer, decide whether you want to contribute to the costs.</p>
        <button class="but_emp">Cost example</button>
        </div>
      </div>
    </div>
  )
}

export default EmployersComponent