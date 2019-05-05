import styled from 'styled-components';
import arrowDown from "../../assets/Arrow.png";

export const PerfilContainer = styled.div`
  margin: 0 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 81px;
  cursor: pointer; 

  i {
    background: url(${arrowDown}) no-repeat;
    display: block;
    width: 14px;
    height: 8px; 
  }
`;