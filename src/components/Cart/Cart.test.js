import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';

const cartProps = {
  open: false,
  classes: {
    root: 'root',
    button: 'button'
  },
  openCart: () => null,
  closeCart: () => null
};

describe('Cart component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Cart {...cartProps} />);
  });
  it('render component properly', () => {
    expect(wrapper.length).toEqual(1);
  });
});