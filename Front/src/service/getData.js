import axios from "axios";

const URL_API = "https://fakestoreapi.com/";

export const getData = async (endpoint) => {
    try {
        const {data} = await axios.get(`${URL_API}${endpoint}`);
        console.log("Msotrando desde la funcion",data);

        return data;

    } catch (error) {
        
        console.log("Error haciendo la peticion a la api",error);
        return [];
    }
}