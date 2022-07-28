import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <li>
            <StyledLink to="/"> Strona główna</StyledLink>
          </li>
          <li>
            <StyledLink to="/done">Zrobione</StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">Projekty</StyledLink>
          </li>
          <li>
            <StyledLink to="/add-task">Dodaj zadanie</StyledLink>
          </li>
          <li>
            <StyledLink to="/add-project">Dodaj projekt</StyledLink>
          </li>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default Navigation;
