import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @mui/icons-material

// core components
import styles from 'styles/jss/nextjs-material-kit-pro/components/cardBodyStyle';

const useStyles = makeStyles(styles);

export default function CardBody(props) {
  const {
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color,
    ...rest
  } = props;
  const classes = useStyles();
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  plain: PropTypes.bool,
  formHorizontal: PropTypes.bool,
  pricing: PropTypes.bool,
  signup: PropTypes.bool,
  color: PropTypes.bool,
  children: PropTypes.node
};
