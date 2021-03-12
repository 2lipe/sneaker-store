import React from 'react';

import * as S from './styles';

export type PaymentCardMobileProps = {
  id: string;
  image: string;
  sneaker: string;
  color: string;
  price: string;
};

export const PaymentCardMobile = ({ id, image, sneaker, color, price }: PaymentCardMobileProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Image src={image} />

      <S.Details>
        <div>
          <S.Title>{sneaker}</S.Title>
          <S.Text>x 1, {color}, Size 41</S.Text>
          <S.Text>Item #{id}</S.Text>
        </div>

        <div>
          <S.Subtitle>Delivery details</S.Subtitle>
          <S.Text>John Smith</S.Text>
          <S.Text>Phone no: 01312428200</S.Text>
          <S.Text>Address: Redwood City, 2000.</S.Text>
        </div>
      </S.Details>

      <S.IconWrapper>Icone</S.IconWrapper>
    </S.Content>

    <S.PaymentDetails>
      <div>
        <S.Subtitle>Total cost</S.Subtitle>
        <S.Text>Delivery included</S.Text>
      </div>

      <div>
        <S.Price>{price}</S.Price>
      </div>
    </S.PaymentDetails>
  </S.Wrapper>
);
