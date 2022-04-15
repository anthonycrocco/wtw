import React from 'react';
import { WeatherData } from './Components/WeatherData'
import { StatusData } from './Components/StatusData'
import Button from '@mui/material/Button';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init',
      isLoaded: false,
      weatherData: null
    }
  }

  abortController = new AbortController();
  controllerSignal = this.abortController.signal;

  weatherInit = () => {

    const success = (position) => {
      this.setState({status: 'fetching'});
      localStorage.setItem('location-allowed', true);
      this.getWeatherData(position.coords.latitude, position.coords.longitude);
    }
    
    const error = () => {
      this.setState({status: 'unable'});
      alert('Unable to retrieve location.');
    }
    
    if (navigator.geolocation) {
      this.setState({status: 'fetching'});
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      this.setState({status: 'unsupported'});
      alert('Your browser does not support location tracking, or permission is denied.');
    }
  }

  getWeatherData = (lat, lon) => {
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`;

    fetch(weatherApi, { signal: this.controllerSignal })
    .then(response => response.json())
    .then(
      (result) => {
        console.log(result);
        const { name } = result;
        const { country } = result.sys;
        const { temp, temp_min, temp_max, feels_like, humidity } = result.main;
        const { description, icon } = result.weather[0];
        const { speed, deg } = result.wind;

        this.setState({
          status: 'success',
          isLoaded: true,
          weatherData: {
            name,
            country,
            description,
            icon,
            temp: temp.toFixed(1),
            feels_like: feels_like.toFixed(1),
            temp_min: temp_min.toFixed(1),
            temp_max: temp_max.toFixed(1),
            speed,
            deg,
            humidity
          }
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }


  
  onClick = () => {
    this.weatherInit();
    this.adviceTemp();
  }

  returnActiveView = (status) => {
    switch(status) {
      case 'init':
        return(
            <Button variant="contained" onClick={this.onClick}>Get My Location</Button>
        );
      case 'success':
        return <WeatherData data={this.state.weatherData} />;
      default:
        return <StatusData status={status} />;
    }
  }


  componentDidMount() {
    if(localStorage.getItem('location-allowed')) {
      //this.weatherInit();
    } else {
      return;
    }
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  adviceTemp() {
    const temp = temp
    if(temp > 50) {
      alert('temp > 50');

    }
    else {
      alert('temp < 50');
    }
  }

  render() {
    return (
      <div >
        <div >
         {this.returnActiveView(this.state.status)}
        </div>
      </div>
    );
  }
}

export default Forecast;