import {
  title,
  description,
  mrAuto,
  mlAuto
} from 'styles/jss/nextjs-material-kit-pro';
import customSelectStyle from 'styles/jss/nextjs-material-kit-pro/customSelectStyle';

const contactStyle = {
  title,
  mrAuto,
  mlAuto,
  ...customSelectStyle,
  description: {
    ...description,
    marginBottom: '70px'
  },
  textCenter: {
    textAlign: 'center!important'
  },
  selectUnderlineRoot: {
    '& > div': {
      marginTop: '13px'
    }
  },
  aboutUs: {
    padding: '80px 0px'
  }
};

export default contactStyle;
