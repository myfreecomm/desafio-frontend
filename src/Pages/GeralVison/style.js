import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 5px;
`;

export const InfoPage = styled.h3`
  margin: 10px 10px;
  :before {
    content: "";
    border-left: 3px solid var(--info);
    margin-right: 10px;
  }
`;

export const ContainerCard = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
`;
