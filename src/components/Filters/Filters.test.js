import React from 'react';
import { shallow } from 'enzyme';
import Filters from '.';
import FiltersItemContainer from '../../containers/Filters/FiltersItem';

const filtersProps = {
  availableFilters: {},
  classes: {
    root: 'root',
    paper: 'button'
  }
};

describe('Filters component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Filters {...filtersProps} />);
  });
  it('render component properly', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('render 0 filters item when passed 0', () => {
    expect(wrapper.find(FiltersItemContainer).length).toEqual(0);
  });
  it('render 2 filters item when passed 2', () => {
    wrapper = shallow(<Filters {...filtersProps} availableFilters={{ shape: {}, colors: {} }} />);
    expect(wrapper.find(FiltersItemContainer).length).toEqual(2);
  });
});