import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../utils/getData"
import { Container } from "./styles"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
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
                  getMovieVideos(id),
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
         <Container>
            <div>Detalhe</div>
         </Container>

    ) 
}

export default Detail