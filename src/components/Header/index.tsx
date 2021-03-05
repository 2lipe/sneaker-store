/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback } from 'react';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import { useHistory } from 'react-router-dom';
import { Chip } from '../Chip';

import * as S from './styles';

export type HeaderProps = {
  title: string;
  avatar: string;
  back?: boolean;
};

export const Header = ({ title, avatar, back }: HeaderProps) => {
  const history = useHistory();

  const handleClickTurnBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <S.Wrapper>
      <S.BackButton>{back && <Chip text="Back" turnBack={handleClickTurnBack} icon={<ArrowBack />} />}</S.BackButton>

      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>

      <S.Avatar>
        <img src={avatar} alt="Avatar image" />
      </S.Avatar>
    </S.Wrapper>
  );
};
