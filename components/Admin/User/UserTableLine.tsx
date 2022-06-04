import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Close from '@mui/icons-material/Close';
import Button from '../../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle';
import { formatTimeStamp } from '../../../utils/utils';
import UserEntity from '../../../modules/user/UserEntity';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(adminStyle);

interface Props {
  user: UserEntity;
}

const UserTableLine: React.FC<Props> = ({ user }) => {
  const {
    email,
    // pseudo,
    firstName,
    lastName,
    // language,
    phoneNumber,
    // role,
    creationDate,
    lastLogin,
    uid,
  } = user;

  const classes = useStyles();
  return (
    <>
      <TableRow key={uid}>
        <TableCell />

        <TableCell>
          <div className={classes.imgContainer} key={1}>
            <img src="/img/defaultAvatar.png" alt="..." />
          </div>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#" className={classes.tdNameAnchor}>
              {`${firstName} ${lastName}`}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#" className={classes.tdNameAnchor}>
              {email}
            </a>
            <br />
            <small className={classes.tdNameSmall}>{phoneNumber}</small>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#" className={classes.tdNameAnchor}>
              {formatTimeStamp(creationDate)}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#" className={classes.tdNameAnchor}>
              {formatTimeStamp(lastLogin)}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <Tooltip
            key={1}
            id="close1"
            title="Supprimer utilisateur"
            placement="left"
            classes={{ tooltip: classes.tooltip }}>
            <Button link className={classes.actionButton}>
              <Close />
            </Button>
          </Tooltip>
        </TableCell>

        <TableCell />
      </TableRow>
    </>
  );
};

export default UserTableLine;
