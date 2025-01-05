import React from "react";

const WeatherDisplay=({weather})=>{
    
const {temperature, conditions} = weather;

return(
    <div>
        <h1 style={{color:temperature>20?"red" :"blue"}} >Temperature:{temperature}°C</h1>
        <h2>Condition:{conditions}</h2>
    </div>
)
};

export default WeatherDisplay;