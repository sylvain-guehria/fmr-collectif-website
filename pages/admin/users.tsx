import React from 'react';
import firebaseUserRepository from '../../modules/user/firebaseUserRepository';
import UserEntity from '../../modules/user/UserEntity';
import UsersComponent from '../../components/Admin/users';
import { buildAdminOnlyLayout } from '../../components/Layouts/layoutBuilder';

const userRepository = new firebaseUserRepository();

interface Props {
  users: UserEntity[];
}
interface staticProps {
  props: Props;
}

const UserPage: React.FC<Props> = ({ users = [] }) => {
  return <UsersComponent users={users} />;
};

export const getStaticProps = async (): Promise<staticProps> => {
  const users = await userRepository.getAll();
  return { props: { users: JSON.parse(JSON.stringify(users)) } };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
UserPage.getLayout = buildAdminOnlyLayout();
export default UserPage;
