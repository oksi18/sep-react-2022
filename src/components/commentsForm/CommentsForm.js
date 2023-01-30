import {useForm} from "react-hook-form";
import {commentsService} from "../../services/commentsService";

const CommentsForm = ({setComments}) => {
const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode:"all"})

    const submit = async (data) => {
      await commentsService.addComment(data).then(({data}) => setComments((prevState)=> [...prevState, data]))
        reset()
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="name"{...register("name")}/>
            <input type="text" placeholder="email"{...register("email")}/>
            <button>Create</button>
        </form>
    )
}

export {CommentsForm};