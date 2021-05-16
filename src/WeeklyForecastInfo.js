import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function WeeklyForecastInfo(props){

    function day(){
        let date= new Date(props.data.dt * 1000)
        let day= date.getDay()
        let days=[
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
        ]
        return days[day]
    }

    function maxTemp(){
     let temperature= Math.round(props.data.temp.max)
     return `${temperature}°`
    }

    function minTemp(){
        let temperature = Math.round(props.data.temp.min)
        return `${temperature}°`
    }

    return (
        <div>
         <div className="Weekly-day">
                       {day()}
                     </div>
                <WeatherIcon code={props.data.weather[0].icon} size={55} />
                  <h6>Max / Min</h6> 
                  <div className="Weekly-Temps">
                      <span className="Weekly-Max-Temp">
                          {maxTemp()}
                      </span>
                       {" "} / {" "}
                      <span className="Weekly-Min-Temp">
                          {minTemp()}
                      </span>
           </div>
        </div>
    )
}