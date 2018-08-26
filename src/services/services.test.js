import { capitalizeFirstLetter } from './helpers';

describe('capitalizeFirstLetter function', () => {
  it('expect to capitalize first letter in string', () => {
    const arg = 'string';
    expect(capitalizeFirstLetter(arg)).toEqual('String');
  });
  it('expect to return argument if it is not a string', () => {
    const arg = 1;
    expect(capitalizeFirstLetter(arg)).toEqual(arg);
  });
});