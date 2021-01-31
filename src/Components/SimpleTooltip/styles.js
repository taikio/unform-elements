import styled, { css, keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const tooltip_text_color = 'white';
const tooltip_background_color = 'black';
const tooltip_margin = '30px';
const tooltip_margin_horizontal = '12px';
const tooltip_arrow_size = '6px';
const fadeInEffect = keyframes`${fadeIn}`;

/* Wrapping */
export const TooltipWrapper = styled.div`
  /* display: inline-block; */
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  position: relative;
`;

/* Absolute positioning */
export const TooltipTip = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${tooltip_text_color};
  background: ${tooltip_background_color};
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
  ${(props) =>
    props.active &&
    css`
      animation: 0.3s ${fadeInEffect};
    `}
  /* CSS border triangles */
  &::before {
    content: ' ';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: ${tooltip_arrow_size};
    margin-left: ${`calc(${tooltip_arrow_size} * -1)`};
  }
  /* Positioning top */
  ${(props) =>
    props.direction &&
    props.direction === 'top' &&
    css`
      top: ${`calc(${tooltip_margin} * -1)`};
      &::before {
        top: 100%;
        border-top-color: ${tooltip_background_color};
      }
    `}
  /* Positioning right */
  ${(props) =>
    props.direction &&
    props.direction === 'right' &&
    css`
      left: ${`calc(100% + ${tooltip_margin_horizontal})`};
      top: 50%;
      transform: translateX(0) translateY(-50%);
      &::before {
        left: ${`calc(${tooltip_arrow_size} * -1)`};
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-right-color: ${tooltip_background_color};
      }
    `}
  /* Positioning bottom */
  ${(props) =>
    props.direction &&
    props.direction === 'bottom' &&
    css`
      bottom: ${`calc(${tooltip_margin} * -1)`};
      &::before {
        bottom: 100%;
        border-bottom-color: ${tooltip_background_color};
      }
    `}
  /* Positioning left */
  ${(props) =>
    props.direction &&
    props.direction === 'left' &&
    css`
      left: auto;
      right: ${`calc(100% + ${tooltip_margin_horizontal})`};
      top: 50%;
      transform: translateX(0) translateY(-50%);
      &::before {
        left: auto;
        right: ${`calc(${tooltip_arrow_size} * -2)`};
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-left-color: ${tooltip_background_color};
      }
    `}
`;
