import React from 'react';
import firebaseUserRepository from '../../modules/user/firebaseUserRepository';
import UserEntity from '../../modules/user/UserEntity';
import { arrayOf } from 'prop-types';
import UsersComponent from '../../components/Admin/users';
import { buildAdminOnlyLayout } from '../../components/Layouts/layoutBuilder';

const userRepository = new firebaseUserRepository();

const UserPage = ({ users = [] })=> {
  return <UsersComponent users={users} />;
};

UserPage.propTypes = {
  users: arrayOf(UserEntity)
};

export const getStaticProps = async () => {
  const users = await userRepository.getAll();
  return { props: { users: JSON.parse(JSON.stringify(users)) } };
};

UserPage.getLayout = buildAdminOnlyLayout();
export default UserPage;
