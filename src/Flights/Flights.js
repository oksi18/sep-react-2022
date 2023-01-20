import {useEffect, useState} from "react";
import {flightService} from "../service/flightService";
import {Flight} from "../Flight/Flight";


const Flights = () => {
    const [flights, setFlight] = useState([]);
    const [count, setCount] = useState(0)

    useEffect(() =>{
        flightService.getAll
            .then(value => value.data)
            .then(value => setFlight([...value]))
    },[count])

return (
    <div>
        {flights.filter(flight => flight.launch_year !== '2020')
            .map(flight => <Flight key={flight.flight_number} flight={flight}/>)}
    </div>
);
}

export {Flights};