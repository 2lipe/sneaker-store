import styled, { css } from 'styled-components';
import { Media } from '../../utils/helpers/media-helper';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    height: 8.7rem;
    width: 100%;

    background-color: ${theme.colors.gray00};

    @media ${Media.maxWidth.md} {
      background-color: inherit;
    }
  `}
`;

export const BackButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    margin-left: ${theme.spacings.xlarge};
    cursor: pointer;

    left: 0rem;

    @media ${Media.maxWidth.md} {
      left: -4rem;
    }
  `}
`;

export const TitleWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.black};

    @media ${Media.maxWidth.md} {
      display: none;
    }
  `}
`;

export const Avatar = styled.div`
  position: absolute;
  width: 3.4rem;
  height: 3.4rem;
  margin-right: 10.8rem;
  right: 0rem;

  border-radius: 50%;

  > img {
    width: 3.4rem;
  }

  @media ${Media.maxWidth.md} {
    right: -8rem;
  }
`;
