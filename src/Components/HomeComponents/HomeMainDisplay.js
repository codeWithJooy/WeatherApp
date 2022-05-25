import React from 'react'

const HomeMainDisplay=({temp,city,country,timestamp})=>{
    let date=new Date(timestamp*1000)
    
    let day=date.getDate()
    let week_day=date.getDay()-1
    let today=''
    if(week_day==0){
        today="Mon"
    }
    else if(week_day==1){
        today="Tue"
    }
    else if(week_day==2){
        today="Wed"
    }
    else if(week_day==3){
        today="Thur"
    }
    else if(week_day==4){
        today="Fri"
    }
    else if(week_day==5){
        today="Sat"
    }
    else if(week_day==6){
        today="Sun"
    } 

    let month=date.getMonth()
    console.log(month)
    let mon_today=''
    switch(month){
        case 0:mon_today="Jan"
               break
        case 1:mon_today="Feb"
               break       
        case 2:mon_today="Mar"
               break       
        case 3:mon_today="April"
               break       
        case 4:mon_today="May"
               break       
        case 5:mon_today="June"
               break 
        case 6:mon_today="July"
               break
        case 7:mon_today="Aug"
               break       
        case 8:mon_today="Sept"
               break       
        case 9:mon_today="Oct"
               break       
        case 10:mon_today="Nov"
               break       
        case 11:mon_today="Dec"
               break       
   
    }
   return(
       <div className="main_display">
           <div class="main_top">
               <div class="main_top_unit">
                   <p className="main_today">Today</p>
               </div>
               <div class="main_top_unit">
                   <p>{today}, {day} {mon_today} </p>
               </div>
           </div>
           <div className="main_middle">
               <div className="main_middle_left">
                   <p>{Math.round(parseInt(temp))}<sup>&#176;c</sup></p>
               </div>
               <div className="main_middle_left">
                   <img src="docs/img/icons/sun.png" />
               </div>
           </div>
           <div class="main_bottom">
               <img src="docs/img/icons/placeholder.png" />
               <p>{city}, {country}</p>
           </div>
       </div>
   )
}

export default HomeMainDisplay;