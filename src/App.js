
import {Users} from "./components/Users/Users";
import {UsersForm} from "./components/usersForm/UsersForm";
import {useEffect, useState} from "react";
import {userService} from "./services/userService";
import {CommentsForm} from "./components/commentsForm/CommentsForm";
import {Comments} from "./components/Comments/Comments";
import {commentsService} from "./services/commentsService";

 const App = () => {
     const [comments, setComments] = useState([])

     useEffect(() => {
         commentsService.getAll().then(({data}) => setComments([...data]))
     },[])
//     const [users, setUsers] = useState([])
//
//     useEffect(() => {
//         userService.getAll().then(({data}) => setUsers([...data]))
//     },[])
   return (
//      // <div>
//      //   <UsersForm setUsers={setUsers}/>
//      //     <hr/>
//      //   <Users users={users}/>
//      // </div>
       <div>
              <CommentsForm setComments={setComments}/>
           <hr/>
               <Comments comments={comments}/>
      </div>
   );
 };

 export {App};
