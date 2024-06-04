import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, StyledImg, ButtonContainer, StyledButton } from "../../styles/StyledNavBar.tsx"


function NavBar() {
    
    const location = useLocation();

    const isHomeActive = location.pathname === '/' || location.pathname === '/internal';
    const isFavoritesActive = location.pathname === '/favorites';

    return (
        <Container>
            <StyledImg src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png" />
            <ButtonContainer>
                <StyledButton >Home</StyledButton>
                <StyledButton >Favorites</StyledButton>
                {/* <StyledButton active={isHomeActive}>Home</StyledButton>
                <StyledButton active={isFavoritesActive}>Favorites</StyledButton> */}
            </ButtonContainer>
        </Container>
    );
}

export default NavBar;