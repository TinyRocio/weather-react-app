import React, { useState, useEffect } from "react";
import axios from "axios";


import "./WeeklyForecast.css"
import WeeklyForecastInfo from "./WeeklyForecastInfo";

export default function WeeklyForecast(props){
  const [charged, setCharged] =useState(false)
  const [forecast, setForecast] = useState(null)

  useEffect(() => {
    setCharged(false);
  }, [props.coordinates])

  function displyForecast(response){
    setForecast(response.data.daily)
    setCharged(true)
  }

  if (charged) {
    return (
      <div className="WeeklyForecast">
            <div className="row row-cols-md-3">
              {forecast.map(function (weeklyforecast, index){
                if (index < 6){
                  return (
                <div className="col" key= {index}>
                  <WeeklyForecastInfo data={weeklyforecast}/>
                </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
        </div>
    )
  } else {

  let apiKey ="987aa406ce6d3749195591176df58a2d"
  let lat = props.coordinates.lat
  let lon = props.coordinates.lon
  let units = "imperial" 
  let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
  axios.get(apiUrl).then(displyForecast) 

  return null
  }

  }