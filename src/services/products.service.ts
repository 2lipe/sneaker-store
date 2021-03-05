import { api } from '../utils/helpers/api-helper';
import { IResult, ISneakers } from '../models/Interfaces/ISneakers';

export const useProductService = () => {
  const getSneakers = async () => {
    try {
      const { data } = await api.get<IResult<ISneakers>>('sneakers/index.json');

      return data.results;
    } catch (err) {
      throw new Error(err);
    }
  };

  return { getSneakers };
};
