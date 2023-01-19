import {User} from "../User/User";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../Services/axiosService";

const Users = () => {
    const [users, setUsers ] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        axiosService.get('/users')
            .then(value => value.data)
            .then(value => setUsers([...value]))
    },[count])

return (
    <div>
        <button onClick={() => setCount(prevState => prevState+1)}>more info</button>
        {users.map(user => <User key={user.id} user={user}/>)}
    </div>

)

}