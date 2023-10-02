import {Container} from './styles'
import { Swiper, SwiperSlide } from "swiper/react";

import Card from '../Card';
function Slider({info,title}){
console.log(info)
    return (
        <Container>
            <h2 style={{color:'white'}}>{title}</h2>
            
            <Swiper grabCursor spaceBetween={10} slidesPerView={'auto'} className="swiper">
                
                        {info.map((item,index)=>(
                              <SwiperSlide key={index}>
                                <Card item={item}/>
                              </SwiperSlide>
                            ))}
                </Swiper>
           
        </Container>
    ) 
}

export default Slider