import styled, { css, DefaultTheme } from 'styled-components';
import { PaymentCardProps } from '.';

type WrapperProps = PaymentCardProps;

const WrapperModifiers = {
  promotionBorder: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.green};

    @media (max-width: 414px) {
      border: 2px solid ${theme.colors.green};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, checked }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xsmall};

    height: 7.5rem;
    width: 90%;
    border-radius: ${theme.border.radius02};

    padding: 0 ${theme.spacings.medium};
    cursor: pointer;

    @media (max-width: 414px) {
      padding: 0 ${theme.spacings.small};
    }

    ${!!checked && WrapperModifiers.promotionBorder(theme)};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};

    color: ${theme.colors.gray10};

    @media (max-width: 414px) {
      font-size: ${theme.font.sizes.small};

      margin-right: 1.5rem;
      margin-left: -1.5rem;
    }
  `}
`;

export const ImageBox = styled.div`
  height: 2.9rem;

  @media (max-width: 414px) {
    width: 12rem;
    height: 2.1rem;

    img {
      width: 14rem;
    }
  }
`;
