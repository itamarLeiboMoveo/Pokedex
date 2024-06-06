import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

interface active {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
  background-color: #020166;
  @media (max-width: 640px){
    display: none;
  }
`;

export const StyledImg = styled.img`
  height: 100%;
  margin-left: 110px;
  &.responsive {
    display: none;
    visibility: hidden;

    @media (max-width: 640px) {
      display: block;
      visibility: visible;
      margin-left: 0;
      margin-right: 0;
      width: 60%;
      height: auto;
      max-width: 100%;
      margin: 0 auto;
      
    }

    @media (max-width: 555px) {
      width: 330px; 
      max-width: none; 
      height: 100%; 
      margin-left: 110px; 
      margin-right: 110px; 
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 150px;
  width: 92px;
  height: 100%;
  `;

export const StyledButton = styled.button<active>`
    color: #F7F7F9;
    border: none;
    font-size: 16px;
    cursor: pointer;
    background-color: ${({ active }) => (active ? 'green' : '#020166')} ;
`;