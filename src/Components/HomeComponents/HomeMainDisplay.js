import React from 'react'

const HomeMainDisplay=()=>{
   return(
       <div className="main_display">
           <div class="main_top">
               <div class="main_top_unit">
                   <p className="main_today">Today</p>
               </div>
               <div class="main_top_unit">
                   <p>Sun, 22 May </p>
               </div>
           </div>
           <div className="main_middle">
               <div className="main_middle_left">
                   <p>30<sup>&#176;c</sup></p>
               </div>
               <div className="main_middle_left">
                   <img src="docs/img/icons/sun.png" />
               </div>
           </div>
           <div class="main_bottom">
               <img src="docs/img/icons/placeholder.png" />
               <p>Kolkata, India</p>
           </div>
       </div>
   )
}

export default HomeMainDisplay;