import React from 'react';
import { string } from 'prop-types';
import Image from 'next/image';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// core components
import {
  infoColor,
  whiteColor,
  title
} from 'styles/jss/nextjs-material-kit-pro.js';

const useStyles = makeStyles({
  progress: {
    color: infoColor[0],
    width: '6rem !important',
    height: '6rem !important'
  },
  wrapperDiv: {
    margin: '100px auto',
    padding: '0px',
    maxWidth: '360px',
    textAlign: 'center',
    position: 'relative',
    zIndex: '9999',
    top: '0'
  },
  iconWrapper: {
    display: 'block'
  },
  title: {
    ...title,
    color: whiteColor
  }
});

PageChange.propTypes = {
  path: string
};

export default function PageChange(_props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper} style={{display: 'flex'}}>
        <Image src='/img/fmr-logo.webp' alt='fmr logo' width={225} height={178} />
          <CircularProgress className={classes.progress} />
        </div>
      </div>
    </div>
  );
}
