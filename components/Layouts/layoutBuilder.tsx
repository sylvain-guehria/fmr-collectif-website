import { ForbiddenAddress } from './ForbiddenAddress';
import UserEntity from '../../modules/user/UserEntity';
import { EmptyLayout } from './EmptyLayout';

import dynamic from 'next/dynamic';
import { NextComponentType } from 'next';
const GuestOrLoggedInLayout = dynamic(() => import('./GuestOrLoggedInLayout'));
const PublicOnlyLayout = dynamic(() => import('./PublicOnlyLayout'));
const LoggedInLayout = dynamic(() => import('./LoggedInLayout'));
const AdminLayout = dynamic(() => import('./AdminLayout'));

export const buildGuestOrLoggedInLayout =
  () =>
  (_user: UserEntity, isUserLoading: boolean): NextComponentType<Record<string, unknown>> => {
    if (isUserLoading) return EmptyLayout;
    return GuestOrLoggedInLayout;
  };

export const buildGuestOnlyLayout =
  (publicLayout = PublicOnlyLayout) =>
  (user: UserEntity, isUserLoading: boolean): NextComponentType<Record<string, unknown>> => {
    if (isUserLoading) return EmptyLayout;
    if (user) {
      throw new ForbiddenAddress('/home');
    }
    return publicLayout;
  };

export const buildLoggedInOnlyLayout =
  (privateLayout = LoggedInLayout) =>
  (user: UserEntity, isUserLoading: boolean): NextComponentType<Record<string, unknown>> => {
    if (isUserLoading) return EmptyLayout;
    if (!user) {
      throw new ForbiddenAddress('/home');
    }
    return privateLayout;
  };

export const buildAdminOnlyLayout =
  (layout = AdminLayout) =>
  (user: UserEntity, isUserLoading: boolean): NextComponentType<Record<string, unknown>> => {
    if (isUserLoading) return EmptyLayout;
    if (!user || (user && !user.isAdmin())) {
      throw new ForbiddenAddress('/home');
    }
    return layout;
  };
