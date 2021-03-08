import styled, { css, DefaultTheme } from 'styled-components';
import { shade } from 'polished';

import { ButtonProps } from '.';

type WrapperProps = Omit<ButtonProps, 'children'>;

const WrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    width: 27rem;

    border-radius: ${theme.border.radius01};
  `,

  large: (theme: DefaultTheme) => css`
    height: 4rem;
    width: 30rem;

    border-radius: ${theme.border.radius01};
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border: none;
    text-decoration: none;

    background-color: ${theme.colors.primary};
    transition: ${theme.transition.default};

    &:hover {
      background-color: ${shade(0.2, theme.colors.primary)};
    }

    span {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
    }

    ${!!size && WrapperModifiers[size](theme)};
  `}
`;
