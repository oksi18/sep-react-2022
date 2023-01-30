const Todo = ({todo}) =>{
    const {userId ,id, title, completed} = todo
    return(
        <div>
            <div><b>userId:</b> {userId} </div>
            <div><b>id:</b> {id} </div>
            <div><b>title:</b> {title} </div>
            <div><b>status:</b> {todo.completed ? 'Completed' : 'Not completed yet'} </div>
        </div>
    )
}
export {Todo};