import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100px;
  box-shadow: 2px 3px 0 0 #d0d6e2;
  margin-bottom: 10px;

  div {
    font-size: 20px;
    margin: 20px 0 0 10px;
    font-weight: bold;
  }

  @media (min-width: 1200px) {
    width: 22%;
  }
`;

export const Info = styled.h2`
  color: var(--info);
  margin-left: 10px;
`;
