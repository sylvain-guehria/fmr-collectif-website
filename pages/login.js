import React from 'react';
import LoginComponent from '../components/Auth/login';
import { buildGuestOnlyLayout } from '../components/Layouts/layoutBuilder';

const LoginPage = ()=> {
  return <LoginComponent />;
};

LoginPage.getLayout = buildGuestOnlyLayout();
export default LoginPage;