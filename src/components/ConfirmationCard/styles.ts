import styled, { css } from 'styled-components';

export const PaymentMethodsContent = styled.div`
  ${({ theme }) => css`
    flex: 1;
    margin-top: ${theme.spacings.large};
  `}
`;

export const PaymentDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.small} ${theme.spacings.medium};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray05};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const PaymentMethod = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.huge};
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 4rem;
      margin-right: ${theme.spacings.xsmall};
      color: ${theme.colors.primary};
    }
  `}
`;

export const PlaceOrderContainer = styled.div`
  margin-top: 8.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PriceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-right: ${theme.spacings.xxlarge};
  `}
`;

export const Price = styled.h1`
  ${({ theme }) => css`
    font-size: 4.3rem;
    color: ${theme.colors.black};
    font-weight: ${theme.font.light};
    margin-left: ${theme.spacings.medium};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-left: ${theme.spacings.xxlarge};
  `}
`;
