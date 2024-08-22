import axios from "axios";

const URL_API = "http://localhost:8080/api/v1/products/";

export const getData = async (endpoint) => {
    try {
        const {data} = await axios.get(`${URL_API}${endpoint}`);

        return data;

    } catch (error) {
        
        console.log("Error haciendo la peticion a la api",error);
        return [];
    }
}