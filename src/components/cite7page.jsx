import React from 'react'
import "../components/css/cite7page.css"

function GitComponent() {
  return (
    <div className ='div_req'>
        <div>
            <div class='i8' >
            <p>Get in touch</p>
            </div>
            <div>
            <input class='i1' type='text' placeholder='First name'></input>
            </div>
            <div>
            <input class='i2' type='text' placeholder='Last name'></input>
            </div>
            <div>
            <input class='i3' type='text' placeholder='Email address'></input>
            </div>
            <div>
            <input class='i4' type='text' placeholder='Phone number'></input>
            </div>
            <div>
            <input class='i5' type='text' placeholder='Company Name'></input>
            </div>
            <div>
            <select class='s1'>
                <option>Company Size</option>
            </select>
            </div>
            <div>
            <input class='i6' type='text' placeholder='Number of bikes'></input>
            </div>
            <div>
            <textarea class='i7' type='text' placeholder='How can we help?'></textarea>
            </div>
            <div>
            <button class='b1'>Send the request</button>
            </div>
        </div>
    </div>


  )
}

export default GitComponent