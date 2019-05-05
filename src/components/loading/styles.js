import styled from 'styled-components';

export const LoadingContainer = styled.div`
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;

  img {
    animation:spin 2s linear infinite;
    margin-right: 10px;
  }

  @keyframes spin { 100% {transform: rotate(360deg)}}
`;