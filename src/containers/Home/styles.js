import styled, { keyframes } from "styled-components";

const scale = keyframes`

    from{
        transform: scale(0);
    }

    to{
        transform: scale(1);
    }

`;

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  margin-top: 80px;

  /* @media (max-width: 778px) {
    flex-direction: column-reverse;
    margin-top: 750px;
  } */
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #ffff;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: #ffff;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  
  @media (max-width: 1046px) {
            h1 {
            font-size: 3rem;
        }
  }



  @media (max-width: 780px) {
            h1 {
            font-size: 3rem;
        }
  }

  @media (max-width: 640px) {
            h1 {
            font-size: 2rem;
        }
  }

  @media (max-width: 580px) {
            h1 {
            font-size: 2rem;
        }
  }


  @media (max-width: 430px ) {

        width: 100%;

        display: flex;
        flex-direction: column;
        animation: ${scale} 0.5s linear;
        

        h1{
            font-size: 1.2rem;
        }
  }
`;

export const Poster = styled.div`
  z-index: 3;

  img {
    width: 350px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 780px) {
    img {
            width:300px;
        }
  }

  @media (max-width: 640px) {
            img {
            width:260px;
        }
  }

  @media (max-width: 580px) {
    img {
            width:210px;
        }
  }

  @media (max-width: 430px ) {
    
    img{
       display: none;
    }
}
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
    
  @media (max-width: 430px ) {

        justify-content: center;

}
    

  
`;
