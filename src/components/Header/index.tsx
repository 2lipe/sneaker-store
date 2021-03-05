/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { ReactNode } from 'react';

import * as S from './styles';

export type HeaderProps = {
  title: string;
  avatar: string;
  back?: ReactNode;
};

export const Header = ({ title, avatar, back }: HeaderProps) => (
  <S.Wrapper>
    {back && <S.BackButton>{back}</S.BackButton>}

    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
    </S.TitleWrapper>

    <S.Avatar>
      <img src={avatar} alt="Avatar image" />
    </S.Avatar>
  </S.Wrapper>
);
