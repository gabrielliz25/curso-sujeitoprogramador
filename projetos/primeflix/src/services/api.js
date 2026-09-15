// Base da URL
//  

// GET MOVIES -> movie/now_playing?api_key=4f95de02a963d4aa056c46a840e03425&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export default api;
