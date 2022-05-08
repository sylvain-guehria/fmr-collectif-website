// import SibApiV3Sdk from 'sib-api-v3-sdk';
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.SMTPApi();

const sendinblue = sendSmtpEmail => {
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (_data) {
      return true;
    },
    function (_error) {
      return false;
    }
  );
};

export default sendinblue;
