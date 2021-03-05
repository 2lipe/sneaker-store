import styled, { css } from 'styled-components';
import { Form } from '@unform/web';
import { Media } from '../../utils/helpers/media-helper';

export const Wrapper = styled.main``;

export const FormContainer = styled(Form)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.huge};
    margin-bottom: ${theme.spacings.large};

    @media ${Media.maxWidth.md} {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const SneakersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SneakersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  grid-gap: 10% 8%;
  justify-content: center;
  align-items: center;

  @media ${Media.maxWidth.xl} {
    grid-template-columns: repeat(2, 20vw);
    grid-gap: 10% 40%;
    margin-right: 8%;
  }

  @media ${Media.maxWidth.lg} {
    grid-template-columns: repeat(2, 20vw);
    grid-gap: 10% 60%;
    margin-right: 10%;
  }

  @media ${Media.maxWidth.md} {
    grid-template-columns: repeat(1, 20vw);
    grid-gap: 3% 60%;
    margin-right: 30%;
  }

  @media ${Media.maxWidth.sm} {
    grid-template-columns: repeat(1, 20vw);
    grid-gap: 3% 60%;
    margin-right: 50%;
  }

  @media ${Media.maxWidth.xs} {
    grid-template-columns: repeat(1, 20vw);
    grid-gap: 3% 60%;
    margin-right: 70%;
  }
`;
