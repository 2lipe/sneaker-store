import styled, { css } from 'styled-components';
import { placeholderShimmer } from '../../utils/animations/keyframes';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    border-radius: ${theme.border.radius01} ${theme.border.radius01} 0 0;

    background-color: ${theme.colors.white};
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  `}
`;

export const ImageBox = styled.div`
  height: 17rem;
  width: 100%;

  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);

  background-size: 80rem 17rem;

  animation: ${placeholderShimmer} 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.spacings.medium};

    select {
      margin-right: 0.6rem;
    }
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.xsmall};

    margin-top: ${theme.spacings.xsmall};

    color: ${theme.colors.black};
  `}
`;

export const BuyBox = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Price = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    text-align: center;

    margin-bottom: ${theme.spacings.xsmall};

    color: ${theme.colors.black};
  `}
`;
