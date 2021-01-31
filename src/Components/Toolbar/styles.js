import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px;
  height: 42px;
  border-bottom: 1px solid #C0BBBB;

  h3 {
    font-size: 18px;
    color: #807D7D;
  
    @media (max-width: 700px) {
      font-size: 13px;
    }

    @media (max-width: 420px) {
      font-size: 10px;
    }
  }  
`;
