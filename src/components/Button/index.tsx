import React, { ButtonHTMLAttributes, ElementType } from 'react';

import * as S from './styles';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'medium' | 'large';
  as?: ElementType;
} & ButtonType;

export const Button = ({ children, size = 'medium', ...rest }: ButtonProps) => (
  <S.Wrapper size={size} {...rest}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);
