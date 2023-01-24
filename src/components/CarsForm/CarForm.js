import { useForm } from 'react-hook-form';
import {carService} from "../../service";
const CarForm = () => {
    const {register, handleSubmit,reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'})

    const submit = async (car) => {
        const{data} = await carService.create(car)
    }
    return(
       <form onSubmit={handleSubmit(submit)}>
           <input type='text' placeholder={'brand'} {...register('brand')}/>
           <input type='text' placeholder={'price'} {...register('price')}/>
           <input type='text' placeholder={'year'} {...register('year')}/>


       </form>
    )
}
export {CarForm};
