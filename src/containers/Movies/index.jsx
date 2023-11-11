import { useEffect, useState } from "react"
import { getAllMovies } from "../../utils/getData"
import Grid from "../../components/Grid"



const Movies = () =>{

    const [movies,setMovies] = useState()
  
    
    useEffect(()=>{

        async function getAllData(){

            Promise.all([

                getAllMovies()

            ]).then(([movies]) =>{

                setMovies(movies)
            })

        }
        getAllData()

        

    },[])

    return (

        <>
            {movies && <Grid infoSeries={false} info={movies}/>} 
        </>

    )
}

export default Movies