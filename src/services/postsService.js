import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const postsService = {
    getPostById: (id) => axiosService.get(urls.getPostById(id))
}
 export {postsService};