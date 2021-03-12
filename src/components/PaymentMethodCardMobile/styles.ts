import styled, { css } from 'styled-components';
import { Bank as IconBank } from '@styled-icons/remix-line/Bank';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;
    width: 90%;

    > h2 {
      font-weight: ${theme.font.bold};
    }

    border-radius: ${theme.border.radius02};
    background-color: ${theme.colors.gray02};
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const BankIcon = styled(IconBank)`
  ${({ theme }) => css`
    width: 4rem;
    margin-right: ${theme.spacings.xsmall};
    color: ${theme.colors.primary};
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 70%;
    height: 1px;
    background-color: ${theme.colors.gray05};
  `}
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

export const PaymentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2.5rem;
`;

export const Price = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    margin-left: 2rem;
  `}
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
