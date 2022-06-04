import axios from 'axios';
import logger from '../modules/logger/logger';
import { SendEmailArgs } from './type';

export const sendMail = async ({
  sender,
  receiver,
  message,
  templateId,
}: SendEmailArgs): Promise<boolean> => {
  try {
    const request = await axios
      .post('/email/send', {
        sender,
        receiver,
        message,
        templateId,
      })
      .then(res => {
        return res;
      });
    return request.status === 200 ? true : false;
  } catch (err) {
    logger.error(err);
    return false;
  }
};
