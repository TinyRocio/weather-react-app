import React from "react";
import CurrentTemperature from "./CurrentTemperature";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"

import "./WeatherInfo.css"

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="row">
                <div className="col">
                <h1 className="location">{props.data.city}</h1>
                </div>
        </div>
        <div className="CurrentDayWeather">
        <div className="row">
                <div className="col">
                  <div>
                          <WeatherIcon code={props.data.icon} size={145}/>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <CurrentTemperature fahrenheit={props.data.temperature} />
                  </div>
                </div>
        </div>
        </div>
            <div className="row">
                <div className="col formatteddate">
                  <FormattedDate date={props.data.date}/>
                </div>
                <div className="col">
                  <div className="CurrentDayInfo">
                    <ul>
                            <li className="text-capitalize">{props.data.description}</li>
                            <li>Feels Like: {Math.round(props.data.feelslike)}°F</li>
                            <li>Humidity: {Math.round(props.data.humidity)}%</li>
                    </ul>
                </div>
            </div>
        </div>
         </div>
    )
}