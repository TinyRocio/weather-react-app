import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready:false});

    
    function showResponse(response){
        setWeatherData({
          ready : true,
          city: response.data.name,
          date:"May, 4, 2021 Tuesday 05:30pm",
          temperature : response.data.main.temp,
          feelslike: response.data.main.feels_like,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        })
    }

    if (weatherData.ready){
      return (
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-6">
                <input 
                type="search" 
                placeholder="Enter a City ..." 
                autoFocus="on" 
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"/>
                <datalist id="datalistOptions">
                  <option value="San Francisco" />
                  <option value="Seattle" />
                  <option value="Los Angeles" />
                  <option value="Chicago" />
                </datalist>
                </div>
                <div className="col-3">
                <button 
                type="submit" 
                className="btn btn-primary">
                    Search
                    </button>
                    </div>
                    <div className="col-2">
                    <button 
                    type="submit" 
                    className="btn btn-primary">
                        <i className="fas fa-map-pin"></i>
                        </button>
                </div>
                </div>
            </form>
            <div className="row">
                <div className="col-6">
                <h1 className="location">{weatherData.city}</h1>
                </div>
                <div className="col-6">
            <ul>
                        <li className="weathericon">
                            <img 
                            src={weatherData.iconUrl}
                            alt={weatherData.description} />
                            {Math.round(weatherData.temperature)}°F
                        </li>
            </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                <li>Last Updated:</li>
                <li className="date">{weatherData.date}</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                            <li className="text-capitalize">{weatherData.description}</li>
                            <li>Feels Like: {Math.round(weatherData.feelslike)}°F</li>
                            <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                    </ul>
                </div>
            </div>
            </div>
    );
  } else {

    let apiKey ="4005c7ae924df34c8466814b255e9b64"
    let units = "imperial" 
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(showResponse);
    
    return "Loading....";
  }
  }