import { GenericContext } from '../genericContext';
import { ISneakers } from '../../models/Interfaces/ISneakers';
import { useSneakerContext } from './sneakerContext';
import { SneakerActions } from './sneakerTypes';
import { useProductService } from '../../services/products.service';
import { saveSneakersLocalStorage } from '../../utils/helpers/local-storage-helper';

export type SneakerAction =
  | GenericContext<SneakerActions.STORE_SNEAKER, ISneakers[]>
  | GenericContext<SneakerActions.STORE_FAIL>;

export const useSneakerAsyncActions = () => {
  const { dispatch, actions } = useSneakerContext();
  const { getSneakers } = useProductService();

  const getSneakersAction = async () => {
    try {
      const response = await getSneakers();

      saveSneakersLocalStorage(response);

      dispatch({ type: actions.STORE_SNEAKER, payload: response });

      return response;
    } catch (err) {
      dispatch({ type: actions.STORE_FAIL });

      throw err;
    }
  };

  return { getSneakersAction };
};
