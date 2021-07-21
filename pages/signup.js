import React from 'react';
import SignUpComponent from '../components/Auth/signup';
import { buildGuestOnlyLayout } from '../components/Layouts/layoutBuilder';

const SignUpPage = ()=> {
  return <SignUpComponent />;
};

SignUpPage.getLayout = buildGuestOnlyLayout();
export default SignUpPage;