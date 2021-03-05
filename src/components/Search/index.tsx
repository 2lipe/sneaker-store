/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search';
import { useField } from '@unform/core';
import * as S from './styles';

export type SearchProps = {
  name: string;
  handleSearch: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Search = ({ name, handleSearch, ...rest }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const [value, setValue] = useState<string>('');

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    handleSearch(e.target.value);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Wrapper>
      <label htmlFor="search" />
      <SearchIcon />
      <S.Input
        type="text"
        ref={inputRef}
        defaultValue={defaultValue}
        value={value}
        onChange={handleChangeSearch}
        placeholder="Search for you sneaker"
        {...rest}
      />
    </S.Wrapper>
  );
};
