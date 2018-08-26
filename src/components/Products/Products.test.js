import React from 'react';
import { shallow } from 'enzyme';
import Products from '.';
import Loader from '../../containers/Loader';
import ProductCard from '../../containers/Products/ProductCard';

const productsProps = {
  products: [],
  isFetching: false,
  classes: {
    emptyList: 'emptyList'
  }
};

describe('Products component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products {...productsProps} />);
  });
  it('render component properly', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('render Loader component when isFetching prop is set to true', () => {
    wrapper = shallow(<Products {...productsProps} isFetching />);
    expect(wrapper.find(Loader).length).toEqual(1);
  });
  it('render empty list message when product list is empty', () => {
    wrapper = shallow(<Products {...productsProps} />);
    expect(wrapper.find(`.${productsProps.classes.emptyList}`).length).toEqual(1);
  });
  it('render products when product list is not empty', () => {
    const products = [{ id: '1' }, { id: '2' }, { id: '3' }];
    wrapper = shallow(<Products {...productsProps} products={products} />);
    expect(wrapper.find(ProductCard).length).toEqual(products.length);
  });
});