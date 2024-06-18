import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, StyledImg, ButtonContainer, StyledButton } from "../../styles/StyledNavBar.tsx";
import pokedexLogo from "../../../src/assets/pokedexLogo.svg";


function NavBar() {

    const location = useLocation();
    const navigate = useNavigate();

    const isHomeActive = (location.pathname === '/' || location.pathname.startsWith('/pokemon')) ? "true":"false";
    const isMapActive = (location.pathname === '/map') ? "true" : "false";

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <>
            <StyledImg className="responsive" src={pokedexLogo} />
            <Container>
                <StyledImg src={pokedexLogo} />
                <ButtonContainer >
                    <StyledButton active={isHomeActive} onClick={() => handleNavigate('/')}>Home</StyledButton>
                    <StyledButton active={isMapActive} onClick={() => handleNavigate('/map')}>Map</StyledButton>
                </ButtonContainer>
            </Container>
        </>
    );
}

export default NavBar;