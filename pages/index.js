import React, { useEffect } from 'react';
import Router from 'next/router';

const Index = () => {

  useEffect(() => {
    Router.push('/presentation');
  });

  return <div />;
};

export default Index;