/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import { useSnackbar } from 'notistack';
import { ISneakers } from '../../models/Interfaces/ISneakers';

import { Header } from '../../components/Header';
import { Progress } from '../../components/Progress';
import { ConfirmationCard } from '../../components/ConfirmationCard';
import { getStoreSneaker } from '../../utils/helpers/local-storage-helper';

import * as S from './styles';
import { STORE_PATH } from '../../routes/store.routes';

const Confirmation = () => {
  const [sneaker, setSneaker] = useState<ISneakers>({} as ISneakers);

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleClickPlaceOrder = useCallback(() => {
    enqueueSnackbar('Thanks for purchasing in Trustly store!', { variant: 'success' });

    setTimeout(() => {
      history.push(STORE_PATH.Catalog);
    }, 5000);
  }, [enqueueSnackbar, history]);

  useEffect(() => {
    const data = getStoreSneaker();

    setSneaker(data!);
  }, []);

  return (
    <S.Wrapper>
      <Header back title="Review and Confirmation" />

      <S.Content>
        <S.ProgressWrapper>
          <Progress checkoutPage />
        </S.ProgressWrapper>

        <S.PaymentWrapper>
          <S.ImageContainer>
            <S.ProductImage>
              <img src={sneaker.thumbnailURL} alt={sneaker.description} />
            </S.ProductImage>
          </S.ImageContainer>

          <S.PaymentContainer>
            <S.PaymentMethods>
              <ConfirmationCard
                onClick={handleClickPlaceOrder}
                id={sneaker.id}
                description={sneaker.description}
                color={sneaker.color}
                price={sneaker.price}
              />
            </S.PaymentMethods>
          </S.PaymentContainer>
        </S.PaymentWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Confirmation;
