import React from 'react'
import HomeForecastPresent from './HomeForecastPresent'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HomeForeCasts=()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 0.5
      };
   return(
       <div className="forecast_section">
           <div className="forecast_tabs">
               <div className="tab active_tab">
                   <p>Today</p>
               </div>
               <div className="tab">
                   <p>Tomorrow</p>
               </div>
               <div className="tab">
                   <p>7 Days</p>
               </div>
           </div>
           <div className="forecast_data">
              <Slider {...settings}>
                <div className="forecast_unit">
                    <div className="forecast_card">
                        <div className="forecast_img">
                            <img src="docs/img/icons/sun.png" />
                        </div>
                        <div className="forecast_time_val">
                                <span>10 AM</span>
                                <br />
                                <p>26 <sup>&#176;c</sup></p>
                        </div>
                    </div>    
                </div>
                <div className="forecast_unit">
                    <div className="forecast_card">
                        <div className="forecast_img">
                            <img src="docs/img/icons/sun.png" />
                        </div>
                        <div className="forecast_time_val">
                                <span>10 AM</span>
                                <br />
                                <p>26 <sup>&#176;c</sup></p>
                        </div>
                    </div>    
                </div>
                <div className="forecast_unit">
                    <div className="forecast_card">
                        <div className="forecast_img">
                            <img src="docs/img/icons/sun.png" />
                        </div>
                        <div className="forecast_time_val">
                                <span>10 AM</span>
                                <br />
                                <p>26 <sup>&#176;c</sup></p>
                        </div>
                    </div>    
                </div>
              </Slider>
           </div>
       </div>
   )
}

export default HomeForeCasts;