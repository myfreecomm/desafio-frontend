import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100px;
  width: 100%;
  border-bottom: 1px solid #b9c4c8;
  display: flex;
  align-items: center;
`;

export const Logotipo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 270px;
  margin: 0;
  border-right: 1px solid #b9c4c8;

  img {
    width: 177px
    height: 36px;

    @media (max-width: 1024px) {
      width: 100%;
      height: auto;
    }
  }
`;
