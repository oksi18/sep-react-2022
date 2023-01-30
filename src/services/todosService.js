import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const todosService = {
    getAll: () => axiosService.get(urls.todos)

}

export {todosService};