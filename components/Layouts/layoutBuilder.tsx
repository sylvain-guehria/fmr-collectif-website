import React from 'react';
import LoggedInLayout from './LoggedInLayout';
import AdminLayout from './AdminLayout';
import PublicLayout from './PublicLayout';
import { ForbiddenAddress } from './ForbiddenAddress';
import UserEntity from '../../modules/user/UserEntity';
import { EmptyLayout } from './EmptyLayout';

export const buildGuestOrLoggedInLayout =
  () =>
  (user: UserEntity, isUserLoading: boolean): React.FC => {
    if (!user || isUserLoading) return EmptyLayout;
    return isUserLoading ? LoggedInLayout : PublicLayout;
  };

export const buildGuestOnlyLayout =
  (publicLayout = PublicLayout) =>
  (user: UserEntity, isUserLoading: boolean): React.FC => {
    if (!user || isUserLoading) return EmptyLayout;
    if (isUserLoading) {
      throw new ForbiddenAddress('/home');
    }
    return publicLayout;
  };

export const buildLoggedInOnlyLayout =
  (privateLayout = LoggedInLayout) =>
  (user: UserEntity, isUserLoading: boolean): React.FC => {
    if (!user || isUserLoading) return EmptyLayout;
    if (!isUserLoading) {
      throw new ForbiddenAddress('/home');
    }
    return privateLayout;
  };

export const buildAdminOnlyLayout =
  (layout = AdminLayout) =>
  (user: UserEntity, isUserLoading: boolean): React.FC => {
    if (isUserLoading) return EmptyLayout;
    if (!user || (user && !user.isAdmin())) {
      throw new ForbiddenAddress('/home');
    }
    return layout;
  };
