import React from "react";

const WeatherDisplay=({weather})=>{
    
const {temperature, conditions} = weather;

return(
    <div>
        <span style={{color:temperature>20?"red" :"blue"}} >Temperature: {temperature}</span>
        <p>Condition: {conditions}</p>
    </div>
)
};

export default WeatherDisplay;