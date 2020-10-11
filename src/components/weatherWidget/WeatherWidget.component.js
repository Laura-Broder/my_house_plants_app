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
    // const status = getGeoLocation();
    // console.log(status);
    setFullData(initData);
  }, []);

  useEffect(() => {
    const weekData = new WeekData(fullData.daily);
    setWeatherArray(weekData.getData());
  }, [fullData]);

  const renderWeekWeather = () => {
    if (weatherArray.length) {
      return weatherArray.map((item) => {
        return (
          <div key={item.id} className="widget__card widget__card--grid-item">
            <h4>{item.day}</h4>
            <h5>{item.weatherDescription}</h5>
            <img src={item.iconUrl} alt={item.weatherDescription} />
            <h6>Min Temp: {item.minTemp}</h6>
            <h6>Max Temp: {item.maxTemp}</h6>
            <h6>Humidity: {item.humidity}</h6>
          </div>
        );
      });
    } else return <div>loading</div>;
  };

  return (
    <div className="widget">
      <h4 className="widget__header">Forecast in {currentLocation}</h4>
      <div className="widget--grid">{renderWeekWeather()}</div>
    </div>
  );
};

export default WeatherWidget;
