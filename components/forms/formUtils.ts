import { FieldError } from 'react-hook-form';

export const getError = (errors: FormErrors, inputName: string): string | undefined => {
  if (!errors) return;
  return errors[inputName]?.message;
};

type FormErrors = {
  [key: string]: FieldError | undefined;
};
