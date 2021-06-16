import {
  getError
} from './formUtils';

describe('#getError', () => {
  const errors = {
    firstName: {
      message: 'firstName error'
    }
  };
  expect(getError(errors, 'firstName')).toBe('firstName error');
});
