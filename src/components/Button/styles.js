import styled,{css} from "styled-components";


// export const MainButton = styled.button`

//     border: 3px solid #fff;
//     background:${props=> props.type ==='red' && '#ff0000' || props.type === 'white' && 'transparent'};
//     color: #fff;
//     border-radius: 30px;
//     padding: 10px 20px;
//     cursor: pointer;
//     font-size: 17px;
//     font-weight: 500;

//        border:${props=> props.type ==='red' &&  '4px solid transparent' || props.type === 'white' && '3px solid #fff'};
//        box-shadow:${props=> props.type === ' red' && '0px 0px 7px 8px rgb(255 0 0 / 30%)'} ;


//     &:hover{
//        color:${props=> props.type === 'red' && 'white' || props.type==='white' && '#ff0000'};
//        background:${props=> props.type === 'red' && '#ff0000' || props.type==='white' && '#fff'};
//        box-shadow: ${props=> props.type ==='red' && '0px 0px 7px 15px rgb(255 0 0 / 30%)'};
//     }
// `

const buttonStyles = css `

    border: 3px solid #fff;
    background:transparent;
    color: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;

    &:hover{
        color:#ff0000;
        background: #fff;

    }

`

export const ButtonWhite = styled.button`
    ${buttonStyles}
`

export const ButtonRed = styled.button`
    ${buttonStyles}

    background: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover{
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background: #ff0000;
        color:white;
    }
`