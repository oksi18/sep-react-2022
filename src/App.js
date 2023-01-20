import {useEffect, useState} from "react";


const App = () => {
  const [flights, setFlights]  = useState([])

useEffect(() => {
  fetch('https://api.spacexdata.com/v3/launches/')
      .then(value => value.json())
      .then(value => setFlights([...value]))
},[])
  return (
      <div className="App">
        {flights.filter(flight => flight.launch_year !== '2020').map(flight => {
          return (
              <div key={flight.flight_number}>
               <div>
                   <h2>{flight.flight_number}    <b>name:</b> {flight.mission_name}</h2>
                   <ul>
                       <li> <b>year:</b>{flight.launch_year}</li>
                       <li> <b>link:</b>{flight.links.mission_patch_small}</li>
                   </ul>

               </div>
              </div>
          )
        })}
      </div>
  );
}

export {App};
