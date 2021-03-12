import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 30rem;
    width: 90%;

    border-radius: ${theme.border.radius02};
    background-color: ${theme.colors.gray02};
  `}
`;

export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  margin-right: 5rem;
`;
