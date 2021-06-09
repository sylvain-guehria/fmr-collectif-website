export const getError = (errors: any, inputName: string): string => {
  return errors[inputName]?.message;
};
