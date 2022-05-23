import React from 'react'
import Footer from '../Components/Footer';
const Pollution=()=>{
    return(
        <div className="main">
            <div className="container">
                <div className="pollution_header">
                    <p><span>22 May 2022, 15:52</span></p>
                </div>
                <div className="pollution_main">
                    <div className="city_name">
                        <p>Kolkata</p>
                        <span>India</span>
                    </div>
                    <div className="pollution_holder">
                        <div className="pollution_left">
                           <div className="aqi_name">
                               <p>Air Quality Index</p>
                           </div>
                           <div className="aqi_value">
                               <p>105</p>
                           </div>
                           <div className="aqi_nature">
                               <p>Moderate</p>
                           </div>
                        </div>
                        <div className="pollution_right">
                            <img src="docs/img/icons/aqi_3.jpg" />
                        </div>
                    </div>
                </div>
                <div className="pollution_others">
                    <div className="others_unit">
                        <div className="others_image">
                            <img src="docs/img/icons/co2.png" />
                        </div>
                        <div className="others_data">
                            <span>CO<sub>2</sub></span>
                            <br />
                            <p>201.9<span className="unit">&Mu;g/m<sup>3</sup></span></p>
                        </div>
                    </div>
                    <div className="others_unit">
                        <div className="others_image">
                            <img src="docs/img/icons/air_pol.png" />
                        </div>
                        <div className="others_data">
                            <span>NO<sub>2</sub></span>
                            <br />
                            <p>2.8<span className="unit">&Mu;g/m<sup>3</sup></span></p>
                        </div>
                    </div>
                    <div className="others_unit">
                        <div className="others_image">
                            <img src="docs/img/icons/air_pol.png" />
                        </div>
                        <div className="others_data">
                            <span>PM2.5</span>
                            <br />
                            <p>2.3<span className="unit">&Mu;g/m<sup>3</sup></span></p>
                        </div>
                    </div>
                    <div className="others_unit">
                        <div className="others_image">
                            <img src="docs/img/icons/co2.png" />
                        </div>
                        <div className="others_data">
                            <span>PM10</span>
                            <br />
                            <p>2.9<span className="unit">&Mu;g/m<sup>3</sup></span></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )

}
export default Pollution;