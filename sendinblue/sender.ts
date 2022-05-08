import { templateIds, addressEmails } from './emailConfig';
import { sendMail } from './SendinblueService';
import { Sender } from './type';

export const sendContactUsEmail = ({
  sender,
  message,
}: {
  sender: Sender;
  message: string;
}): void => {
  sendMail({
    sender: sender,
    receiver: {
      email: addressEmails.CREW_FMR,
    },
    message,
    templateId: templateIds.contactUs,
  });
};
