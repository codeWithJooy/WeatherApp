import React from 'react'
import HomeHeader from '../Components/HomeComponents/HomeHeader'
import HomeMainDisplay from '../Components/HomeComponents/HomeMainDisplay'
import HomeForecasts from '../Components/HomeComponents/HomeForecasts'
import Footer from '../Components/Footer'

const Home=()=>{
   return(
       <div className="main">
          <div className="container"> 
           <HomeHeader />
           <HomeMainDisplay />
           <HomeForecasts />
           <Footer />
          </div> 
       </div>
   );
}

export default Home;