import styled, { css } from 'styled-components';
import { Media } from '../../utils/helpers/media-helper';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 8.7rem;
    width: 100%;

    background-color: ${theme.colors.gray00};

    @media ${Media.maxWidth.md} {
      background-color: inherit;
    }
  `}
`;

export const BackButton = styled.div``;

export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  ${({ theme }) => css`
    position: relative;
    left: 48vw;
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
  width: 3.4rem;
  height: 3.4rem;
  margin-right: 10.8rem;

  border-radius: 50%;

  > img {
    width: 3.4rem;
  }

  @media ${Media.maxWidth.md} {
    margin-right: 1.4rem;
  }
`;
