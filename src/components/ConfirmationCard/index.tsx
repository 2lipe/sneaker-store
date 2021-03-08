/* eslint-disable max-len */
import React from 'react';
import { Bank as IconBank } from '@styled-icons/remix-line/Bank';

import { Button } from '../Button';

import * as S from './styles';

export type ConfirmationCardProps = {
  description: string;
  color: string;
  id: string;
  price: string;
  onClick: () => void;
};

export const ConfirmationCard = ({ id, description, color, price, onClick }: ConfirmationCardProps) => (
  <S.PaymentMethodsContent>
    <S.PaymentDescription>
      <div>
        <S.Title>Order summary</S.Title>
        <S.Subtitle>{description}</S.Subtitle>
        <S.Description>x 1 {color} Size 41 </S.Description>
        <S.Description>Item #{id}</S.Description>
      </div>

      <S.PaymentMethod>
        <S.Title>Payment Method</S.Title>

        <S.IconContainer>
          <IconBank />
          <S.Subtitle>Online Banking</S.Subtitle>
        </S.IconContainer>
      </S.PaymentMethod>
    </S.PaymentDescription>

    <S.PlaceOrderContainer>
      <S.PriceContainer>
        <div>
          <S.Subtitle>Total cost</S.Subtitle>
          <S.Description>Delivery included</S.Description>
        </div>

        <S.Price>${price}</S.Price>
      </S.PriceContainer>

      <S.ButtonContainer>
        <Button onClick={onClick} size="large">
          Place order
        </Button>
      </S.ButtonContainer>
    </S.PlaceOrderContainer>
  </S.PaymentMethodsContent>
);
