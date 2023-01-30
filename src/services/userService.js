import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";


const userService = {
    getAll: () => axiosService.get(urls.users),
    create: (data) => axiosService.post(urls.users, data)
}

export {userService};