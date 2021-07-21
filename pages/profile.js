import React from 'react';

import ProfileComponent from '../components/LoggedIn/Profile';
import { buildLoggedInOnlyLayout } from '../components/Layouts/layoutBuilder';

const ProfilePage = ()=> {
  return <ProfileComponent />;
};

ProfilePage.getLayout = buildLoggedInOnlyLayout();
export default ProfilePage;
