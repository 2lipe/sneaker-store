/* eslint-disable max-len */
import React, { ButtonHTMLAttributes, ElementType, HTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

import { Ribbon } from '../Ribbon';

type PaymentTypes = HTMLAttributes<HTMLDivElement> | ButtonHTMLAttributes<HTMLButtonElement>;

export type PaymentCardProps = {
  title: string;
  img: string;
  promotionBorder?: boolean;
  ribbon?: ReactNode;
  checked?: boolean;

  as?: ElementType;
} & PaymentTypes;

export const PaymentCard = ({ title, img, ribbon, checked = false, onClick, ...rest }: PaymentCardProps) => (
  <S.Wrapper checked={checked} onClick={onClick} {...rest}>
    {!!ribbon && <Ribbon>{ribbon}</Ribbon>}

    <S.Title>{title}</S.Title>

    <S.ImageBox>
      <img src={img} alt="Payment methods" />
    </S.ImageBox>
  </S.Wrapper>
);
