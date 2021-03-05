import React, { ReactNode } from 'react';
import * as S from './styles';

export type ChipProps = {
  text?: string;
  icon?: ReactNode;
  turnBack?: () => void;
};

export const Chip = ({ text, icon, turnBack, ...rest }: ChipProps) => (
  <S.Wrapper hasIcon={!!icon} onClick={turnBack} {...rest}>
    {!!icon && icon}
    <S.Text>{text}</S.Text>
  </S.Wrapper>
);
