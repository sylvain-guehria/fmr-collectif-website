import React from 'react';
import LoggedInLayout from './LoggedInLayout';
import AdminLayout from './AdminLayout';
import PublicOnlyLayout from './PublicOnlyLayout';
import GuestOrLoggedInLayout from './GuestOrLoggedInLayout';
import { ForbiddenAddress } from './ForbiddenAddress';
import UserEntity from '../../modules/user/UserEntity';
import { EmptyLayout } from './EmptyLayout';

export const buildGuestOrLoggedInLayout =
  () =>
  (_user: UserEntity, isUserLoading: boolean): React.FC => {
    if (isUserLoading) return EmptyLayout;
    return GuestOrLoggedInLayout;
  };

export const buildGuestOnlyLayout =
  (publicLayout = PublicOnlyLayout) =>
  (user: UserEntity, isUserLoading: boolean): React.FC => {
    if (isUserLoading) return EmptyLayout;
    if (user) {
      throw new ForbiddenAddress('/home');
    }
    return publicLayout;
  };

export const buildLoggedInOnlyLayout =
  (privateLayout = LoggedInLayout) =>
  (user: UserEntity, isUserLoading: boolean): React.FC => {
    if (isUserLoading) return EmptyLayout;
    if (!user) {
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
