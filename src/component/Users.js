import {useEffect} from "react";
import {usersService} from "../service";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../slices";
import {User} from "./User";

const Users = () => {

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)
    useEffect(() => {
        usersService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
    },[dispatch])
    return(
        <div>
            {users.map( user => <User key={user.id} user={user}/>)}
        </div>
    )
};
export {Users};