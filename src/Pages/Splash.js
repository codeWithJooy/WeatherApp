import React from 'react'

const Splash=()=>{
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
                     <button>Get Start</button>
               </div>

           </div>
       </div>
   )
}

export default Splash;