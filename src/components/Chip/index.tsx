import React, { ReactNode } from 'react';
import * as S from './styles';

export type ChipProps = {
  text: string;
  icon?: ReactNode;
};

export const Chip = ({ text, icon, ...rest }: ChipProps) => (
  <S.Wrapper hasIcon={!!icon} {...rest}>
    {!!icon && icon}
    <S.Text>{text}</S.Text>
  </S.Wrapper>
);
