/* eslint-disable function-paren-newline */
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { Header } from '../../components/Header';

import { useSneakerAsyncActions } from '../../contexts/Sneaker/sneakerActions';
import { ISneakers } from '../../models/Interfaces/ISneakers';
import { ProductCatalog } from '../../templates/ProductCatalog';

import avatarImage from '../../assets/img/avatar.png';

const Catalog = () => {
  const [sneakers, setSneakers] = useState<ISneakers[]>([]);
  const history = useHistory();

  const { getSneakersAction } = useSneakerAsyncActions();

  const getSneakers = useCallback(async () => {
    try {
      const response = await getSneakersAction();

      setSneakers(response);
    } catch (err) {
      console.log(err);
    }
  }, [getSneakersAction]);

  const handleClickAddProduct = (id: string) => {
    history.push(`/store-checkout/${id}`);
  };

  useEffect(() => {
    getSneakers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Sneakers" avatar={avatarImage} />

      <ProductCatalog addProductOnClick={e => handleClickAddProduct(e)} sneakers={sneakers} />
    </div>
  );
};

export default Catalog;
