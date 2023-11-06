import api from "../services/api";

export async function getMovies(){

    const {data:{results}} = await api.get('/movie/popular')
    
    return results[0]
}

export async function getTopMovies(){
               
    const {data:{results}} = await api.get('/movie/top_rated')
    
    return results
}

export async function getTopSeries(){
               
    const {data:{results}} = await api.get('/tv/top_rated')
    
    return results
}

export async function getPopularSeries(){
               
    const {data:{results}} = await api.get('/tv/popular')

    return results
}

export async function getTopPeople(){
               
    const {data:{results}} = await api.get('/person/popular')
     
    return results
}

//Busca o filme pelo ID
export async function getMovieVideos(movideId){

    const {data:{results}} = await api.get(`/movie/${movideId}/videos`)

    return results

}


export async function getMovieCredits(movideId){

    const {data:{cast}} = await api.get(`/movie/${movideId}/credits`)

    return cast

}

export async function getMovieSimilar(movideId){

    const {data:{results}} = await api.get(`/movie/${movideId}/similar`)

    return results

}

export async function getMovieById(movideId){

    const {data} = await api.get(`/movie/${movideId}`)

    return data

}

export async function getAllMovies(){
    const {data:{results}} = await api.get(`/movie/popular`)

    return results
}




