const User = ({user}) => {
    const {id, name, email, username} = user;
    return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>name:</b> {name}</div>
            <div><b>email:</b> {email}</div>
            <div><b>username:</b> {username}</div>
        </div>
    )
}
export {User};