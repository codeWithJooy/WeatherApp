import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Footer from '../Components/Footer';
const Pollution=({city})=>{
    const api='0a5493bbdd24661260efcb95382e6463'
    const [country,setCountry]=useState("")
    const [aqi,setAqi]=useState(0)
    const [co2,setCo2]=useState(0)
    const [no2,setNo2]=useState(0)
    const [pm2,setPm2]=useState(0)
    const [pm10,setPm10]=useState(0)
    const [message,setMessage]=useState("")
    const [msgColor,setMsgColor]=useState("")
    let url=`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api}`
    
    const handleMessage=(aqi_val)=>{
        console.log(aqi_val)
        if(aqi_val===1){
             setMessage("Good")
             setMsgColor("api_nature api_green")
        }
        else if(aqi_val===2){
            setMessage("Fair")
            setMsgColor("api_nature api_lightgreen")
        }
        else if(aqi_val===3){
            setMessage("Moderate")
            setMsgColor("api_nature api_moderate")
        }
        else if(aqi_val===4){
            setMessage("Poor")
            setMsgColor("api_nature api_orange")
        }
        else{
            setMessage("Very Poor")
            setMsgColor("api_nature api_red")
        }
       
    }
    useEffect(()=>{
        const fetchData=async()=>{
           const result=await axios(
            url
           );
            let lat=result.data[0].lat
            let lon=result.data[0].lon
            setCountry(result.data[0].country)
            let pollution_api=`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api}`
            const pollution=await axios(
              pollution_api
            )
            setAqi(pollution.data.list[0].main.aqi)
            setCo2(pollution.data.list[0].components.co)
            setNo2(pollution.data.list[0].components.no2)
            setPm2(pollution.data.list[0].components.pm2_5)
            setPm10(pollution.data.list[0].components.pm10)
            handleMessage(pollution.data.list[0].main.aqi)
        }
        fetchData()
     },[city]);


    return(
        <div className="main">
            <div className="container">
                <div className="pollution_header">
                    <p><span>How Polluted is Your City ?</span></p>
                </div>
                <div className="pollution_main">
                    <div className="city_name">
                        <p>{city}</p>
                        <span>{country}</span>
                    </div>
                    <div className="pollution_holder">
                        <div className="pollution_left">
                           <div className="aqi_name">
                               <p>Air Quality Index</p>
                           </div>
                           <div className="aqi_value">
                               <p>{aqi*100}</p>
                           </div>
                           <div className={msgColor}>
                               <p>{message}</p>
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
                            <span>CO</span>
                            <br />
                            <p>{co2}<span className="unit">&Mu;g/m<sup>3</sup></span></p>
                        </div>
                    </div>
                    <div className="others_unit">
                        <div className="others_image">
                            <img src="docs/img/icons/air_pol.png" />
                        </div>
                        <div className="others_data">
                            <span>NO<sub>2</sub></span>
                            <br />
                            <p>{no2}<span className="unit">&Mu;g/m<sup>3</sup></span></p>
                        </div>
                    </div>
                    <div className="others_unit">
                        <div className="others_image">
                            <img src="docs/img/icons/air_pol.png" />
                        </div>
                        <div className="others_data">
                            <span>PM2.5</span>
                            <br />
                            <p>{pm2}<span className="unit">&Mu;g/m<sup>3</sup></span></p>
                        </div>
                    </div>
                    <div className="others_unit">
                        <div className="others_image">
                            <img src="docs/img/icons/co2.png" />
                        </div>
                        <div className="others_data">
                            <span>PM10</span>
                            <br />
                            <p>{pm10}<span className="unit">&Mu;g/m<sup>3</sup></span></p>
                        </div>
                    </div>
                </div>
                <Footer active="pollution"/>
            </div>
        </div>
    )

}
export default Pollution;