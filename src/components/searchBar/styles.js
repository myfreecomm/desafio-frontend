import styled from 'styled-components';
import searchIcon from "../../assets/Shape.png";

export const SearchbarContainer = styled.div`
  display: flex;
  border-radius: 40px;
  border: ${ props => props.focus ? '3px solid #f0f0f0' : '1px solid #f0f0f0'};
  margin-left: 25px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  max-width: 690px;
  transition: border 0.1s ease-in-out;
  
  :before {
    content: '';
    display: block;
    background: url(${searchIcon}) no-repeat;
    height: 20px;
    width: 27px;
  }

  input {
    width: 100%;
    max-width: 690px;
    height: 40px;
    outline: 0;
    padding-left: 10px;
    margin-right: 25px;
    border: 0;
  }

  :focus {
    border-width: 2px;
    border-color: #b9c4c8;
  }
`;
