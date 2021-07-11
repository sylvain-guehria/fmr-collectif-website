import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Edit from '@material-ui/icons/Edit';
import Button from '../../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle.js';
import { formatTimeStamp } from '../../../utils/utils';
import ItemEntity from '../../../modules/item/ItemEntity';
import CustomInput from '../../lib/CustomInput/CustomInput';
import { InputAdornment } from '@material-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getError } from '../../forms/formUtils';
// import { useToasts } from 'react-toast-notifications';
import { validationSchema } from './ItemTableFormValidation';
import { Item } from '../../../modules/item/itemType';

const useStyles = makeStyles(adminStyle);

interface Props {
  item: ItemEntity;
}

interface ItemFormType {
  label: string;
}

const ItemTableLine: React.FC<Props> = ({ item }) => {
  const { uid, label, size, photoLink, color, quantity, price, numberTotalSell, lastBuyDate } =
    item;

  // eslint-disable-next-line no-console
  console.log({ item });
  // const [isEditMode, setIsEditMode] = useState(false);
  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
    },
  };
  const classes = useStyles();
  // const { addToast } = useToasts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemFormType>(formOptions);

  const editItem = (item: Item): void => {
    // eslint-disable-next-line no-console
    console.log(item);
  };

  const onSubmit: SubmitHandler<ItemFormType> = async ({ label }: ItemFormType) => {
    await editItem({
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
      lastBuyDate,
    });
    // .catch((error: Error) => {
    //   addToast(error.message, { appearance: 'error', autoDismiss: true });
    // });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TableRow key={uid}>
        <TableCell />

        <TableCell>
          <div className={classes.imgContainer} key={1}>
            <img src={photoLink || '/img/defaultAvatar.png'} alt="..." className={classes.img} />
          </div>
        </TableCell>

        <TableCell>
          <CustomInput
            formControlProps={{
              fullWidth: true,
            }}
            error={getError(errors, 'label')}
            inputProps={{
              ...register('label'),
              placeholder: 'label',
              type: 'text',
              startAdornment: (
                <InputAdornment position="start">
                  <Edit className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
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
            title="Modifier produit"
            placement="left"
            classes={{ tooltip: classes.tooltip }}>
            <Button link className={classes.actionButton}>
              <Edit />
            </Button>
          </Tooltip>
        </TableCell>

        <TableCell />
      </TableRow>
    </form>
  );
};

export default ItemTableLine;
