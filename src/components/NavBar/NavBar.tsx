import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, StyledImg, ButtonContainer, StyledButton } from "../../styles/StyledNavBar.tsx";
import MapPage from '../../pages/MapPage/MapPage.tsx';


function NavBar() {

    const location = useLocation();
    const navigate = useNavigate();

    const isHomeActive = (location.pathname === '/' || location.pathname.startsWith('/internal-page')) ? "true":"false";
    const isMapActive = (location.pathname === '/map') ? "true" : "false";
    const isFavoritesActive = (location.pathname === '/favorites') ? "true" : "false";
    const imgUrl = "https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png";

    const handleHome = () => {
        navigate('/');
    }

    const handleMap = () => {
        navigate('/map');
    }

    return (
        <>
            <StyledImg className="responsive" src={imgUrl} />
            <Container>
                <StyledImg src={imgUrl} />
                <ButtonContainer >
                    <StyledButton active={isHomeActive} onClick={handleHome}>Home</StyledButton>
                    <StyledButton active={isMapActive} onClick={handleMap}>Map</StyledButton>
                    <StyledButton active={isFavoritesActive}>Favorites</StyledButton>
                </ButtonContainer>
            </Container>
        </>
    );
}

export default NavBar;