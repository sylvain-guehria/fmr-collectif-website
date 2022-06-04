import React, { useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Parallax from 'components/lib/Parallax/Parallax';
import GridContainer from 'components/lib/Grid/GridContainer';
import GridItem from 'components/lib/Grid/GridItem';
import Card from 'components/lib/Card/Card';
import CardBody from 'components/lib/Card/CardBody';
import UserTable from './User/UserTable';
import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle';
import UserEntity from '../../modules/user/UserEntity';
import { User } from 'modules/user/userType';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(shoppingCartStyle);

interface Props {
  users: UserEntity[];
}

const Users: React.FC<Props> = ({ users = [] }) => {
  const userEntities: UserEntity[] = Array.from(users || [], (user: User) => new UserEntity(user));
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <Header
        brand="Accueil Fmr"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: 'info',
        }}
      />

      <Parallax image="/img/examples/bg2.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(classes.mlAuto, classes.mrAuto, classes.textCenter)}>
              <h2 className={classes.title}>Administration des utilisateurs</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            {!userEntities ? (
              <div> Loading </div>
            ) : (
              <CardBody plain>
                <h3 className={classes.cardTitle}>Utilisateurs</h3>
                {userEntities && userEntities.length && <UserTable users={userEntities} />}
              </CardBody>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Users;
