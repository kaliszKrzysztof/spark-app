import React from 'react';
import { shallow } from 'enzyme';
import CircularProgress from '@material-ui/core/CircularProgress';
import Loader from '.';

const loaderProps = {
  classes: {
    root: 'root',
    progress: 'progress'
  }
};

describe('Loader component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loader {...loaderProps} />);
  });
  it('render component properly', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('render component properly with passed props', () => {
    const size = 100;
    wrapper = shallow(<Loader {...loaderProps} size={size} />);
    const circularProgress = wrapper.find(CircularProgress);
    expect(circularProgress.prop('size')).toEqual(size);
  });
});