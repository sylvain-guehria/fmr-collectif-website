import React, { useEffect } from 'react';
import Router from 'next/router';

const _error = () => {

  useEffect(() => {
    Router.push('/home');
  });

  return <div />;
};

export default _error;
