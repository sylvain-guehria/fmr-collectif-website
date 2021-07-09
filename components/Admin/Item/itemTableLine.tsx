import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Close from '@material-ui/icons/Close';
import Button from '../../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle.js';
import { formatTimeStamp } from '../../../utils/utils';
import ItemEntity from '../../../modules/item/ItemEntity';

const useStyles = makeStyles(adminStyle);

interface Props {
  item: ItemEntity;
}

const itemTableLine: React.FC<Props> = ({ item }) => {
  const { uid, label, size, photoLink, color, quantity, price, numberTotalSell, lastBuyDate } =
    item;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
      <TableRow key={uid}>
        <TableCell />

        <TableCell>
          <div className={classes.imgContainer} key={1}>
            <img src={photoLink || '/img/defaultAvatar.png'} alt="..." className={classes.img} />
          </div>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {`${label}`}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {size}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {color}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {price}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {quantity}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {numberTotalSell}
            </a>
          </span>
        </TableCell>

        <TableCell>
          <span key={1}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {lastBuyDate ? formatTimeStamp(lastBuyDate) : '-'}
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

export default itemTableLine;
