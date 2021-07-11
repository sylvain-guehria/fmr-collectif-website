import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Edit from '@material-ui/icons/Edit';
import Button from '../../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle.js';
// import { formatTimeStamp } from '../../../utils/utils';
import ItemEntity from '../../../modules/item/ItemEntity';
import CustomInput from '../../lib/CustomInput/CustomInput';
import { InputAdornment } from '@material-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getError } from '../../forms/formUtils';
// import { useToasts } from 'react-toast-notifications';
import { validationSchema } from './ItemTableFormValidation';
import { Item } from '../../../modules/item/itemType';
import Image from 'next/image';

const useStyles = makeStyles(adminStyle);

interface Props {
  item: ItemEntity;
}

interface ItemFormType {
  label: string;
  size: string;
  photoLink: string;
  color: string;
  quantity: number;
  price: number;
  numberTotalSell: number;
  lastBuyDate: number;
}

const ItemTableLine: React.FC<Props> = ({ item }) => {
  const { uid, label, size, photoLink, color, quantity, price, numberTotalSell, lastBuyDate } =
    item;

  // eslint-disable-next-line no-console
  console.log({ item });
  const [isEditMode, setIsEditMode] = useState(false);
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

  const onSubmit: SubmitHandler<ItemFormType> = async ({
    label,
    size,
    photoLink,
    color,
    quantity,
    price,
    numberTotalSell,
    lastBuyDate,
  }: ItemFormType) => {
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
    <TableRow key={uid}>
      <TableCell style={{ width: '100%' }} align="right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', border: 'solid red 1px' }}>
            <Image
              src={photoLink || '/img/defaultItem.jpg'}
              alt="Picture of the author"
              width="100%"
              height="100%"
            />

            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'label')}
              inputProps={{
                ...register('label'),
                placeholder: 'label',
                type: 'text',
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit className={classes.inputIconsColor} />
                  </InputAdornment>
                ) : null,
              }}
            />
            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'size')}
              inputProps={{
                ...register('size'),
                placeholder: 'size',
                type: 'text',
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit className={classes.inputIconsColor} />
                  </InputAdornment>
                ) : null,
              }}
            />

            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'color')}
              inputProps={{
                ...register('color'),
                placeholder: 'color',
                type: 'text',
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit className={classes.inputIconsColor} />
                  </InputAdornment>
                ) : null,
              }}
            />

            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'price')}
              inputProps={{
                ...register('price'),
                placeholder: 'price',
                type: 'number',
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit className={classes.inputIconsColor} />
                  </InputAdornment>
                ) : null,
              }}
            />

            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'quantity')}
              inputProps={{
                ...register('quantity'),
                placeholder: 'quantity',
                type: 'number',
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit className={classes.inputIconsColor} />
                  </InputAdornment>
                ) : null,
              }}
            />

            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'numberTotalSell')}
              inputProps={{
                ...register('numberTotalSell'),
                placeholder: 'numberTotalSell',
                type: 'number',
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit className={classes.inputIconsColor} />
                  </InputAdornment>
                ) : null,
              }}
            />
            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'lastBuyDate')}
              inputProps={{
                ...register('lastBuyDate'),
                placeholder: 'lastBuyDate',
                type: 'date',
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit className={classes.inputIconsColor} />
                  </InputAdornment>
                ) : null,
              }}
            />

            <Tooltip
              key={1}
              id="edit"
              title="Modifier produit"
              placement="left"
              classes={{ tooltip: classes.tooltip }}>
              <Button
                link
                className={classes.actionButton}
                onClick={() => setIsEditMode(!isEditMode)}>
                <Edit />
              </Button>
            </Tooltip>
          </div>
        </form>
      </TableCell>
    </TableRow>
  );
};

export default ItemTableLine;
