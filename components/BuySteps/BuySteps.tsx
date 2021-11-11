import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Home from '@material-ui/icons/Home';
import Visibility from '@material-ui/icons/Visibility';
import NavPills from 'components/lib/NavPills/NavPills.js';
import Clearfix from 'components/lib/Clearfix/Clearfix.js';

import AdresseStep from './AdresseStep';
import ResumeStep from './ResumeStep';
import PaiementStep from './PaiementStep';

import profilePageStyle from 'styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

const BuySteps: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: 'Adresse',
                  tabIcon: Home,
                  tabContent: <AdresseStep />,
                },
                {
                  tabButton: 'Resumé',
                  tabIcon: Visibility,
                  tabContent: <ResumeStep />,
                },
                {
                  tabButton: 'Paiement',
                  tabIcon: CheckCircle,
                  tabContent: <PaiementStep />,
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );
};
export default BuySteps;
