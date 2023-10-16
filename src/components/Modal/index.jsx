import { useEffect, useState } from "react"
import { Container,Background } from "./styles"
import api from "../../services/api"
import {SlClose} from 'react-icons/sl'
import { getMovie } from "../../utils/getData"

function Modal({movideId,setShowModal}){
 const [movie,setMovie] = useState()

    useEffect(() =>{

        async function getMovies(){
               
            setMovie(await getMovie(movideId))
       }
       getMovies()
    },[])

    return (

        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    
                    <iframe src={`https://www.youtube.com/embed/${movie.key}`} title="Youtube Video Player" height="500xp" width='100%'></iframe>
                    <span><SlClose onClick={() => setShowModal(false)} size={30}/></span>
                </Container>
            )}

        </Background>
    ) 
}

export default Modal