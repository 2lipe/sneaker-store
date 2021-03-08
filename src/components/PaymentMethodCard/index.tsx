import React from 'react';

import onlinePayImage from '../../assets/img/online-banking.png';
import cardPayImage from '../../assets/img/card-payment.png';
import applePayImage from '../../assets/img/apple-payment.png';

import { PaymentCard } from '../PaymentCard';
import { Button } from '../Button';

import * as S from './styles';

export type PaymentMethodCardProps = {
  description: string;
  color: string;
  id: string;
  price: string;
};

export const PaymentMethodCard = ({ id, description, color, price }: PaymentMethodCardProps) => (
  <S.PaymentMethodsContent>
    <S.PaymentDescription>
      <div>
        <S.Title>Cart Total</S.Title>
        <S.Subtitle>{description}</S.Subtitle>
        <S.Description>x 1 {color} Size 41 </S.Description>
        <S.Description>Item #{id}</S.Description>
      </div>

      <div>
        <S.Title>Delivery details</S.Title>

        <S.Description>John Smith</S.Description>
        <S.Description>Phone no: 01312428200</S.Description>
        <S.Description>Address: Redwood City, 2000.</S.Description>

        <S.PriceContainer>
          <div>
            <S.Subtitle>Total cost</S.Subtitle>
            <S.Description>Delivery included</S.Description>
          </div>

          <S.Price>${price}</S.Price>
        </S.PriceContainer>
      </div>
    </S.PaymentDescription>

    <S.PayMethods>
      <S.Title>Select your payment method</S.Title>

      <S.PaymentCardContainer>
        <PaymentCard title="Online Banking" img={onlinePayImage} promotionBorder />
        <PaymentCard title="Card payment" img={cardPayImage} />
        <PaymentCard title="Apple Pay" img={applePayImage} />
      </S.PaymentCardContainer>

      <S.ButtonContainer>
        <Button size="large">Continue</Button>
      </S.ButtonContainer>
    </S.PayMethods>
  </S.PaymentMethodsContent>
);
