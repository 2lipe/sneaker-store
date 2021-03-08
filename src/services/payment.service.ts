/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { STORE_PATH } from '../routes/store.routes';

export const usePayWithMyBankService = () => {
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();

  const addPanelListener = () => {
    // @ts-ignore
    // eslint-disable-next-line consistent-return
    PayWithMyBank.addPanelListener((command, event) => {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          history.push(STORE_PATH.Confirmation);
        } else {
          enqueueSnackbar('Payment fail!');
        }
        return false;
      }
    });
  };

  const paymentMethodConection = (paymentMethod: string, productPrice: string) => {
    if (paymentMethod === 'online-payment') {
      try {
        // @ts-ignore
        PayWithMyBank.establish({
          accessId: 'D61EC9BAF0BB369B9438',
          merchantId: '1004314986',
          metadata: { demo: 'enabled' },
          currency: 'USD',
          paymentType: 'Deferred',
          amount: productPrice,
          description: 'felipe.svfx@gmail.com',
          merchantReference: '340d8a71-d661-4f3a-9e92-96202f001675',
          returnUrl: '#success',
          cancelUrl: '#cancel',
        });
      } catch (error) {
        enqueueSnackbar('Can not stabilish connection', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('Select valid payment method', { variant: 'error' });
    }
  };

  return { addPanelListener, paymentMethodConection };
};
