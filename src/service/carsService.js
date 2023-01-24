import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";
import {create} from "axios";

const carService = {
    getAll: () =>axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}
export {carService};
