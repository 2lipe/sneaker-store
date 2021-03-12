import styled, { css } from 'styled-components';

import { DashCircleFill } from '@styled-icons/bootstrap/DashCircleFill';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 24rem;
    width: 90%;

    border-radius: ${theme.border.radius02};
    background-color: ${theme.colors.gray02};
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2rem;
`;

type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 12rem;
    height: 12rem;
    border-radius: ${theme.border.radius02};
    margin-left: 1rem;

    background-image: url(${src});
    background-position: center;
    background-size: 12rem 12rem;
    background-repeat: no-repeat;
  `}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;

  > div {
    margin-bottom: 1rem;
  }
`;

export const IconWrapper = styled(DashCircleFill)`
  ${({ theme }) => css`
    width: 1.8rem;
    height: 1.8rem;
    color: ${theme.colors.gray05};
    margin-right: 1rem;
  `}
`;

export const PaymentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    margin-bottom: 0.3rem;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray05};
    margin-bottom: 0.5rem;
  `}
`;

export const Price = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;
