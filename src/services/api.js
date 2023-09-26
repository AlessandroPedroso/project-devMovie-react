import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: 'f0c5de5d9184326afe116ef3a34afb69',
        language: 'pt-BR',
        page:1
    }
})

export default api

// https://api.themoviedb.org/3/movie/popular?api_key=f0c5de5d9184326afe116ef3a34afb69&language=pt-BR&page=1
