import { useState,useEffect } from "react"
import { getPopularSeries } from "../../utils/getData"
import Grid from "../../components/Grid"

const Series = () =>{

    const [series,setSeries ] = useState()
    
    useEffect(()=>{

         const getAllSeries = async () => {
            Promise.all([
                getPopularSeries()
            // ]).then(result => console.log(result))
            ]).then(([series])=>{
                setSeries(series)
            }).catch(error => console.log(error))
        }

        getAllSeries()
       

    },[])
    
    return (
        
        <>
            {series && <Grid infoSeries={true} info={series}/>}
        </>
    )
}

export default Series