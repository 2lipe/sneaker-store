import axios from 'axios';
import { baseConfig } from '../../config/baseConfig';

export const api = axios.create({
  baseURL: baseConfig.baseApiUrl,
});
