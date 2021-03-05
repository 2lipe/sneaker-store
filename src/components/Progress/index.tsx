import React from 'react';
import * as S from './styles';

export type ProgressProps = {
  checkoutPage?: boolean;
};

export const Progress = ({ checkoutPage = false }: ProgressProps) => (
  <S.Wrapper data-testid="progress">
    <S.BulletActive>
      <div />
      <S.Text>Cart</S.Text>
    </S.BulletActive>
    <S.BulletActive>
      <div />
      <S.Text>Payment options</S.Text>
    </S.BulletActive>

    {!checkoutPage && (
      <S.BulletInactive>
        <div />
        <S.Text>Receipt</S.Text>
      </S.BulletInactive>
    )}

    {checkoutPage && (
      <S.BulletActive>
        <div />
        <S.Text>Receipt</S.Text>
      </S.BulletActive>
    )}
  </S.Wrapper>
);
