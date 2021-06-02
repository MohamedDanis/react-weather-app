import React from 'react'
import moment from 'moment'
import './Weather.css'

function Weather(props) {
    return (
        <div className="container">
                <div className="Card">
                    <div className="top">
                        <h2>{props.weatherData.name}</h2>
                        <h1>{props.weatherData.main.temp}&deg;C</h1>
                        <h2>{props.weatherData.weather[0].description}</h2>
                    </div>
                <div className="bottom">
                    <div className="first-row">
                        <div className="content">
                            <h2>Sunrise</h2>
                            <h3>{new Date(props.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h3>
                        </div>
                        <div className="content">
                            <h2>Sunset</h2>
                            <h3>{new Date(props.weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h3>
                        </div>
                    </div>
                    <div className="second-row">
                    <div className="content">
                        <h2>Feels Like</h2>
                        <h3>{props.weatherData.main.feels_like} &deg;C</h3>
                    </div>
                        <div className="content">
                            <h2>Pressure</h2>
                            <h3>{props.weatherData.main.pressure} hPa</h3>
                        </div>
                    </div>
                    <div className="third-row">
                    <div className="content">
                        <h2>Wind Speed</h2>
                        <h3>{props.weatherData.wind.speed} m/s</h3>
                    </div>
                        <div className="content">
                            <h2>Wind direction</h2>
                            <h3>{props.weatherData.wind.deg}&deg;</h3>
                        </div>
                    </div>
                </div>
                </div>
        </div>
            
    )
}
      {/*
                <p>Sunrise: {new Date(props.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Sunset: {new Date(props.weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Description: {props.weatherData.weather[0].description}</p>
                <p>Day: {moment().format('dddd')}</p>
                <p>Date: {moment().format('LL')}</p> */}
export default Weather