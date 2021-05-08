import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="row">
                <div className="col">
                <h1 className="location">{props.data.city}</h1>
                </div>
                <div className="col">
                  <div className="float-right">
                          <WeatherIcon code={props.data.icon}/>
                  </div>
                </div>
                <div className="col">
                  <div className="float-left">
                            <span>{Math.round(props.data.temperature)}°F</span>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                <li>Last Updated:</li>
                    </ul>
                  <FormattedDate date={props.data.date}/>
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