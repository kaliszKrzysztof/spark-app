import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Chip } from '@material-ui/core';
import SelectedFilters from '.';

const selectedElementsProps = {
  selectedElements: {
    shape: [],
    colors: []
  },
  toggleFilter: () => null,
  classes: {
    paper: 'paper',
    filters: 'filters',
    chip: 'chip',
    icon: 'icon'
  }
};

describe('SelectedFilters component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SelectedFilters {...selectedElementsProps} />);
  });
  it('render component properly with minimal props', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('render selected filters', () => {
    const filterKey = 'shape';
    const selectedElements = ['1', '2', '3'];
    wrapper = shallow(<SelectedFilters {...selectedElementsProps} selectedElements={{ [filterKey]: selectedElements }} />);
    const displayedFilters = wrapper.find(`#${filterKey}`);
    expect(displayedFilters.length).toEqual(1);
    expect(displayedFilters.find(Chip).length).toEqual(selectedElements.length);
  });
  it('should call toggleFilter when chip delete icon is clicked', () => {
    const filterKey = 'shape';
    const selectedElements = ['1', '2', '3'];
    const toggleFilter = sinon.spy();
    wrapper = mount(<SelectedFilters {...selectedElementsProps} toggleFilter={toggleFilter} selectedElements={{ [filterKey]: selectedElements }} />);
    const chip = wrapper.find(`#${filterKey}`).find(Chip).first();
    const deleteIcon = chip.find('SvgIcon');
    deleteIcon.simulate('click');
    expect(toggleFilter.calledOnceWith(filterKey, selectedElements[0], false)).toEqual(true);
  });
});