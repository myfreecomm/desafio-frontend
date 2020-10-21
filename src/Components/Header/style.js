import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    border: 1px solid #e0e0e0;
  }
`;

export const Hamburguer = styled.div`
  font-size: 36px;
  width: 40px;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const ShowInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  border: 2px solid #e0e0e0;

  max-width: 1623px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Logotipo = styled.img`
  margin: 40px;
`;

export const Notifications = styled.img``;

export const Avatars = styled(Notifications)``;

export const Arrows = styled(Notifications)`
  width: 10px;
  height: 10px;
  margin-left: -50px;
`;
