// https://sujeitoprogramador.com/rn-api/?api=posts

import axios from "axios";

const url = "https://sujeitoprogramador.com/rn-api/";

const api = axios.create({
    baseURL: url,
});
export default api;
