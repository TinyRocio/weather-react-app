import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon"

import "./WeeklyForecast.css"

export default function WeeklyForecast(props){

  function displyForecast(response){
    console.log(response)
  }
  let apiKey ="4005c7ae924df34c8466814b255e9b64"
  let lat = props.coordinates.lat
  let lon = props.coordinates.lon
  let units = "imperial" 
  let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
  axios.get(apiUrl).then(displyForecast)

    return (
        <div className="WeeklyForecast">
            <div className="row">
                <div className="col">
                    <div className="Weekly-day">
                        Tues
                        </div>
                        <WeatherIcon code="09d" size={55}/>
                          <h6>Max / Min</h6> 
                        <div className="Weekly-Temps">
                            <span className="Weekly-Max-Temp">
                                65° 
                                </span>
                                <span className="Weekly-Min-Temp">
                                    / 50°
                                  </span>
                        </div>
                </div>
            </div>
        </div>
    )
}