import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { Background,Info,Poster,Container,ContainerButtons} from './styles'
import { useState,useEffect } from 'react'
import {getImages} from '../../utils/getImages'
import Modal from '../../components/Modal'
import {useNavigate} from 'react-router-dom'
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../utils/getData'

const Home = () =>{
     const [showModal,setShowModal] = useState(false)
     const [movie,setMovie] = useState()
     const [topMovies,setTopMovies] = useState()
     const [topSeries,setTopSeries] = useState()
     const [popularSeries,setPopularSeries] = useState()
     const [TopPeople,setTopPeople] = useState()
     const navigate = useNavigate()
     
     useEffect(()=>{
          
          // async function getAllData(){
          //     console.time('time')
          //      setMovie(await getMovies())
          //      setTopMovies(await getTopMovies())
          //      setTopSeries(await getTopSeries())
          //      setPopularSeries(await getPopularSeries())
          //      setTopPeople(await getTopPeople())
          //      console.timeEnd('time')
          // }

          
          // getAllData()

          async function getAllData(){
                console.time('time')
               Promise.all([
                    getMovies(),
                    getTopMovies(),
                    getTopSeries(),
                    getPopularSeries(),
                    getTopPeople()
               ]).then(([movie,TopMovies,TopSeries,PopularSeries,TopPeople]) => {
                setMovie(movie)
                setTopMovies(TopMovies)
                setTopSeries(TopSeries)
                setPopularSeries(PopularSeries)
                setTopPeople(TopPeople)
               })
                 .catch(error => console.log(error))
                 console.timeEnd('time')
           }
 
           
           getAllData()

     },[])

     // const testeButtonText = event => {

     //      console.log(event.target.innerText)

     // }

    return (
     <>   
          {movie && (
                         <Background img={getImages(movie.backdrop_path)}>
                             { showModal  && <Modal movideId={movie.id} setShowModal={setShowModal} />}
                              <Container>
                                   <Info>
                                        <h1>{movie.title}</h1>
                                        <p>{movie.overview}</p>
                                        <ContainerButtons>
                                             <Button onClick={() => navigate(`/detail/${movie.id}`)} red={true}>Assista Agora</Button>
                                             <Button  onClick={()=> setShowModal(true)} red={false}>Assista o Trailer</Button>
                                        </ContainerButtons>

                                   </Info>
                                   <Poster>

                                        <img alt='capa-do-filme' src={getImages(movie.poster_path)}/>

                                   </Poster>
                              </Container>


                         </Background>
                    )
           }

         {topMovies && <Slider info={topMovies} title={'Top Filmes'} /> }
         {topSeries && <Slider info={topSeries} title={'Top Séries'} /> }
         {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} /> }
         {TopPeople && <Slider info={TopPeople} title={'Top Artistas'} /> }
       

     </>

    )
}

export default Home