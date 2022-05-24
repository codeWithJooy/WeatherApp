import React from 'react'
import {useHistory} from 'react-router-dom'
const Splash=()=>{
    let history=useHistory()
    let handleClick=()=>{
      history.push('/home')
    }
   return(
       <div className="main">
           <div className="container">
               <div className="splash_image">
                   <img src="docs/img/icons/sun.png" />
               </div>
               <div className="splash_title">
                   <h2>Weather <span>News & Feed</span></h2>
               </div>
               <div className="splash_extra">
                    <p>One App for all your weather curosity.Also know about the pollution in your city</p>
               </div>
               <div className="splash_button">
                     <button onClick={handleClick}>Get Start</button>
               </div>

           </div>
       </div>
   )
}

export default Splash;