import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Favorite from '@material-ui/icons/Favorite';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/lib/Parallax/Parallax.js';
import GridContainer from 'components/lib/Grid/GridContainer.js';
import GridItem from 'components/lib/Grid/GridItem.js';
import Footer from 'components/Footer/Footer.js';
import Card from 'components/lib/Card/Card.js';
import CardBody from 'components/lib/Card/CardBody.js';
import UserTable from '../components/Admin/userTable';
import shoppingCartStyle from 'styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js';
import firebaseUserRepository from '../modules/user/firebaseUserRepository';
import { User as userType } from '../modules/user/userType';
import logger from '../modules/logger/logger';

const useStyles = makeStyles(shoppingCartStyle);

type UserPrpos = {
  user: userType;
};

const userRepository = new firebaseUserRepository();

const Users: React.FC<UserPrpos> = () => {
  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  useEffect(() => {
    const fetchUsers = async (): Promise<userType[]> => {
      return await userRepository.getAll();
    };

    (async () => {
      try {
        const users: userType[] = await fetchUsers();
        setUsers(users);
      } catch (e) {
        logger.error(`error when fetching users ${e}`);
      }
    })();
  }, []);

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
            <CardBody plain>
              <h3 className={classes.cardTitle}>Utilisateurs</h3>
              {users && <UserTable users={users} />}
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                    rel="noreferrer">
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/home?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                    rel="noreferrer">
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://blog.creative-tim.com/?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                    rel="noreferrer">
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                    rel="noreferrer">
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getDate()} , made with <Favorite className={classes.icon} />{' '}
              by Sylvain
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Users;
