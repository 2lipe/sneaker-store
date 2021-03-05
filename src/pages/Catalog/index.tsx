/* eslint-disable function-paren-newline */
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useSneakerAsyncActions } from '../../contexts/Sneaker/sneakerActions';
import { ISneakers } from '../../models/Interfaces/ISneakers';
import { ProductCatalog } from '../../templates/ProductCatalog';

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
      <ProductCatalog addProductOnClick={e => handleClickAddProduct(e)} sneakers={sneakers} />
    </div>
  );
};

export default Catalog;
