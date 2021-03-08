/* eslint-disable consistent-return */
import { ISneakers } from '../../models/Interfaces/ISneakers';

export const saveSneakersLocalStorage = (data: ISneakers[]) => {
  window.localStorage.setItem('@trustly-store:sneakers', JSON.stringify(data));
};

export const getSneakerLocalStorage = () => {
  const sneakersString = window.localStorage.getItem('@trustly-store:sneakers');

  if (sneakersString) {
    const sneakers: ISneakers[] = JSON.parse(sneakersString);

    return sneakers;
  }

  return null;
};

export const storeSneaker = (data: ISneakers) => {
  localStorage.setItem('@trustly-store:sneaker', JSON.stringify(data));
};

export const getStoreSneaker = () => {
  const sneakerString = window.localStorage.getItem('@trustly-store:sneaker');

  if (sneakerString) {
    const sneaker: ISneakers = JSON.parse(sneakerString);

    return sneaker;
  }

  return null;
};
