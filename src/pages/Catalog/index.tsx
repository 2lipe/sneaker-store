/* eslint-disable function-paren-newline */
import React, { useCallback, useEffect, useState } from 'react';
import { useSneakerAsyncActions } from '../../contexts/Sneaker/sneakerActions';
import { ISneakers } from '../../models/Interfaces/ISneakers';
import { ProductCatalog } from '../../templates/ProductCatalog';

export const Catalog = () => {
  const [sneakers, setSneakers] = useState<ISneakers[]>([]);

  const { getSneakersAction } = useSneakerAsyncActions();

  const getSneakers = useCallback(async () => {
    try {
      const response = await getSneakersAction();

      setSneakers(response);
    } catch (err) {
      console.log(err);
    }
  }, [getSneakersAction]);

  useEffect(() => {
    getSneakers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ProductCatalog sneakers={sneakers} />
    </div>
  );
};
