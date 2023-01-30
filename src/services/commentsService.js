import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    addComment: (data) => axiosService.post(urls.comments, data)
}

export {commentsService};