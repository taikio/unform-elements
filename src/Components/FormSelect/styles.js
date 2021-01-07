import styled, { css } from 'styled-components';
import Select from 'react-select';
import { headShakeEffect } from '../../styles/animations';
import { device } from '../../styles/mediaQuery';

export const CustomSelect = styled(Select)`
  ${(props) =>
    props.invalid &&
    css`
      animation: 0.6s ${headShakeEffect};
    `}

  & .Select__control {
    background-color: #fefcff;
  }
  & .Select__single-value {
    font-weight: bold;
    color: #495057;
  }

  @media ${device.mobileS} {
    & .Select__control {
      height: 26px;
      min-height: 26px;
    }
    & .css-tlfecz-indicatorContainer {
      margin-top: -6px;
    }
    & .Select__single-value {
      font-size: 12px;
      top: 42%;
    }
    & .Select__indicator-separator {
      margin-top: 3px;
    }
  }

  @media ${device.tablet} {
    & .Select__control {
      height: 28px;
      min-height: 28px;
    }
    & .css-tlfecz-indicatorContainer {
      margin-top: -4px;
    }
    & .Select__single-value {
      font-size: 14px;
      top: 48%;
    }
    & .Select__indicator-separator {
      margin-top: 3px;
    }
  }

  @media ${device.laptop} {
    & .Select__control {
      height: 28px;
      min-height: 28px;
    }
    & .css-tlfecz-indicatorContainer {
      margin-top: -4px;
    }
    & .Select__single-value {
      font-size: 14px;
      top: 48%;
    }
    & .Select__indicator-separator {
      margin-top: 3px;
    }
  }

  @media ${device.laptopL} {
    & .Select__control {
      height: 32px;
      min-height: 32px;
    }
    & .css-tlfecz-indicatorContainer {
      margin-top: -3px;
    }
    & .Select__single-value {
      font-size: 15px;
      top: 50%;
    }
    & .Select__indicator-separator {
      margin-top: 8px;
    }
  }
`;