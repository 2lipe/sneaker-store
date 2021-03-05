import styled, { css } from 'styled-components';
import { Media } from '../../utils/helpers/media-helper';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;

    margin: ${theme.spacings.small} ${theme.spacings.xxsmall};
    border-bottom: 1px solid ${theme.colors.gray04};
    padding-bottom: 0.3rem;

    @media ${Media.minWidth.xl} {
      margin: ${theme.spacings.small} auto;

      padding-left: ${theme.spacings.small};
    }

    svg {
      color: ${theme.colors.gray09};
      width: 2rem;
      cursor: pointer;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    font-size: ${theme.font.sizes.xxlarge};
    padding: 0.5rem;
    border: 0;
    font-weight: ${theme.font.light};
    margin-left: 0.5rem;
    outline: none;

    &::placeholder {
      color: ${theme.colors.gray06};
    }

    @media ${Media.minWidth.xl} {
      margin: 0 auto;
      width: 50%;
      text-align: center;
      outline: none;
    }

    @media ${Media.maxWidth.md} {
      font-size: ${theme.font.sizes.large};
      text-align: center;
    }
  `}
`;
