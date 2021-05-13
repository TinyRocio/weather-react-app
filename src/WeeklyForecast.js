import React, { useState } from "react";
import axios from "axios";


import "./WeeklyForecast.css"
import WeeklyForecastInfo from "./WeeklyForecastInfo";

export default function WeeklyForecast(props){
  const [charged, setCharged] =useState(false)
  const [forecast, setForecast] = useState(null)

  function displyForecast(response){
    setForecast(response.data.daily)
    setCharged(true)
  }

  if (charged) {
    return (
      <div className="WeeklyForecast">
            <div className="row">
                <div className="col">
                  <WeeklyForecastInfo data={forecast[0]}/>
                </div>
            </div>
        </div>
    )
  } else {

  let apiKey ="833faa4e5adfbac35281e0409e2d28ea"
  let lat = props.coordinates.lat
  let lon = props.coordinates.lon
  let units = "imperial" 
  let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
  axios.get(apiUrl).then(displyForecast) 

  return null
  }

  }