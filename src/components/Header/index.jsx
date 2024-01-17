import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Container, Menu, Li, MenuDefault,DivShowMenu } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const [colorBlues, setColorBlues] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }

  const { pathname } = useLocation();

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true);
      setColorBlues(true);
    }

    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false);
      setColorBlues(false);
    }
  };

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="imagem-do-logos" />
      
      <DivShowMenu>
        <MenuDefault >
            <FiAlignJustify onClick={toggleMenu} size={50} />
        </MenuDefault>

    
                <Menu showMenu={showMenu}>
                <Li isActive={pathname === "/"} color={colorBlues}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes("filmes")} color={colorBlues}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes("series")} color={colorBlues}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </DivShowMenu>
     
    </Container>
    
  );
}

export default Header;
