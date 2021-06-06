
export const getError = (errors: any, inputName: string) => {
    return errors[inputName]?.message;
};
