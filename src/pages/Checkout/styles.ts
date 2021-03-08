import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 8.7rem);
`;

export const ProgressWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 10%;
    margin-top: ${theme.spacings.xxlarge};
    padding-left: 7rem;
  `}
`;

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 73rem;
  width: 100vw;
`;

export const PaymentContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 73rem;
  width: 100vw;
`;

export const ProductImage = styled.div`
  ${({ theme }) => css`
    height: 63rem;
    border-radius: ${theme.border.radius02};
    width: 70%;

    background-size: 70% 63rem;

    img {
      border-radius: ${theme.border.radius02};
      width: 100%;
      height: 100%;
    }
  `}
`;

export const PaymentMethods = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    height: 63rem;
    border-radius: ${theme.border.radius02};
    width: 95%;
    margin: 0 auto;
    background-color: ${theme.colors.gray02};
  `}
`;
