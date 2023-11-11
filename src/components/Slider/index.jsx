import {Container} from './styles'
import { Swiper, SwiperSlide } from "swiper/react";
import {Link,useNavigate}  from 'react-router-dom'

import Card from '../Card';

function Slider({info,title}){
  
  const navigate = useNavigate()

  const someFunction = (id) => {
    
    navigate(`/detail/${id}`);
    navigate(0);
}
    return (
        <Container>
            <h3 style={{color:'white'}}>{title}</h3>
            
            <Swiper grabCursor spaceBetween={12} slidesPerView={'auto'} className="swiper">
                
                        {info.map((item,index)=>(
                              <SwiperSlide key={index}>
                                <Card item={item} onClick={() => someFunction(item.id)}></Card>
                              </SwiperSlide>
                            ))}
                </Swiper>
           
        </Container>
    ) 
}

export default Slider