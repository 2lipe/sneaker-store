/* eslint-disable max-len */
import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useSneakerContext } from '../../contexts/Sneaker/sneakerContext';
import { storeSneaker } from '../../utils/helpers/local-storage-helper';

import { Header } from '../../components/Header';
import { Progress } from '../../components/Progress';
import { PaymentMethodCard } from '../../components/PaymentMethodCard';
import MediaMatch from '../../components/MediaMatch';
import { PaymentCardMobile } from '../../components/PaymentCardMobile';
import { PaymentCardMethodMobile } from '../../components/PaymentCardMethodMobile';

import { usePayWithMyBankService } from '../../services/payment.service';

import * as S from './styles';

const Checkout = ({ location }: RouteComponentProps) => {
  const [, , sneakerId] = location.pathname.split('/');
  const { state } = useSneakerContext();

  const { addPanelListener, paymentMethodConection } = usePayWithMyBankService();

  const sneakerSelected = state.sneaker.filter(item => item.id === sneakerId);

  const handleClickConfirmPaymentMethod = useCallback(
    (paymentMethod: string, productPrice: string) => {
      paymentMethodConection(paymentMethod, productPrice);
      addPanelListener();
      storeSneaker(sneakerSelected[0]);
    },
    [addPanelListener, paymentMethodConection, sneakerSelected],
  );

  return (
    <S.Wrapper>
      <Header back title="Checkout" />

      <S.Content>
        <S.ProgressWrapper>
          <Progress />
        </S.ProgressWrapper>

        <S.PaymentWrapper>
          <S.ImageContainer>
            <S.ProductImage>
              <img src={sneakerSelected[0].thumbnailURL} alt={sneakerSelected[0].description} />
            </S.ProductImage>
          </S.ImageContainer>

          <S.PaymentContainer>
            <S.PaymentMethods>
              <PaymentMethodCard
                onClickConfirmPayment={payment => handleClickConfirmPaymentMethod(payment, sneakerSelected[0].price)}
                id={sneakerSelected[0].id}
                description={sneakerSelected[0].description}
                color={sneakerSelected[0].color}
                price={sneakerSelected[0].price}
              />
            </S.PaymentMethods>
          </S.PaymentContainer>
        </S.PaymentWrapper>

        <MediaMatch lessThan="medium">
          <S.PaymentContainerMobile>
            <PaymentCardMobile
              id={sneakerSelected[0].id}
              price={sneakerSelected[0].price}
              color={sneakerSelected[0].color}
              image={sneakerSelected[0].thumbnailURL}
              sneaker={sneakerSelected[0].description}
            />

            <PaymentCardMethodMobile
              onClickConfirmPayment={payment => handleClickConfirmPaymentMethod(payment, sneakerSelected[0].price)}
            />
          </S.PaymentContainerMobile>
        </MediaMatch>
      </S.Content>
    </S.Wrapper>
  );
};

export default Checkout;
