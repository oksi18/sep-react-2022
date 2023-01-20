import {User} from "../User/User";
import {Post} from "../Post/Posts";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../Services/axiosService";
import {userService} from "../Services/userService";
import {postService} from "../Services/postService";

const Users = () => {
    const [users, setUsers ] = useState([])
    const [count, seyCount] = useState(0)
    const [userDetails, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null);


    useEffect(() => {
        userService.getAll
            .then(value => value.data)
            .then(value => setUsers([...value]))
    },[count])

    useEffect(() => {
        postService.getAll
            .then(value => value.data)
            .then(value => setPosts([...value]))

    })

return (
    <div>
        <h1>UserDetails:</h1>
        {userDetails && <div>{userDetails.id} - email:{userDetails.email}</div> }
        {userDetails && <div>username: { userDetails.username}</div> }
        {postDetails && <div>postId: {postDetails.id} </div>}
        {postDetails && <div>title: {postDetails.title} </div>}
        {postDetails && <div>body: {postDetails.body} </div>}
        <hr/>

        <h1>Users:</h1>
        {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)},
        {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}

    </div>

)

}
export {Users}