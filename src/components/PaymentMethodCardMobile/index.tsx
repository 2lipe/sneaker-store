import React from 'react';
import { Button } from '../Button';

import * as S from './styles';

export type PaymentMethodCardMobileprops = {
  price: string;
  onClick: () => void;
};

export const PaymentMethodCardMobile = ({ price, onClick }: PaymentMethodCardMobileprops) => (
  <>
    <S.Wrapper>
      <S.Title>Payment Method</S.Title>

      <S.Content>
        <S.BankIcon />

        <S.Title>Online Banking</S.Title>
      </S.Content>

      <S.Divider />

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

    <S.ButtonContainer>
      <Button onClick={onClick} size="large">
        Place order
      </Button>
    </S.ButtonContainer>
  </>
);
