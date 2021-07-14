import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Edit from '@material-ui/icons/Edit';
import SaveAlt from '@material-ui/icons/SaveAlt';
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
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';

const useStyles = makeStyles(adminStyle);
const useTableStyles = makeStyles(tableStyles);

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
  lastBuyDate?: number;
}

const ItemTableLine: React.FC<Props> = ({ item }) => {
  const { uid, label, size, photoLink, color, quantity, price, numberTotalSell } = item;

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
    },
  };
  const classes = useStyles();
  const tableClasses = useTableStyles();
  // const { addToast } = useToasts();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ItemFormType>(formOptions);

  const editItem = async (item: Item): Promise<void> => {
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
  }: ItemFormType) => {
    await editItem({
      label,
      size,
      photoLink,
      color,
      quantity,
      price,
      numberTotalSell,
    });
    // .catch((error: Error) => {
    //   addToast(error.message, { appearance: 'error', autoDismiss: true });
    // });
  };

  return (
    <TableRow key={uid}>
      <TableCell className={tableClasses.tableCell} colSpan={8}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <div style={{ display: 'flex' }}>
            {isEditMode ? (
              <CustomInput
                formControlProps={{
                  fullWidth: true,
                }}
                error={getError(errors, 'photoLink')}
                inputProps={{
                  ...register('photoLink'),
                  placeholder: 'photoLink',
                  type: 'text',
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue('photoLink', e?.target?.value),
                  defaultValue: photoLink,
                  disabled: !isEditMode,
                  startAdornment: isEditMode ? (
                    <InputAdornment position="start">
                      <Edit fontSize="small" />
                    </InputAdornment>
                  ) : null,
                }}
              />
            ) : (
              <div style={{ width: '100%' }}>
                <Image
                  src={photoLink || '/img/defaultItem.jpg'}
                  alt="Picture of the author"
                  width="100%"
                  height="100%"
                />
              </div>
            )}

            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'label')}
              inputProps={{
                ...register('label'),
                placeholder: 'label',
                type: 'text',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('label', e?.target?.value),
                defaultValue: label,
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit fontSize="small" />
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
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('size', e?.target?.value),
                defaultValue: size,
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit fontSize="small" />
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
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('color', e?.target?.value),
                defaultValue: color,
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit fontSize="small" />
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
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('price', Number(e?.target?.value)),
                defaultValue: price,
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit fontSize="small" />
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
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('quantity', Number(e?.target?.value)),
                defaultValue: quantity,
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit fontSize="small" />
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
                placeholder: 'vendu',
                type: 'number',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('numberTotalSell', Number(e?.target?.value)),
                defaultValue: numberTotalSell,
                disabled: !isEditMode,
                startAdornment: isEditMode ? (
                  <InputAdornment position="start">
                    <Edit fontSize="small" />
                  </InputAdornment>
                ) : null,
              }}
            />
            {isEditMode && (
              <Tooltip
                key={1}
                id="edit"
                title="Sauvegarder"
                placement="left"
                classes={{ tooltip: classes.tooltip }}>
                <Button link className={classes.actionButton} type="submit">
                  <SaveAlt />
                </Button>
              </Tooltip>
            )}
          </div>
        </form>
      </TableCell>
      <Tooltip
        key={1}
        id="edit"
        title="Modifier produit"
        placement="left"
        classes={{ tooltip: classes.tooltip }}>
        <Button link className={classes.actionButton} onClick={() => setIsEditMode(!isEditMode)}>
          <Edit />
        </Button>
      </Tooltip>
    </TableRow>
  );
};

export default ItemTableLine;
