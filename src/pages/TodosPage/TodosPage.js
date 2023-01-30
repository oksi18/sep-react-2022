import React, {useEffect, useState} from "react";
import {todosService} from "../../services/todosService";
import {Todos} from "../../components/Todos/Todos";

const TodosPage = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos([...data]))
    },[])
    return(
        <div>
            TodosPage
            <Todos todos={todos}/>
        </div>
    )
}

export {TodosPage};