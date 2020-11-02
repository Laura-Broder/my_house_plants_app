const initItem = {
  id: null,
  day: null,
  maxTemp: null,
};

class DayData {
  constructor(item = initItem) {
    this.id = item.index;
    this.day = item.day;
    this.maxTemp = item.maxTemp;
    this.minTemp = item.minTemp;
    this.humidity = item.humidity;
    this.weatherDescription = item.weatherDescription;
    this.iconUrl = item.iconUrl;
  }
}

export class WeekData {
  constructor(dataArray = []) {
    this.weatherArray = this.processData(dataArray);
    this.saveNewData();
  }

  processData = (dataArray) => {
    return dataArray.map((item, index) => {
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
      };
      let d = new Date();
      let day = d.getDate() + index;
      d.setDate(day);
      const newDay = new Intl.DateTimeFormat("default", options).format(d);

      return new DayData({
        index: index,
        day: newDay,
        maxTemp: parseInt(item.temp.max),
        minTemp: parseInt(item.temp.min),
        humidity: item.humidity,
        weatherDescription: item.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      });
    });
  };

  getLength = () => {
    return this.weatherArray.length;
  };
  saveNewData = () => {
    localStorage.setItem("weekWeather", JSON.stringify(this.weatherArray));
    return this.weatherArray;
  };
  getData = () => {
    return this.weatherArray;
  };
  clearList = () => {
    this.weatherArray = [];
    this.saveNewData();
    return this.weatherArray;
  };
}
