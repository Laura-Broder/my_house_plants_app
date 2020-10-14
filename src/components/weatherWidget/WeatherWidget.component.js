import React, { useEffect, useState } from "react";
import weatherApi from "../../apis/weatherApi";
import "./weatherWidget.css";
const WeekData = require("../../functions/weatherData").WeekData;
const initData = require("../../functions/initTestData").initData;

const WeatherWidget = () => {
  const [fullData, setFullData] = useState({});
  const [currentLocation, setCurrentLocation] = useState(
    "your current location",
  );
  const [weatherArray, setWeatherArray] = useState({});
  const [isExpended, setIsExpended] = useState(false);

  // not active in dev
  const getWeather = async (lon, lat) => {
    const response = await weatherApi.get("", {
      params: {
        lat: lat,
        lon: lon,
      },
    });
    setFullData(response.data);
    // setCurrentLocation();
  };
  // not active in dev
  const getGeoLocation = () => {
    let status = "";
    if ("geolocation" in navigator) {
      status = "Available";
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeather(position.coords.longitude, position.coords.latitude);
        },
        (error) => {
          console.error("Error Code = " + error.code + " - " + error.message);
        },
      );
    } else {
      status = "Not Available";
    }

    return status;
  };

  useEffect(() => {
    // not active in dev:
    const status = getGeoLocation();
    console.log(status);
    // setFullData(initData);
  }, []);

  useEffect(() => {
    const weekData = new WeekData(fullData.daily);
    setWeatherArray(weekData.getData());
  }, [fullData]);

  const renderWeekWeather = () => {
    if (weatherArray.length) {
      return weatherArray.map((item) => {
        return (
          <div
            key={item.id}
            className={`widget__card widget__card--grid-item ${
              !isExpended && item.id !== 0 && "hide"
            }`}>
            <h5>{item.day}</h5>

            <h6>{item.weatherDescription}</h6>
            <img
              className="widget__card__img"
              src={item.iconUrl}
              alt={item.weatherDescription}
            />
            <h6>{item.minTemp} &deg;C</h6>
            <h6>{item.maxTemp} &deg;C</h6>
            <h6>Hum. {item.humidity} &#37;</h6>
          </div>
        );
      });
    } else return <div>loading</div>;
  };
  const toggleWidget = () => {
    setIsExpended(!isExpended);
  };
  return (
    <div className="widget">
      <div className="widget__header">
        <h4>Forecast in {currentLocation}</h4>
        <h6 className="header__show-more" onClick={toggleWidget}>
          {isExpended ? "Show less" : "Show more"}
        </h6>
      </div>

      <div className="widget--grid">{renderWeekWeather()}</div>
    </div>
  );
};

export default WeatherWidget;
