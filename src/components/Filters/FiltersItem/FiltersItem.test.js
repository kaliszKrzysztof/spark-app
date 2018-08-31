import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { MenuItem, Checkbox } from '@material-ui/core';
import FiltersItem from '.';

const filtersItemProps = {
  id: 'id',
  elements: [],
  selectedElements: [],
  name: 'name',
  onChangeFilter: () => null,
  classes: {
    button: 'button',
    checkboxRoot: 'checkboxRoot',
    checkboxChecked: 'checkboxChecked'
  }
};

describe('FiltersItem component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FiltersItem {...filtersItemProps} />);
  });
  it('render component properly with minimal props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(MenuItem).length).toEqual(0);
  });
  it('render 3 unchecked menu items when passed 3 elements and 0 selected elements', () => {
    const elements = ['1', '2', '3'];
    wrapper = shallow(<FiltersItem {...filtersItemProps} elements={elements} />);
    const menuItems = wrapper.find(MenuItem);
    expect(menuItems.length).toEqual(elements.length);
  });
  it('render 3 checked menu items when passed 3 elements and 3 selected elements', () => {
    const elements = ['1', '2', '3'];
    const selectedElements = ['1', '2', '3'];
    wrapper = shallow(<FiltersItem {...filtersItemProps} elements={elements} />);
    let menuItems = wrapper.find(MenuItem);
    menuItems.forEach((item) => {
      const checkbox = item.find(Checkbox);
      expect(checkbox.prop('checked')).toEqual(false);
    });
    wrapper.setProps({ selectedElements });
    menuItems = wrapper.find(MenuItem);
    menuItems.forEach((item) => {
      const checkbox = item.find(Checkbox);
      expect(checkbox.prop('checked')).toEqual(true);
    });
  });
  it('set menu item to checked on click', () => {
    const onChangeFilter = sinon.spy();
    const elements = ['1', '2', '3'];
    wrapper = shallow(<FiltersItem {...filtersItemProps} onChangeFilter={onChangeFilter} elements={elements} />);
    const firstMenuItem = wrapper.find(MenuItem).first();
    firstMenuItem.simulate('click');
    expect(onChangeFilter.called).toEqual(true);
  });
  it('set checked menu item to unchecked on click', () => {
    const onChangeFilter = sinon.spy();
    const elements = ['1', '2', '3'];
    const selectedElements = ['1'];
    wrapper = shallow(<FiltersItem {...filtersItemProps} onChangeFilter={onChangeFilter} elements={elements} selectedElements={selectedElements} />);
    const firstMenuItem = wrapper.find(MenuItem).first();
    firstMenuItem.simulate('click');
    expect(onChangeFilter.called).toEqual(true);
  });
});