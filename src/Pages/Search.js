import React,{useRef} from 'react'
import {useHistory} from 'react-router-dom'
import Footer from '../Components/Footer'

const Search=({setCity})=>{
    let history=useHistory()
    const search_ref=useRef(null)

    const handleClick=()=>{
        let value=search_ref.current.value
        setCity(value)
        history.push("/home")
    }
  return(
      <div className="main">
          <div className="container">
              <div className="pollution_header">
                    <p><span>Find Weather Of Your City</span></p>
              </div>
              <div className="search_section">
                  <div className="search_container">
                      <input ref={search_ref} type="text" placeholder="Search City" />
                  </div>
                  <div class="search_button">
                      <img src="docs/img/icons/sun.png" onClick={handleClick}/>
                  </div>
              </div>
              <Footer active="search" />
          </div>
      </div>
  )
}
export default Search;