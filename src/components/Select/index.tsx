/* eslint-disable operator-linebreak */
import React, { SelectHTMLAttributes } from 'react';

import * as S from './styles';

type SelectType = SelectHTMLAttributes<HTMLSelectElement>;

export type SelectProps = {
  name: string;
  label: string;
  options?: Array<{ value: string; label: string }>;
} & SelectType;

export const Select = ({ name, label, options, ...rest }: SelectProps) => (
  <S.Container>
    <label htmlFor={name}>{label}</label>
    <S.Wrapper defaultValue="" id={name} {...rest}>
      {!!options &&
        options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </S.Wrapper>
  </S.Container>
);
