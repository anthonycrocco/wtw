// ForecastCopy 
import React, { useState , useEffect} from 'react';
import Conditions from './Conditions';
//import classes from './Forecast.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [version, setVersion] = useState(0);


    const uriEncodedCity = encodeURIComponent(city);

    let [responseObj, setResponseObj] = useState({});

    function getForecast(e){
        //fetch(get("api.weather.gov/gridpoints/{wfo}/{x},{y}/forecast"))
        
        e.preventDefault();

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
                "method": "GET",
                "headers": {
                "x-rapidapi-key": "49c76a0928mshedff39be30330acp16df7bjsn97461581ed94",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                }
            })

            .then(response => response.json())

            .then(response => {
                setResponseObj(response)
            })

            .then(response => {
                console.log(response);
            })

            .catch(err => {
                console.error(err);
            });
            let userId = 'root';
            fetch('/users/'+userId+'/cities', {'method': 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({'city': city})})
            .then(response => response.json())
            .then(response => {
                setVersion(version + 1)
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
        }


useEffect(() => {
    let userId = 'root';
    // console.log('calling fetch with token ' + UserToken);
    fetch('/users/'+userId+'/cities').then(res => res.json()).then(response => {
      console.log('got data');
      console.log(response);
      
    })
  }, [version]);

    return (
        <div>
            <h2>Find current weather conditions</h2>
            <form onSubmit={getForecast}> 
            <FormControl variant="standard">
                <TextField sx={ {label: {color: 'white'},  input: {color: 'white' }}} label="Enter City" variant="filled" value={city} onChange={(e) => setCity(e.target.value)}/>
            </FormControl>
                <label>
                    <input
                       //className={classes.Radio}
                       type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    fahrenheit
                </label>
                <label>
                    <input
                        //className={classes.Radio}
                        type="radio"
                        name="units"
                        checked={unit ===  "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    celcius
                </label>
<br />
                <Button variant="contained" type="submit">get forecast </Button>

            </form>
            <Conditions
                responseObj={responseObj}
                />
        </div>
    );
}

export default Forecast;