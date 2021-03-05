import styled, { css, DefaultTheme } from 'styled-components';
import { rgba, shade } from 'polished';

type WrapperProps = {
  hasIcon: boolean;
};

const WrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.7rem;

      & + p {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;

    width: 11.5rem;
    height: 3.4rem;
    border-radius: ${theme.border.radius03};

    background-color: rgba(0, 0, 0, 0.05);
    transition: ${theme.transition.default};

    &:hover {
      background-color: ${shade(0.2, rgba(0, 0, 0, 0.05))};
    }

    ${!!hasIcon && WrapperModifiers.withIcon(theme)};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xlarge};

    color: ${theme.colors.black};
  `}
`;
