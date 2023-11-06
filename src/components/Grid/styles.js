import styled from "styled-components"

export const Container = styled.div`

    margin-top: 150px;
    width: 100%;

`

export const Body = styled.div`

    display: grid;
    grid-template-columns: repeat(4,1fr);
    padding: 50px;
    justify-content: center;
    

    div{
        
        display: flex;
        text-align: center;
        flex-direction: column;
        margin-bottom: 30px;
        

    }

`