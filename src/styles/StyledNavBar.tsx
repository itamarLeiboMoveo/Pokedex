import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

interface active{
    active?: string ;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
  background-color: #020166; ;
`;

// export const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   height: 67px;
//   background-color:#020166 ;
// `;

export const StyledImg = styled.img`
  height: 100%;
  margin-left: 110px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 150px;
  width: 92px;
  background-color: #020166;
  `;

export const StyledButton = styled.button<active>`
    color: #F7F7F9;
    background-color: ${({ active }) => (active ? 'green' : '#020166')} ;
    border: none;
    font-size: 16px;
`;