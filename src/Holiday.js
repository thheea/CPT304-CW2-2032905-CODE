import React, { useState } from "react";
import Holidays from 'date-holidays';

const languageCode = language => language.toLowerCase().split('-')[0]

const selectLanguage = (languages) => {
  const mainlanguages = languages.map(languageCode)

  for (let navlang of navigator.languages) {
    const l = navlang.toLowerCase()
    const i = languages.indexOf(l)
    if (i !== -1) {
      return languages[i]
    }
    const j = mainlanguages.indexOf(languageCode(l));
    if (j !== -1) {
      return languages[j];
    }
  }
  return languages[0]
}

function Table ({key, date, name, type}) {
  return (
    <tr key={key}>
      <td>{date}</td>
      <td>{name}</td>
      <td>{type}</td>
    </tr>
  )
}

function SelectCountry ({ country, countries, setCountry }) {
  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <body style={{fontFamily:"Poppins"}}>
      <select  style={{height: "32px", borderRadius: "10px", marginTop:"20px"}} value={country} onChange={(e) => setCountry(e.target.value)}>
        {Object.entries(countries).map(([languageCode, name], key) => (
          <option key={key} value={languageCode}>
            {name}
          </option>
        ))}
      </select>
    </body>
  </>
  )
}

export function Holiday () {
  const [country, setCountry] = useState('ID');
  const holiday = new Holidays(country);
  const countries = holiday.getCountries('en');
  

  const language = selectLanguage(holiday.getLanguages())
  holiday.setLanguages(language)

  const list = holiday.getHolidays();

  // countryDetails.countryName =  country;
 
  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <body style={{fontFamily:"Poppins"}}>
        <div style={{justifyContent:"center", textAlign:"center"}}>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            width: "100%",
            backgroundImage:"url(https://media.istockphoto.com/id/995353918/photo/close-up-of-calendar-on-the-table-planning-for-business-meeting-or-travel-planning-concept.jpg?s=612x612&w=0&k=20&c=rVmKXCL9JlATlEdaJECJecIl9D3zJT0QykCCanhkh_I=)",
            backgroundPosition: "0 -500px", 
            fontSize: "32px",
            color: "black"
          }}
        >
          <h3><span style={{backgroundColor:"white", borderRadius:"10px", paddingLeft:"10px", paddingRight:"10px"}}>List of Public Holidays</span></h3>
        </div>
   
          <SelectCountry country={country} countries={countries} setCountry={setCountry}></SelectCountry>
          <table className="holidays" cellPadding={5} style={{padding:"10px", width:"50%", margin:"auto", textAlign:"left"}}>
            <thead>
              <tr>
                <th style={{
                    paddingRight:"300px"
                }}>Date</th>
                <th style={{
                    paddingRight:"300px"
                }}>Name</th>
                <th >Type</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, key) => Table({...item, key}))}
            </tbody>
          </table>
        </div>
      </body>
      
    </>
  )
}





