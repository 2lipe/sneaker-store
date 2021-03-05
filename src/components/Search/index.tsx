/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search';
import * as S from './styles';

export type SearchProps = {
  searchSneaker?: () => void;
};

export const Search = ({ searchSneaker }: SearchProps) => (
  <S.Wrapper>
    <label htmlFor="search" />
    <SearchIcon />
    <S.Input type="text" name="search" placeholder="Search for you sneaker" onChange={searchSneaker} />
  </S.Wrapper>
);
