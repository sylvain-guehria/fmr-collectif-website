/* eslint-disable complexity */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Close from '@material-ui/icons/Close';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Button from '../../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle.js';
import ItemEntity from '../../../modules/item/ItemEntity';
import CustomInput from '../../lib/CustomInput/CustomInput';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getError } from '../../forms/formUtils';
import { useToasts } from 'react-toast-notifications';
import { validationSchema } from './ItemTableFormValidation';
import Image from 'next/image';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import ConfirmDialog from '../../lib/ConfirmDialog/ConfirmDialog';
import ImageUpload from '../../lib/CustomUpload/ImageUpload';
import { saveItemUseCase } from '../../../usecases';
import { Item, genderEnum } from '../../../modules/item/itemType';

const useStyles = makeStyles(adminStyle);
const useTableStyles = makeStyles(tableStyles);

interface Props {
  item: ItemEntity;
  deleteItem: (uid: string) => Promise<void>;
}

const ItemTableLine: React.FC<Props> = ({ item, deleteItem }) => {
  const { uid, label, size, photoLink, color, quantity, price, numberTotalSell, gender } = item;
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [currentImageDisplayedLink, setCurrentImageDisplayedLink] = useState<string>(photoLink);
  const originalPhotoLink: string = photoLink;

  const [isEditMode, setIsEditMode] = useState(false);
  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
      uid,
      label,
      gender,
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
  const { addToast } = useToasts();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Item>(formOptions);

  register('photoLink');

  const onSubmit: SubmitHandler<Item> = async (item: Item) => {
    // eslint-disable-next-line no-console
    console.log('save item :************', item);
    saveItemUseCase(item, currentFile)
      .then(updatedPhotoLink => {
        setIsEditMode(false);
        setCurrentImageDisplayedLink(updatedPhotoLink);
      })
      .catch((error: Error) => {
        addToast(error.message, { appearance: 'error', autoDismiss: true });
      });
  };

  const handleFileChange = (file: File): void => {
    if (!file) {
      setValue('photoLink', originalPhotoLink);
    } else {
      setValue('photoLink', file.name);
    }
    setCurrentFile(file);
  };

  return (
    <TableRow key={uid}>
      <TableCell className={tableClasses.tableCell} colSpan={9}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <div style={{ display: 'flex' }}>
            {isEditMode ? (
              <>
                <ImageUpload
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: 'danger' }}
                  callBackOnFileChange={handleFileChange}
                />
                <p style={{ color: 'red' }}>{getError(errors, 'photoLink')}</p>
              </>
            ) : (
              <div style={{ width: '100%' }}>
                <Image
                  src={currentImageDisplayedLink || '/img/defaultItem.jpg'}
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
                placeholder: 'Label',
                type: 'text',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('label', e?.target?.value),
                defaultValue: label,
                disabled: !isEditMode,
              }}
            />
            <FormControl fullWidth className={classes.selectFormControl}>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                error={!!getError(errors, 'gender')}
                inputProps={{
                  id: 'gender-select',
                  ...register('gender'),
                  placeholder: 'Gender',
                  type: 'text',
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue('gender', e?.target?.value),
                  defaultValue: gender,
                  disabled: !isEditMode,
                }}>
                {Object.values(genderEnum).map(gender => (
                  <MenuItem key={gender} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </Select>
              <p style={{ color: 'red' }}>{getError(errors, 'gender')}</p>
            </FormControl>
            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'size')}
              inputProps={{
                ...register('size'),
                placeholder: 'Taille',
                type: 'text',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('size', e?.target?.value),
                defaultValue: size,
                disabled: !isEditMode,
              }}
            />

            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'color')}
              inputProps={{
                ...register('color'),
                placeholder: 'Couleur',
                type: 'text',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('color', e?.target?.value),
                defaultValue: color,
                disabled: !isEditMode,
              }}
            />

            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'price')}
              inputProps={{
                ...register('price'),
                placeholder: 'Prix',
                type: 'number',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('price', Number(e?.target?.value)),
                defaultValue: price,
                disabled: !isEditMode,
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
              }}
            />
            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'numberTotalSell')}
              inputProps={{
                ...register('numberTotalSell'),
                placeholder: 'Vendu',
                type: 'number',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('numberTotalSell', Number(e?.target?.value)),
                defaultValue: numberTotalSell,
                disabled: !isEditMode,
              }}
            />
            {isEditMode && (
              <div>
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
                <ConfirmDialog
                  dialogTitle="Voulez-vous vraiment supprimer cet item ?"
                  dialogMessage={label}
                  onConfirm={() => deleteItem(uid)}
                  childButton={
                    <Tooltip
                      id="delete"
                      title={'Supprimer produit'}
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}>
                      <Button link className={classes.actionButton}>
                        <Delete color={'error'} />
                      </Button>
                    </Tooltip>
                  }
                />
              </div>
            )}
          </div>
        </form>
      </TableCell>
      <Tooltip
        id="edit"
        title={isEditMode ? 'Annuler' : 'Modifier produit'}
        placement="left"
        classes={{ tooltip: classes.tooltip }}>
        <Button link className={classes.actionButton} onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? <Close /> : <Edit />}
        </Button>
      </Tooltip>
    </TableRow>
  );
};

export default ItemTableLine;
