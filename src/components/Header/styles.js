import styled from "styled-components";

export const Container = styled.div`
  min-height: 100px;
  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 50px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.changeBackground ? "#000" : "transparent"};
  transition: background-color 0.6s ease-in-out;

  img {
    width: 30%;
  }

  @media (max-width: 1024px) {
    min-height: auto;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    img{
        position: static;
    }
  }

  @media (max-width: 650px) {
    img{
        width: 45%;
    }
  }
`;
export const MenuDefault = styled.div`
  display: none;
  color: white;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
  }
`;
export const DivShowMenu = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  @media (max-width: 1024px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  }
`;
export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.isActive ? "100%" : 0)};
    background-color: ${(props) => (props.color ? "blue" : "#189b20")};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 650px) {
    font-size: 23px;
  }

  @media (max-width: 350px) {
    font-size: 20px;
  }
`;
