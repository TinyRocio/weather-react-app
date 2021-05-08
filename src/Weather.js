import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo"

import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultcity);

    
    function showResponse(response){
        setWeatherData({
          ready : true,
          city: response.data.name,
          date:new Date(response.data.dt * 1000),
          temperature : response.data.main.temp,
          feelslike: response.data.main.feels_like,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon
        })
    }

    function search(){

    let apiKey ="4005c7ae924df34c8466814b255e9b64"
    let units = "imperial" 
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(showResponse);
    
    }

    function updateCityChange(event){
      setCity(event.target.value)
    }

    function handleSubmit(event){
      event.preventDefault()
      search()
    }

    if (weatherData.ready){
      return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-7">
                <input 
                type="search" 
                placeholder="Enter a City ..." 
                autoFocus="on" 
                className="form-control searchform"
                list="datalistOptions"
                id="exampleDataList"
                onChange={updateCityChange}
                />
                <datalist id="datalistOptions">
                  <option value="San Francisco" />
                  <option value="Seattle" />
                  <option value="Los Angeles" />
                  <option value="Chicago" />
                </datalist>
                </div>
                <div className="col-4">
                <input
                type="submit" 
                value="Search"
                className="searchButton btn btn-dark btn-outline-light w-100"
                />
                    </div>
                    <button 
                    type="submit" 
                    className="searchButton btn btn-dark btn-outline-light">
                        <i className="fas fa-map-pin"></i>
                        </button>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            </div>
    );
  } else {
    search()
    return "Loading....";
  }
  }