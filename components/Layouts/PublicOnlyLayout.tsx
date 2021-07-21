import React from 'react';
import PropTypes from 'prop-types';

const DynamicPublicLayout: React.FC = ({ children }): React.ReactElement => {
  return <>{children}</>;
};
DynamicPublicLayout.propTypes = {
  children: PropTypes.node,
};

export default DynamicPublicLayout;
