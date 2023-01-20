import {axiosService} from "./axiosService";
const flightService = {
    getAll: axiosService.get('/launches/'),
}
export {flightService};