import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export default function GridContainer(props) {
  const { children, className, padding, ...rest } = props;
  const styles = {
    grid: {
      marginRight: '-15px',
      marginLeft: '-15px',
      width: 'auto',
      padding: padding
    }
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ''
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  justify: PropTypes.string,
  spacing: PropTypes.number,
  padding: PropTypes.string
};
