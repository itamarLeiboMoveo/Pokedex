import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, StyledImg, ButtonContainer, StyledButton } from "../../styles/StyledNavBar.tsx";


function NavBar() {

    const location = useLocation();
    const navigate = useNavigate();

    const isHomeActive = location.pathname === '/' || location.pathname.startsWith('/internal-page');
    const isFavoritesActive = location.pathname === '/favorites';
    const imgUrl = "https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png";

    const handleHome = () => {
        navigate('/');
    }

    return (
        <>
            <StyledImg className="responsive" src={imgUrl} />
            <Container>
                <StyledImg src={imgUrl} />
                <ButtonContainer >
                    <StyledButton active={isHomeActive} onClick={handleHome}>Home</StyledButton>
                    <StyledButton active={isFavoritesActive}>Favorites</StyledButton>
                </ButtonContainer>
            </Container>
        </>
    );
}

export default NavBar;