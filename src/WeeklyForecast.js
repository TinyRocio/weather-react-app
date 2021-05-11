import React from "react";
import WeatherIcon from "./WeatherIcon"

import "./WeeklyForecast.css"

export default function WeeklyForecast(){
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