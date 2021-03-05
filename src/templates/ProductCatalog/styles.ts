import styled, { css } from 'styled-components';
import { Media } from '../../utils/helpers/media-helper';

export const Wrapper = styled.main``;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.huge};

    @media ${Media.maxWidth.md} {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const SneakersContainer = styled.div``;
