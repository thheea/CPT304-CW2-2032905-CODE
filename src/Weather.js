import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";

export function SelectDate(){
  const [date, setDate]=useState();
  console.log("Date", date);

  return(
    <>
    <h3 style={{ marginTop: "50px"}}>Date: {date}</h3>
    <input type="date" onChange={e=>setDate(e.target.value)}/>
    </>
  );
}

export function Weather(){

  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [city, setCity] = useState("Jakarta");
  const [country, setCountry] = useState("Indonesia");
  
  const getWeather = (city, country) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
    })
      .then((response) => {
        console.log(response.data.main.temp);
        setTemperature(response.data.main.temp - 273.15);
        setDescription(response.data.weather[0].main);                
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <body style={{fontFamily:"Poppins"}}>
      <div style={{ marginTop: "50px", justifyContent:"center", textAlign:"center"}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            width: "100%",
            backgroundImage:"url(https://image.pbs.org/poster_images/assets/buac17-vid-diffweather-poster_aN5dMPV.png)",
            backgroundPosition: "0 -800px", 
            fontSize: "32px",
            color: "black",
            marginTop: "20px"
          }}
        >
          <h3><span style={{backgroundColor:"white", borderRadius:"10px", paddingLeft:"10px", paddingRight:"10px"}}>Weather Forecast</span></h3>
        </div>
        <SelectDate/>

        <div style={{ marginBottom: "20px", marginTop:"30px"}}>
            <label for="cityName">City</label>
            <input style={{
                        height: "32px",
                        borderRadius: "10px",
                        marginLeft:"10px",
                        marginRight: "30px"
                    }}
            type="text"
            value={city}
            id = "cityName"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            />
            <label for="countryName">Country</label>
            <input style={{
                        height: "32px",
                        borderRadius: "10px",
                        marginLeft: "10px"
                    }}
            type="text"
            value={country}
            id = "countryName"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
            />
            <button
            onClick={() => {
                getWeather(city, country);
            }}
            style={{
                height: "32px",
                borderRadius: "10px",
                marginLeft:"50px",
                width:"120px",
                backgroundColor:"#D7F8F7",
                border:'0px',
                fontFamily:"Poppins"
            }}
            >
            Search
            </button>
        </div>

        <div
        style={{
            height: "150px",
            width: "50%",
            backgroundColor: "#e6e6e6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            borderRadius:"10px",
            margin:"auto",
            marginTop:"50px"
        }}
        >
        {city}, {country}
        <br />
        Current Weather: {Math.round(temperature * 100) / 100} ℃ - {description}
        </div>
      </div>
    </body>
    </>
    
  );
  
}

render((<Weather/>), document.querySelector("#root"));