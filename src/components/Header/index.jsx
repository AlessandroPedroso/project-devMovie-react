import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container,Menu,Li } from './styles'
import {Link,useLocation} from 'react-router-dom'

function Header(){
    const [changeBackground,setChangeBackground] = useState(false)
    const [colorBlue, setColorBlue] = useState(false)

    const {pathname} = useLocation()

    window.onscroll = () => {

        if(!changeBackground && window.pageYOffset > 150){
            setChangeBackground(true)
            setColorBlue(true)
        }

        if(changeBackground && window.pageYOffset <=150){
                setChangeBackground(false)
                setColorBlue(false)
        }

    }

    return (
        <Container changeBackground={changeBackground} >
            <img src={Logo} alt="imagem-do-logos" />
           <Menu>
                <Li isActive={pathname === '/'} colorBlue={colorBlue}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')} colorBlue={colorBlue}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')} colorBlue={colorBlue}>
                    <Link to="/series">Séries</Link>
                </Li>
           </Menu>
        </Container>
    )
}

export default Header