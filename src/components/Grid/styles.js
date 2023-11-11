import styled from "styled-components"

export const Container = styled.div`

    margin-top: 150px;
    width: 100%;

`

export const Body = styled.div`

    display: grid;
    grid-template-columns: repeat(4,1fr);
    padding: 50px;
    width: 100%;
    justify-items: center;
    row-gap: 50px;
    

    div{
        
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 30px;
        cursor: pointer;
        height: 100%;

    }

`