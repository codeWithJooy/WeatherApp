import logo from './logo.svg';
import {useState} from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Splash from './Pages/Splash'
import Pollution from './Pages/Pollution'
import Search from './Pages/Search'
function App() {
  const [city,SetCity]=useState('Kolkata')
  return (
    <BrowserRouter>
     <Switch>
       <Route path="/" component={Splash} exact/>
       <Route path="/home"
               render={()=><Home city={city} />} 
               />
        <Route path="/search" 
               render={()=><Search setCity={SetCity} />}
               />
        <Route path="/pollution"
               render={()=><Pollution city={city} />} 
               />       
     </Switch>
    </BrowserRouter>
  );
}

export default App;
