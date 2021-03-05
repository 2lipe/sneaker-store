/* eslint-disable consistent-return */
import { ISneakers } from '../../models/Interfaces/ISneakers';

export const saveSneakersLocalStorage = (data: ISneakers[]) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('@trustly-store:sneakers', JSON.stringify(data));
  }
};

export const getSneakerLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const sneakersString = window.localStorage.getItem('@trustly-store:sneakers');

    if (sneakersString) {
      const sneakers: ISneakers[] = JSON.parse(sneakersString);

      return sneakers;
    }

    return null;
  }
};
