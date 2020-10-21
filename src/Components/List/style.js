import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95%;
  margin-bottom: 10px;
  border-bottom: 1px solid #b1bace;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    height: 100px;
  }
`;

export const ImageUser = styled.img`
  height: 60px;
  width: 60px;
  margin-left: 5px;
  border-radius: 50%;
  display: block;
`;

export const InfoUser = styled.h4``;
