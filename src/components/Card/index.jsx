import { Container } from "./style"
import {getImages} from  '../../utils/getImages'
const Card = ({item,onClick})=>{

    return (
                
            <Container>
                
                    <img src={getImages(item.poster_path || item.profile_path || '')} onClick={onClick} alt="imagem-carrosel" />
                    <h3>{item.title || item.name}</h3>
            </Container>
    )

}

export default Card