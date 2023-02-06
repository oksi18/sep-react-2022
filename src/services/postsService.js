import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const postsService = {
    getAll: () => axiosService.get(urls.posts)
}

export {postsService};