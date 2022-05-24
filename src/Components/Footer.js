import React from 'react'
import {useHistory} from 'react-router-dom'

const Footer = ({active}) =>{
    let history=useHistory()
    const handleClick=(e)=>{
        const value=e.currentTarget.id;
        history.push('/'+value)
    }
  return(
      <div className="footer">
          <div className={active==='home'?"footer_units footer_active":"footer_units"} id="home" onClick={handleClick}>
              <img src="docs/img/icons/home-sub.png" />
          </div>
          <div className={active==='search'?"footer_units footer_active":"footer_units"} id="search" onClick={handleClick}>
              <img src="docs/img/icons/search-main.png" />
          </div>
          <div className={active==='pollution'?"footer_units footer_active":"footer_units"} id="pollution" onClick={handleClick}>
              <img src="docs/img/icons/pollution-main.png" />
          </div>
      </div>
  )
}

export default Footer;