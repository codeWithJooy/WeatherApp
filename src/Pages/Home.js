import React,{useEffect,useState} from 'react'
import HomeHeader from '../Components/HomeComponents/HomeHeader'
import HomeMainDisplay from '../Components/HomeComponents/HomeMainDisplay'
import HomeForecasts from '../Components/HomeComponents/HomeForecasts'
import Footer from '../Components/Footer'
import axios from 'axios'

const Home=({city})=>{
   const api='35907845a80a9a5cfecf77f9b56f170e'
   let url=`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api}`
   let [temp,setTemp]=useState('20')
   useEffect(()=>{
      const fetchData=async()=>{
         const result=await axios(
          url
         );
          let lat=result.data[0].lat
          let lon=result.data[0].lon
          let weather_api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`
          const weather=await axios(
            weather_api
          )
          setTemp(weather.data.main.temp)
          console.log(temp)
      }
      fetchData()
   },[city]);
   return(
       <div className="main">
          <div className="container"> 
           <HomeHeader />
           <HomeMainDisplay temp={temp} />
           <HomeForecasts />
           <Footer active="home"/>
          </div> 
       </div>
   );
}

export default Home;