import {useDispatch} from "react-redux";
import {userActions} from "../slices";

const User = ({user}) => {
    const {id, name, username} = user
    const dispatch = useDispatch();
    return(
        <div>
            <div><b>id:</b>{id}</div>
            <div><b>name:</b>{name}</div>
            <div><b>username:</b>{username}</div>
            <button onClick={() => dispatch((userActions.setSelectUser(user)))}>select</button>
        </div>
    )
};
export {User};