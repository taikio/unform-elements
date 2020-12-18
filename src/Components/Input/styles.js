import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 8px;

  input {
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#9e9e9e')};
    border-radius: 6px;
    outline: none;
    transition: .2s ease-in-out;
    box-sizing: border-box;
    font-size: 15px;
    height: 3rem;
    padding-bottom: -10px;
    padding-left: 10px;
    text-transform: uppercase;
    width: 100%;
    color: #495057;
    font-weight: 600;

    &:focus {
      border: 1px solid ${(props) => (props.invalid ? 'red' : '#610989')};
      box-shadow: 1px 1px 6px 1px #b1b1b1;
    }
  }

  label {
    top: 14px;
    left: 10px;
    right: 0;
    color: #616161;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    font-size: 16px;
    cursor: text;
    transition: .2s ease-in-out;
    box-sizing: border-box;
    height: 2rem;
    background-color: #fff;
    width: 95%;
    padding: 0 4px 0 4px;

    ${(props) => 
      props.notEmpty && css`
        color: ${(props) => (props.invalid ? 'red' : '#610989')};
        font-size: .8rem;
        top: -8px;
        height: 1.4rem;
        pointer-events: none;
      `}
  }

  label.error {
    color: red;
  }

  input:focus + label {
    color: #610989;
    font-size: .8rem;
    top: -8px;
    height: 1.4rem;
    pointer-events: none;
  }  
`;