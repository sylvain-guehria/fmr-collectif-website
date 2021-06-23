import React, { useEffect } from 'react';
import Router from 'next/router';

const Index = () => {

  useEffect(() => {
    Router.push('/home');
  });

  return <div />;
};

export default Index;