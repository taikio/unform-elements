import React, { useState } from 'react';
// import './styles.css';
import { TooltipWrapper, TooltipTip } from './styles';

/**
 * Exemplo de uso:
 *  <Tooltip content="Hello, I'm a tooltip" direction="right">
 *     <button>I'm a button</button>
 *  </Tooltip>
 * @param {Node} content conteúdo que será exibido (texto, imagem, elemento jsx)
 * @param {String} direction direção que será exibido (top, left, right, bottom)
 * @param {Number} delay tempo de atraso para exibir
 */
export default function Tooltip({ content, direction, delay, children }) {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <TooltipTip direction={direction} active={active}>
          {/* Content */}
          {content}
        </TooltipTip>
      )}
    </TooltipWrapper>
  );
}
