import React from 'react';

import { Select } from '../Select';
import { Button } from '../Button';
import * as S from './styles';

export type ShoesCardProps = {
  title: string;
  price: string;
  img: string;

  selectSizeName: string;
  selectSizeLabel: string;
  sizeOptions: Array<{ value: string; label: string }>;

  selectQtdName: string;
  selectQtdLabel: string;
  qtdOptions: Array<{ value: string; label: string }>;

  onClick?: () => void;
};

export const ShoesCard = ({
  title,
  price,
  img,
  selectSizeName,
  selectSizeLabel,
  sizeOptions,
  selectQtdName,
  selectQtdLabel,
  qtdOptions,
  onClick,
  ...rest
}: ShoesCardProps) => (
  <S.Wrapper {...rest}>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Title>{title}</S.Title>

      <S.Info>
        <Select name={selectSizeName} label={selectSizeLabel} options={sizeOptions} />
        <Select name={selectQtdName} label={selectQtdLabel} options={qtdOptions} />
      </S.Info>

      <S.BuyBox>
        <S.Price>{price}</S.Price>
        <Button size="medium" onClick={onClick}>
          Add to cart
        </Button>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);
