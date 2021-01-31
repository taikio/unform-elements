import styled, { createGlobalStyle } from 'styled-components';

/* ====== Creating global styles ======= */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-size: 1rem;    
    background: #ededed;
    font-family: 'Inter', sans-serif;
    color: #535353;
  }

  #root {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
  }
  
`;

export default GlobalStyle;
/* ==== end Creating global styles ===== */

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-top: ${(props) => props.pdtop}px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 6px;
  padding-top: ${(props) => props.pdtop}px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.justify ? props.justify : 'flex-start')};
  width: ${(props) => props.wd}%;
`;

export const ToolbarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;  
  margin: 0 8px;
  border: 2px solid #610989;
  border-radius: 8px;
  color: #610989;
  background-color: transparent;
  transition: 0.3s;

  &:hover {
    background-color: #610989;
    color: #fff;
    cursor: pointer;
  }

  svg {
    font-size: 18px;

    @media (max-width: 700px) {
      font-size: 16px;
    }

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }
`;

export const ToolbarButtonWarning = styled(ToolbarButton)`
  border: 2px solid red;
  color: red;

  &:hover {
    background-color: red;
    color: #fff;
    cursor: pointer;
  }
`;