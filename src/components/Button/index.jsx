import { ButtonRed,ButtonWhite } from "./styles"

function Button({children,red}){

    return (
            // <MainButton {...props} >{children}</MainButton>
        <>
            {red ? (<ButtonRed>{children}</ButtonRed>):(<ButtonWhite>{children}</ButtonWhite>)}
         </>

    ) 
}

export default Button