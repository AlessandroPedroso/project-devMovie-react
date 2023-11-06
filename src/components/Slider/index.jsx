import {Container} from './styles'
import { Swiper, SwiperSlide } from "swiper/react";

import Card from '../Card';

function Slider({info,title}){

    return (
        <Container>
            <h3 style={{color:'white'}}>{title}</h3>
            
            <Swiper grabCursor spaceBetween={12} slidesPerView={'auto'} className="swiper">
                
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