import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeriesById, getSeriesCredit } from "../../utils/getData";
import { Backgorund, Container, CoverImage,Info } from "./styles";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";

const DetailSeries = () => {
  const { idSeries } = useParams();
  const [series, setSeries] = useState();
  const [seriesCredit, setSeriesCredit] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSeriesById(idSeries),
        getSeriesCredit(idSeries)
    ])
        .then(([serie,credit]) => {
          setSeries(serie)
          setSeriesCredit(credit)
          
        })
        .catch((error) => console.log(error));
    }

    getAllData();
  }, []);

  console.log(series);

  return (
    <>
      {series && (
        <>
          <Backgorund image={getImages(series.backdrop_path)} />
          <Container>
            <CoverImage>
                <img
                    src={getImages(series.poster_path)}
                    alt="title-image-poster-serie"
                />

            </CoverImage>
            <Info>
                <h2>{series.original_name}</h2>
                <SpanGenres genres={series.genres}/>
                <p>{series.overview}</p>
                <div>
                    <Credits credits={seriesCredit}/>
                </div>

            </Info>
          </Container>


        </>
      )}
      <h1>teste</h1>
    </>
  );
};

export default DetailSeries;
