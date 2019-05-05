import styled from 'styled-components';

export const CardStatisicNumber = styled.div`
  max-width: 267px;
  width: 100%;
  height: 94px;
  box-shadow: 1px 1px 5px #e9eaee;
  margin-bottom: 50px;
  padding: 21px;
  background-color: #ffffff;
  
  :not(:last-of-type) {
    margin-right: 20px;
  }

  p {
    color: #393939;
    font-size: 17px;
    margin-bottom: 10px;
  }
  
  strong {
    font-size: 22px;
    color: #4891de;
  }
  `;

export const ClientCard = styled.div`
  width: 100%;
  height: 72px; 
  box-shadow: 1px 1px 5px #e9eaee;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  
  :not(:last-of-type) {
    margin-bottom: 10px;
  }

  :first-of-type {
    margin-top: 34px;
  }

  img {
    border-radius: 50%;
  }
  
  p {
    color: #393939;
  }
`;