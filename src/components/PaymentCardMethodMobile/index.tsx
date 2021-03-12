/* eslint-disable max-len */
import { useSnackbar } from 'notistack';
import React, { useCallback, useState } from 'react';
import { Button } from '../Button';
import { PaymentCard } from '../PaymentCard';

import onlinePayImage from '../../assets/img/online-banking.png';
import cardPayImage from '../../assets/img/card-payment.png';
import applePayImage from '../../assets/img/apple-payment.png';

import * as S from './styles';

export type PaymentCardMethodMobileProps = {
  onClickConfirmPayment: (method: string) => void;
};

export const PaymentCardMethodMobile = ({ onClickConfirmPayment }: PaymentCardMethodMobileProps) => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickSelectPaymentMethod = useCallback(
    (payment: string) => {
      if (payment === 'online-payment') {
        setPaymentMethod(payment);
        setChecked(!checked);
      } else {
        setChecked(false);
        setPaymentMethod('');
        enqueueSnackbar('Payment method not implemented', { variant: 'warning' });
      }
    },
    [checked, enqueueSnackbar],
  );

  return (
    <S.Wrapper>
      <S.PaymentCardContainer>
        <PaymentCard
          onClick={() => handleClickSelectPaymentMethod('online-payment')}
          title="Online Banking"
          img={onlinePayImage}
          checked={checked}
        />

        <PaymentCard
          onClick={() => handleClickSelectPaymentMethod('card-payment')}
          title="Card payment"
          img={cardPayImage}
        />

        <PaymentCard
          onClick={() => handleClickSelectPaymentMethod('apple-payment')}
          title="Apple Pay"
          img={applePayImage}
        />
      </S.PaymentCardContainer>

      <S.ButtonContainer>
        <Button onClick={() => onClickConfirmPayment(paymentMethod)} size="large">
          Continue
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};
