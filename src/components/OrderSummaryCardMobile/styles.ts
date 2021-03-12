import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 24rem;
    width: 90%;
    justify-content: center;
    margin-bottom: ${theme.spacings.large};

    > h2 {
      margin-left: 1rem;
      font-weight: ${theme.font.bold};
    }

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

  > div {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray05};
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  `}
`;
