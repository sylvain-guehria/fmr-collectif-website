import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from 'styles/jss/nextjs-material-kit-pro/components/buttonStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RegularButton: React.FC<ButtonProps> = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className,
    onClick,
    type,
    ...rest
  } = props;

  const classes = useStyles();
  const btnClasses = classNames({
    [classes.button]: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [classes[size ? size : '']]: size,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [classes[color ? color : '']]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className ? className : '']: className,
  });
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Button {...rest} ref={ref} className={btnClasses} onClick={onClick} type={type}>
      {children}
    </Button>
  );
});

export type ButtonProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose'
    | 'white'
    | 'twitter'
    | 'facebook'
    | 'google'
    | 'linkedin'
    | 'pinterest'
    | 'youtube'
    | 'tumblr'
    | 'github'
    | 'behance'
    | 'dribbble'
    | 'reddit'
    | 'instagram'
    | 'transparent';

  size?: 'sm' | 'lg';
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  fileButton?: boolean;
  children?: [JSX.Element] | JSX.Element | string | string[];
  className?: string;
  onClick?: unknown;
  type?: string;
  target?: string;
  href?: string;
  style?: Record<string, unknown>;
};

RegularButton.displayName = 'RegularButton';
export default RegularButton;
