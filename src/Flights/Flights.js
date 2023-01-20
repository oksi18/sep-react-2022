import {useEffect, useState} from "react";
import {flightService} from "../service/flightService";


const Flights = () => {
    const [flight, setFlight] = useState([]);
    const [count, setCount] = useState(0)

    useEffect(() =>{
        flightService.getAll
            .then(value => value.data)
            .then(value => setFlight([...value]))
    },[count])

return (
    <div>

    </div>
);
}

export {Flights};