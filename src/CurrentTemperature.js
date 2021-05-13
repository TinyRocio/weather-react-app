import React from "react";

import "./CurrentTemperature.css"

export default function CurrentTemperature(props){

        return (
            <div className="CurrentTemperature">
            <span className="temperature">{Math.round(props.fahrenheit)}</span>
            <span className="units">
               °F 
                </span>
        </div>
    )
}