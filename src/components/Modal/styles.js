import styled from "styled-components";

export const Background = styled.div`

    height:100vh;
    width:100%;
    z-index: 999;
    background-color: rgba(0,0,0,0.6);
    position:absolute;
    display:flex;
    align-items: center;
    justify-content: center;
   
`

export const Container = styled.div`

    background: #000;
    width: 70%;
    display:flex;
    justify-content: center;
    
    align-items: center;
    position:fixed;
    padding: 15px;
    max-width:1200px;

    iframe{
        
        border: none;
    }

    span{
        cursor: pointer;
        position: relative;
        top: -230px;

    }

    @media (max-width: 500px) {
        padding: 0px;
     
        iframe{

            padding-left: 25px;
        }
        
        
    }
    
`
