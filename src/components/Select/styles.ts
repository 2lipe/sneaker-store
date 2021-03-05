import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    label {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.gray07};

      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Wrapper = styled.select`
  ${({ theme }) => css`
    width: 6.9rem;
    height: 2.7rem;
    padding-left: ${theme.spacings.xxsmall};

    outline: none;
    text-decoration: none;

    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray08};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray03};
    border-radius: ${theme.border.radius04};
  `}
`;
