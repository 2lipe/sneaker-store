/* eslint-disable operator-linebreak */
import React from 'react';

import { ISneakers } from '../../models/Interfaces/ISneakers';
import { Search } from '../../components/Search';
import { Header } from '../../components/Header';
import { ShoesCard } from '../../components/ShoesCard';
import { qtdOpt, sizeOpt } from './options';

import avatarImage from '../../assets/img/avatar.png';

import * as S from './styles';

type ProductCatalogProps = {
  products: ISneakers[];
};

export const ProductCatalog = ({ products }: ProductCatalogProps) => (
  <S.Wrapper>
    <Header title="Sneakers" avatar={avatarImage} />

    <S.SearchContainer>
      <Search />
    </S.SearchContainer>

    <S.SneakersContainer>
      {products.map(item => (
        <ShoesCard
          key={item.id}
          img={item.thumbnailURL}
          title={item.description}
          price={item.price}
          qtdOptions={qtdOpt}
          sizeOptions={sizeOpt}
          selectQtdLabel="Quantity"
          selectSizeLabel="Size"
          selectQtdName="quantity"
          selectSizeName="size"
        />
      ))}
    </S.SneakersContainer>
  </S.Wrapper>
);
