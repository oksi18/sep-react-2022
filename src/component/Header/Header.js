import {useSelector} from "react-redux";

const Header = () => {
    const {selectUser} = useSelector(state => state.users)
    return(
        <div>
            {selectUser && selectUser.name}
        </div>
    )
}
export {Header};