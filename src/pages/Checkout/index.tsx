import React, { useCallback } from 'react';
import { Header } from '../../components/Header';

import avatarImage from '../../assets/img/avatar.png';

const Checkout = () => (
  <div>
    <Header back title="Checkout" avatar={avatarImage} />
    <h1>Teste</h1>
  </div>
);

export default Checkout;
