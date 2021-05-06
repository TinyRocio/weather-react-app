import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props){
    //const [weatherData, setWeatherData] = useState = ({ready:false});

    let apiKey ="4005c7ae924df34c8466814b255e9b64"
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}`
    axios.get(apiUrl).then(showResponse);

    function showResponse(response){
        console.log(response.data.sys)
    }

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
                <h1 className="location">New York</h1>
                </div>
                <div className="col-6">
            <ul>
                        <li className="weathericon">
                            <img 
                            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="sunny" />
                            75°F
                        </li>
            </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                <li>Last Updated:</li>
                <li className="date">May, 4, 2021</li>
                <li className="time">Tuesday 05:30pm</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                            <li>Sunny</li>
                            <li>Feels Like: 80°F</li>
                            <li>Humidity: 15%</li>
                    </ul>
                </div>
            </div>
            </div>
    )
}