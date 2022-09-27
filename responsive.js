import { css } from "styled-components";

export const sm = (props) => {
  return css`
    @media only screen and (min-width: 320px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 425px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1024px) {
      ${props}
    }
  `;
};

export const desktopLarge = (props) => {
  return css`
    @media only screen and (min-width: 1440px) {
      ${props}
    }
  `;
};
export const xl = (props) => {
  return css`
    @media only screen and (min-width: 2560px) {
      ${props}
    }
  `;
};
