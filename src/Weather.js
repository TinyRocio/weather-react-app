import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <form>
                <input type="search" placeholder="Enter a City ..." />
                <input type="submit" value="Search" />
            </form>
            <div className="row">
                <div className="col-6">
            <ul>
                <li className="location">New York</li>
                <li>Last Updated:</li>
                <li>Tuesday May, 4, 2021</li>
            </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                            alt="sunny" />
                            75°F
                        </li>
                        <li>Sunny</li>
                        <li>Feels Like: 80°F</li>
                        <li>Humidity: 15%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}