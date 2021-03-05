import React, { ReactNode } from 'react';

import * as S from './styles';

export type RibbonProps = {
  children: ReactNode;
};

export const Ribbon = ({ children }: RibbonProps) => <S.Wrapper>{children}</S.Wrapper>;
