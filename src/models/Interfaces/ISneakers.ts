export interface ISneakers {
  color: string;
  currency: string;
  description: string;
  id: string;
  maxresURL: string;
  price: string;
  thumbnailURL: string;
}

export interface IResult<T> {
  results: Array<T>;
}
