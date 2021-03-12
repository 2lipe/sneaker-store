import React from 'react';

import * as S from './styles';

export type OrderSummaryMobileProps = {
  id: string;
  image: string;
  sneaker: string;
  color: string;
};

export const OrderSummaryMobile = ({ id, image, sneaker, color }: OrderSummaryMobileProps) => (
  <S.Wrapper>
    <S.Title>Order Summary</S.Title>

    <S.Content>
      <S.Image src={image} />

      <S.Details>
        <div>
          <S.Title>{sneaker}</S.Title>
          <S.Text>x 1, {color}, Size 41</S.Text>
          <S.Text>Item #{id}</S.Text>
        </div>
      </S.Details>
    </S.Content>
  </S.Wrapper>
);
