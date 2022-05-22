import React from 'react'

const HomeUnits=({name,value})=>{
    return(
        <div className="home_unit">
            <div className="home_unit_name">
                <p>{name}</p>
            </div>
            <div className="home_unit_value">
                <p>{value}</p>
            </div>
        </div>
    )
}

export default HomeUnits;