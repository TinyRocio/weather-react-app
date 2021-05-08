import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="row">
                <div className="col-6">
                <h1 className="location">{props.data.city}</h1>
                </div>
                <div className="col-6">
            <ul>
                        <li className="weathericon">
                            <img 
                            src={props.data.iconUrl}
                            alt={props.data.description} />
                            {Math.round(props.data.temperature)}°F
                        </li>
            </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                <li>Last Updated:</li>
                <li className="date">
                  <FormattedDate date={props.data.date}/>
                </li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                            <li className="text-capitalize">{props.data.description}</li>
                            <li>Feels Like: {Math.round(props.data.feelslike)}°F</li>
                            <li>Humidity: {Math.round(props.data.humidity)}%</li>
                    </ul>
                </div>
            </div>
                            </div>
    )
}