import styled, { css } from 'styled-components';
import { Media } from '../../utils/helpers/media-helper';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: ${theme.spacings.large} auto;
    width: 60%;
    height: 0.2rem;

    background-color: ${theme.colors.gray02};
    position: relative;

    @media ${Media.maxWidth.ms} {
      display: none;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
    }

    li:first-child {
      top: -0.3rem;
      left: -0.7rem;
    }

    li:nth-child(2) {
      top: -0.3rem;
      left: 42%;

      @media ${Media.maxWidth.ms} {
        left: 32%;
      }
    }

    li:last-child {
      top: -0.3rem;
      right: -2rem;
    }

    div {
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const BulletActive = styled.li`
  ${({ theme }) => css`
    div {
      background-color: ${theme.colors.green};
    }
  `}
`;

export const BulletInactive = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.gray05};

    div {
      background-color: ${theme.colors.gray05};
    }
  `}
`;
