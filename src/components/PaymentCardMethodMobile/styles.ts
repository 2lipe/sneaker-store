import styled, { css } from 'styled-components';

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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5rem;
`;
