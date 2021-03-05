import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    align-items: center;

    top: 0.2rem;
    height: 1.8rem;
    left: 10rem;

    border-radius: ${theme.border.radius01};
    padding: 0 ${theme.spacings.xsmall};

    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};

    color: ${theme.colors.yellowDark};
    background-color: ${theme.colors.yellow};

    @media (max-width: 415px) {
      top: 6rem;
      left: 6rem;
    }

    @media (max-width: 321px) {
      top: 6rem;
      left: 3.5rem;
    }
  `}
`;
