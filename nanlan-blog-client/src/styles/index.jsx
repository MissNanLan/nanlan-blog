/* eslint-disable */

import { css } from "styled-components";

const sizes = {
  maxWidth600: 600,
  maxWidth768: 768,
  minWidth768: 768,
  minWidth900: 900,
  maxWidth900: 900,
  maxWidth1024: 1024,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => {
    if (/^max/.test(label)) {
      return css`
        @media (max-width: ${sizes[label]}px) {
          ${css(...args)}
        }
      `;
    } else {
      return css`
        @media (min-width: ${sizes[label]}px) {
          ${css(...args)}
        }
      `;
    }
  };

  return acc;
}, {});
