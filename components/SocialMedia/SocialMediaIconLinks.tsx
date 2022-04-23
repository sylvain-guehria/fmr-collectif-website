import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Button from '../lib/CustomButtons/Button';

import presentationStyle from 'styles/jss/nextjs-material-kit-pro/pages/presentationStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(presentationStyle);

const SocialMediaIconLinks: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.rightLinks}>
      <ul>
        <li>
          <Button href="#" target="_blank" color="twitter" justIcon simple>
            <i className="fab fa-twitter" />
          </Button>
        </li>
        <li>
          <Button href="#" target="_blank" color="facebook" justIcon simple>
            <i className="fab fa-facebook" />
          </Button>
        </li>
        <li>
          <Button href="#" target="_blank" color="dribbble" justIcon simple>
            <i className="fab fa-instagram" />
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default SocialMediaIconLinks;
