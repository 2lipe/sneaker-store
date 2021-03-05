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

  as?: ElementType;
} & PaymentTypes;

export const PaymentCard = ({ title, img, ribbon, promotionBorder = false, onClick, ...rest }: PaymentCardProps) => (
  <S.Wrapper promotionBorder={promotionBorder} onClick={onClick} {...rest}>
    {!!ribbon && <Ribbon>{ribbon}</Ribbon>}

    <S.Title>{title}</S.Title>

    <S.ImageBox>
      <img src={img} alt="Payment methods" />
    </S.ImageBox>
  </S.Wrapper>
);
