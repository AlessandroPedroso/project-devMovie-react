import Header from "../components/Header";

import {Outlet} from "react-router-dom"

function DefaultLayout(){
    return (
        <>
            <Header/> 
            <Outlet/>
            <div>Rodapé</div>
        </>
    )
}

export default DefaultLayout