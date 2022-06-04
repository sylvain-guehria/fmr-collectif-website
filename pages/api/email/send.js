import logger from '../../../modules/logger/logger';
import sendinblue from '../../../sendinblue';

export default async (req, res) => {
    const { sender, receiver, message, templateId } = req.body;
    let sendSmtpEmail = {
        to: [{
            email: receiver.email
        }],
        templateId: templateId,
        params: {
            firstName: sender.firstName,
            lastName: sender.lastName,
            email: sender.email,
            message: message
        }
    };
    try {
        if (req.method === 'POST') {
            await sendinblue(sendSmtpEmail);
        }
        res.status(200).end();
    } catch (e) {
        logger.error(e);
        res.status(400).end();
    }
};