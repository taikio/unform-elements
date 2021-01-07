import styled, { css } from 'styled-components';
import { headShakeEffect } from '../../styles/animations';

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
    height: 40px;
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

    ${(props) =>
      props.invalid 
        ? css`
          animation: 0.6s ${headShakeEffect};
        `
        :
        css`animation: none;`
      }
  }

  label {
    top: 12px;
    left: 10px;
    right: 0;
    color: #616161;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    font-size: 15px;
    cursor: text;
    transition: .2s ease-in-out;
    box-sizing: border-box;
    height: 18px;
    background-color: #fff;
    width: 94%;
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

  span.error {
    color: red;
    font-size: 13px;
  }

  input:focus + label {
    color: #610989;
    font-size: .8rem;
    top: -8px;
    height: 1.4rem;
    pointer-events: none;
  }  
`;