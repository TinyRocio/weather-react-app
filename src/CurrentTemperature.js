import React, {useState} from "react";

import "./CurrentTemperature.css"

export default function CurrentTemperature(props){
    const [units, setUnits] = useState("fahrenheit");

    function displayCelsius(event){
        event.preventDefault();
        setUnits("celsius")
    }

    function displayFahrenheit(event){
        event.preventDefault();
        setUnits("fahrenheit")
    }

    function celsius(){
        return (props.fahrenheit - 32) * (5/9)
    }

    if (units === "fahrenheit"){
        return (
            <div className="CurrentTemperature">
            <span className="temperature">{Math.round(props.fahrenheit)}</span>
            <span className="units">
               °F | <a href="/" onClick={displayCelsius}>°C</a>
                </span>
        </div>
    )
} else {
    return (
            <div className="CurrentTemperature">
            <span className="temperature">{Math.round(celsius())}</span>
            <span className="units">
            <a href="/" onClick={displayFahrenheit}>°F </a>| °C 
            </span>
        </div>
    )
}
}