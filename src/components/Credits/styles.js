import styled from "styled-components";

export const Title = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;


  }

  p {
    text-align: center;
    font-size: 15px;
  }

  img {
    height: 200px;
    border-radius: 10px;
  }

  @media (max-width: 740px) {
    
    flex-direction: column;

    }
`;
