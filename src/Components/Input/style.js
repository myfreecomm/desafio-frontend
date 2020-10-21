import styled from "styled-components";

export const ContainerInput = styled.input.attrs({
  placeholder: "Busque por clientes",
})`
  color: var(--#0099CC);
  font-size: 24px;
  border: none;
  width: 95%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  width: 95%;
  height: 48px;
  border-radius: 10px;
  border: 1px solid #ccc;

  @media (min-width: 1200px) {
    width: 70%;
  }
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 4px;
`;
