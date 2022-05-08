import { templateIds, addressEmails } from './emailConfig';
import { sendMail } from './SendinblueService';
import { Sender } from './type';

export const sendContactUsEmail = async ({
  sender,
  message,
}: {
  sender: Sender;
  message: string;
}): Promise<boolean> => {
  return sendMail({
    sender: sender,
    receiver: {
      email: addressEmails.CREW_FMR,
    },
    message,
    templateId: templateIds.contactUs,
  });
};
