import styled, { css } from 'styled-components';

export const PaymentMethodsContent = styled.div`
  flex: 1;
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

export const PriceContainer = styled.div`
  display: flex;
`;

export const Price = styled.h1`
  ${({ theme }) => css`
    font-size: 4.3rem;
    color: ${theme.colors.black};
    font-weight: ${theme.font.light};
    margin-left: ${theme.spacings.medium};
  `}
`;

export const PayMethods = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h2 {
      margin-left: 5rem;
    }
  `}
`;

export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5rem;
`;
