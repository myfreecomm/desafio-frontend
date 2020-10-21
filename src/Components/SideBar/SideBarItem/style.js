import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 1200px) {
    width: 330px;
    height: 100vh;
    border-right: 1px solid #e0e0e0;
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--select);
`;

export const Selected = styled.div`
  height: 100%;
  border: ${(props) =>
    props.select ? "3px solid #33b5e5" : "3px solid transparent"};
`;

export const Icon = styled.img`
  margin-left: 24px;
`;

export const Text = styled.h3`
  margin-left: 24px;
`;
