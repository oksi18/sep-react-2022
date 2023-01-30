import React from "react";
import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";


const UsersForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode:"all"})

    const submit = async (data) => {
       await userService.create(data).then(({data}) => setUsers((prevState) => [...prevState, data]))
            reset()

    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder='name' {...register('name')}/>
            <input type='text' placeholder='email' {...register('email')}/>
            <button>Create</button>
        </form>
    )
}

export {UsersForm};