/* eslint-disable complexity */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Close from '@mui/icons-material/Close';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Button from '../../lib/CustomButtons/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import adminStyle from 'styles/jss/nextjs-material-kit-pro/pages/adminStyle.js';
import TicketEntity from '../../../modules/ticket/TicketEntity';
import CustomInput from '../../lib/CustomInput/CustomInput';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { getError } from '../../forms/formUtils';
import { toast } from 'react-toastify';
import { validationSchema } from './TicketTableFormValidation';
import tableStyles from 'styles/jss/nextjs-material-kit-pro/components/tableStyle.js';
import ConfirmDialog from '../../lib/ConfirmDialog/ConfirmDialog';
import { saveTicketUseCase } from '../../../usecases';
import { Ticket } from '../../../modules/ticket/ticketType';
import { Checkbox, FormControl } from '@material-ui/core';
import Check from '@mui/icons-material/Check';
import Datetime from 'react-datetime';
import moment from 'moment';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(adminStyle);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useTableStyles = makeStyles(tableStyles);

interface Props {
  ticket: TicketEntity;
  deleteTicket: (uid: string) => Promise<void>;
}

const TicketTableLine: React.FC<Props> = ({ ticket, deleteTicket }) => {
  const { uid, label, date, place, quantity, price, numberTotalSell, isActive, description } =
    ticket;

  const [isEditMode, setIsEditMode] = useState(false);
  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
      uid,
      label,
      date,
      place,
      quantity,
      price,
      numberTotalSell,
      isActive,
      description,
    },
  };
  const classes = useStyles();
  const tableClasses = useTableStyles();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm<Ticket>(formOptions);

  const onSubmit: SubmitHandler<Ticket> = async (ticket: Ticket) => {
    saveTicketUseCase(ticket)
      .then(() => {
        setIsEditMode(false);
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };
  return (
    <TableRow key={uid}>
      <TableCell className={tableClasses.tableCell} colSpan={9}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex' }}>
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
            <FormControl fullWidth style={{ margin: 'auto' }}>
              <Datetime
                initialValue={new Date(date)}
                onChange={date => {
                  setValue(
                    'date',
                    typeof date !== 'string' && moment.isMoment(date)
                      ? parseInt(moment(date).format('x'))
                      : 0
                  );
                }}
                inputProps={{
                  placeholder: 'Date et heure',
                  disabled: !isEditMode,
                }}
              />
            </FormControl>
            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'place')}
              inputProps={{
                ...register('place'),
                placeholder: 'Lieu',
                type: 'text',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('place', e?.target?.value),
                defaultValue: place,
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
            <div style={{ width: '100%' }}>
              <Controller
                render={({ field }) => (
                  <Checkbox
                    disabled={!isEditMode}
                    defaultChecked={isActive}
                    checked={getValues('isActive')}
                    checkedIcon={<Check />}
                    icon={<Close />}
                    {...register('isActive')}
                    {...field}
                  />
                )}
                name="isActive"
                control={control}
              />
            </div>
            <CustomInput
              formControlProps={{
                fullWidth: true,
              }}
              error={getError(errors, 'description')}
              inputProps={{
                ...register('description'),
                placeholder: 'Description',
                type: 'text',
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('description', e?.target?.value),
                defaultValue: description,
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
                  dialogTitle="Voulez-vous vraiment supprimer cet ticket ?"
                  dialogMessage={label}
                  onConfirm={() => deleteTicket(uid)}
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

export default TicketTableLine;
