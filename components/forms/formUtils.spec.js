import {
  getError
} from './formUtils';

it('#getError', () => {
  const errors = {
    firstName: {
      message: 'firstName error'
    }
  };
  expect(getError(errors, 'firstName')).toBe('firstName error');
});
