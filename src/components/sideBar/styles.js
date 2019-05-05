import styled from 'styled-components';

export const SideBarContainer = styled.aside`
  width: 100%;
  max-width: 270px;
  height: calc(100vh - 100px);
  border-right: 1px solid #b9c4c8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemSidebar = styled.div`
  height: 67px;
  transition: border .3s ease-in-out;
  border-left: ${ props => (props.isActive ? '6px solid #25cbfb' : 0) };
  
  :hover {
    border-left: 6px solid #25cbfb;
  }
  
  a {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 0 25px;
    text-decoration: none;
    font-size: 17px;
    background-color: ${ props => ( props.isActive ? '#f4f9ff' : 'transparent') };
    font-weight: ${ props => ( props.isActive ? 'bold' : 'normal') };
    color: #4a4b4f;
    transition: all .3s ease-in-out;
  }
  
  a:hover {
    background-color: #f4f9ff;
    font-weight: bold;
  }

  i {
    display: block;
    margin-right: 10px;
  }
`;

export const Icon = styled.i`
  background: url( ${props => props.image} ) no-repeat;
  background-size: contain;
  display: block;
  width: 25px;
  height: 25px;
`;

export const SupportButton = styled.div`
  border-top: 1px solid #b9c4c8;
  height: 66px;

  a {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 0 25px;
    text-decoration: none;
    font-size: 17px;
    color: #4a4b4f;
  }
  
  i {
    display: block;
    margin-right: 10px;
  }
`;