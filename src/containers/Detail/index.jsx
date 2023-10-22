import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideosDetail } from "../../utils/getData"
import { Container,Backgorund,Cover,Info } from "./styles"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import {getImages} from '../../utils/getImages'
function Detail(){
    console.log(useParams())
    const [movie,setMovie] = useState()
    const [movieVideos,setMovieVideos] = useState()
    const [movieCredits,setMovieCredits] = useState()
    const [movieSimilar,setMovieSimilar] = useState()

    const {id} = useParams()

    useEffect(()=>{
          
        async function getAllData(){
              //console.time('time')
             Promise.all([
                  getMovieById(id),
                  getMovieVideosDetail(id),
                  getMovieCredits(id),
                  getMovieSimilar(id)

             ]).then(([movie,videos,credits,similar]) => {
                console.log({movie,videos,credits,similar})
              setMovie(movie)
              setMovieVideos(videos)
              setMovieCredits(credits)
              setMovieSimilar(similar)
             })
               .catch(error => console.log(error))
               //console.timeEnd('time')

               
         }

         
         getAllData()
         

   },[])
    return (
     <>
          {movie && (
               <>
                    <Backgorund image={getImages(movie.backdrop_path)}/>
                         
                    <Container>
                         <Cover>
                              <img src={getImages(movie.poster_path)}/>
                         </Cover>
                         <Info>
                              <h2>{movie.title}</h2>
                              <div>Generos</div>
                              <p>{movie.overview}</p>
                              <div>Créditos</div>
                         </Info>

                    </Container>
               </>
         )}
     </>

    ) 
}

export default Detail