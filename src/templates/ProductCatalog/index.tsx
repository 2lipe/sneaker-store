/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
import React, { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';

import { ISneakers } from '../../models/Interfaces/ISneakers';
import { Search } from '../../components/Search';
import { Header } from '../../components/Header';
import { ShoesCard } from '../../components/ShoesCard';
import { qtdOpt, sizeOpt } from './options';

import avatarImage from '../../assets/img/avatar.png';

import * as S from './styles';

type ProductCatalogProps = {
  sneakers: ISneakers[];
};

export const ProductCatalog = ({ sneakers }: ProductCatalogProps) => {
  const formRef = useRef<FormHandles>(null);
  const [search, setSearch] = useState<string>('');

  const handleStoreSearch = (value: string) => {
    setSearch(value);
  };

  const renderSelectSneaker = () => {
    const searchedProducts = sneakers.filter(
      sneaker => sneaker.description.toLowerCase().includes(search.toLowerCase()),
      // eslint-disable-next-line function-paren-newline
    );

    return searchedProducts.map(sneaker => (
      <ShoesCard
        key={sneaker.id}
        img={sneaker.thumbnailURL}
        title={sneaker.description}
        price={`$ ${sneaker.price}`}
        qtdOptions={qtdOpt}
        sizeOptions={sizeOpt}
        selectQtdLabel="Quantity"
        selectSizeLabel="Size"
        selectQtdName="quantity"
        selectSizeName="size"
      />
    ));
  };

  return (
    <S.Wrapper>
      <Header title="Sneakers" avatar={avatarImage} />

      <S.FormContainer ref={formRef} onSubmit={e => handleStoreSearch(e)}>
        <Search name="search" handleSearch={handleStoreSearch} />
      </S.FormContainer>

      <S.SneakersContainer>
        <S.SneakersWrapper>
          {search === ''
            ? sneakers.map(sneaker => (
                // eslint-disable-next-line react/jsx-indent
                <ShoesCard
                  key={sneaker.id}
                  img={sneaker.thumbnailURL}
                  title={sneaker.description}
                  price={`$ ${sneaker.price}`}
                  qtdOptions={qtdOpt}
                  sizeOptions={sizeOpt}
                  selectQtdLabel="Quantity"
                  selectSizeLabel="Size"
                  selectQtdName="quantity"
                  selectSizeName="size"
                />
              ))
            : renderSelectSneaker()}
        </S.SneakersWrapper>
      </S.SneakersContainer>
    </S.Wrapper>
  );
};
