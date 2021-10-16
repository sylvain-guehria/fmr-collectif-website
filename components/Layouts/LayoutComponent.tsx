import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { ForbiddenAddress } from './ForbiddenAddress';
import { isInBrowser } from '../../utils/utils';
import { useRouter } from 'next/router';
import { EmptyLayout } from './EmptyLayout';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  children: React.ReactNode;
  layoutProps: React.ReactElement;
}

const NoLayout: React.FC = ({ children }): React.ReactElement => <>{children}</>;

const LayoutComponent: React.FC<Props> = ({
  component,
  children,
  layoutProps,
}): React.ReactElement => {
  const auth = useAuth();
  const AuthUser = auth?.user;
  const isUserLoading = auth?.isUserLoading;

  const router = useRouter();
  try {
    const Layout = component.getLayout ? component.getLayout(AuthUser, isUserLoading) : NoLayout;
    return <Layout {...layoutProps}>{children}</Layout>;
  } catch (e) {
    if (e instanceof ForbiddenAddress) {
      if (isInBrowser()) {
        router.push(e.redirectAddress);
      }
      return <EmptyLayout />;
    } else {
      throw e;
    }
  }
};

export default LayoutComponent;
