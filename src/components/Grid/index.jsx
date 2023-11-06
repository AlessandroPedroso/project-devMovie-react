import Card from "../Card"
import { Container,Body } from "./styles"

const Grid = ({info}) =>{

    return (
        <Container>

            <Body>
                    {info.map((item,index)=>(
                        <div>
                            <Card key={index} item={item} />
                        </div>
                    ))}
                
            </Body>


        </Container>
    )
}

export default Grid