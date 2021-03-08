/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useSneakerContext } from '../../contexts/Sneaker/sneakerContext';

import { Header } from '../../components/Header';
import { Progress } from '../../components/Progress';
import { PaymentMethodCard } from '../../components/PaymentMethodCard';

import * as S from './styles';

const Checkout = ({ location }: RouteComponentProps) => {
  const [, , sneakerId] = location.pathname.split('/');
  const { state } = useSneakerContext();

  const sneakerSelected = state.sneaker.filter(item => item.id === sneakerId);

  console.log(sneakerSelected);

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
                id={sneakerSelected[0].id}
                description={sneakerSelected[0].description}
                color={sneakerSelected[0].color}
                price={sneakerSelected[0].price}
              />
            </S.PaymentMethods>
          </S.PaymentContainer>
        </S.PaymentWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Checkout;
