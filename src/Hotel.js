import React, { useState } from "react";
import axios from "axios";

export function Hotel(){
    const [area, setArea] = useState("");
    const [lat, setLatitude] = useState(-6.2146);
    const [lng, setLongitude] = useState(106.8451);
  
    var [arr, setArray] = useState([]);
    var [location, setLocation] = useState([]);
    var [star, setStar] = useState([]);
    var [ranking, setRanking] = useState([]);
  
    const getHotel = (lat, lng) => {
      axios({
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
        params: {
          latitude: lat,
          longitude: lng,
          
          limit: '5',
          currency: 'USD',
          subcategory: 'hotel,bb,specialty'
        },
        headers: {
          'X-RapidAPI-Key': '3a8b400d77msh8cc78b0791dd7a3p18f156jsn6307be6385d9',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
  
      })
        .then((response) => {
          console.log(response.data);
          setArea(response.data.data[0].location_string);
         
          var hotelList = []
          var locationList = []
          var starList = []
          var rankingList = []
          for (let i = 0; i < 5; i++) {
            hotelList.push(response.data.data[i].name)
            locationList.push(response.data.data[i].location_string)
            starList.push(response.data.data[i].hotel_class)
            rankingList.push(response.data.data[i].ranking)
          }
          setArray(hotelList);
          setLocation(locationList);
          setStar(starList);
          setRanking(rankingList);
  
        })
        .catch((error) => {
          console.log(error);
        });

    };
    
    return (
      <>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <body style={{fontFamily:"Poppins"}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            width: "100%",
            backgroundImage:"url(https://www.thehotelguru.com/_images/27/09/270937b7bae95d6b7d5b642a7adcf2a1/henri-hotel-berlin-s1180x560.jpg)",
            backgroundPosition: "0 -800px", 
            fontSize: "32px",
            color: "black",
            marginTop: "60px"
          }}
        >
        <h3><span style={{backgroundColor:"white", borderRadius:"10px", paddingLeft:"10px", paddingRight:"10px"}}>Find Hotels Near You!</span></h3>
        </div>
     
        <div>
          <div
            style={{
              height: "150px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "22px",
              fontFamily: ""
            }}
          >
            Looking for hotels within ({lat},{lng})...
            <br />
            Location: {area}
          </div>
          <br />
        <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
            <label for="latitude">Latitude</label>
            <input
                style={{
                    height: "32px",
                    borderRadius: "10px",
                    marginLeft: "10px",
                    marginRight: "30px"
                }}
                id = "latitude"
                type="number"
                step="any"
                value={lat}
                placeholder="Latitude"
                onChange={(e) => setLatitude(e.target.value)}
            />
            <label for="longitude">Longitude</label>
            <input
                style={{
                    height: "32px",
                    borderRadius: "10px",
                    marginLeft: "10px"
                }}
                id = "longitude"
                type="number"
                step="any"
                value={lng}
                placeholder="Longitude"
                onChange={(e) => setLongitude(e.target.value)}
            />
    
            <button
                onClick={() => {
                getHotel(lat,lng);
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
            <br/>
            
          </div>

        </div>

        <table class="outlined" cellPadding={10} style={{
                width:"80%",
                margin:"auto",
                marginTop:"60px",
                borderCollapse:"collapse",
                backgroundColor: "#e6e6e6",
                borderRadius: "10px",
                marginBottom:"60px"
            }}>
        <tr>
            <th align="left" style={{
                paddingRight:"300px"
            }}>Hotel Name</th>
            <th align="left" style={{
                paddingRight:"100px"
            }}>Location</th>
            <th align="left" style={{
                paddingRight:"50px"
            }}>Stars ⭐</th>
            <th align="left">Ranking</th>
        </tr>
        <tr style={{
                borderTop:"1px solid white"

            }}>
            <td>{arr[0]}</td>
            <td>{location[0]}</td>
            <td>{star[0]}</td>
            <td>{ranking[0]}</td>
        </tr>
        <tr style={{
                borderTop:"1px solid white"

            }}>
            <td>{arr[1]}</td>
            <td>{location[1]}</td>
            <td>{star[1]}</td>
            <td>{ranking[1]}</td>
        </tr>
        <tr style={{
                borderTop:"1px solid white"

            }}>
            <td>{arr[2]}</td>
            <td>{location[2]}</td>
            <td>{star[2]}</td>
            <td>{ranking[2]}</td>
        </tr>
        <tr style={{
                borderTop:"1px solid white"

            }}>
            <td>{arr[3]}</td>
            <td>{location[3]}</td>
            <td>{star[3]}</td>
            <td>{ranking[3]}</td>
        </tr>
        <tr style={{
                borderTop:"1px solid #e6e6e6"

            }}>
            <td>{arr[4]}</td>
            <td>{location[4]}</td>
            <td>{star[4]}</td>
            <td>{ranking[4]}</td>
        </tr>    
        </table>
        </body>
  

  
      
       
      </>
  
    )
  
    
  }

