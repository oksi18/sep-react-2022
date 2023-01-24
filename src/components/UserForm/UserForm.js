import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

const UserForm = () => {
    const {register, handleSubmit, reset, formState:{errors,isValid}, setValue } = useForm({mode:"all", resolver:joiResolver})

    const submit = (data) =>{
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'username'} {...register('username')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <button>Create</button>

        </form>
    )
}
export {UserForm};