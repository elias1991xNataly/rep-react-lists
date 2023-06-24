import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
  let props;
  let shallowSpinner;
  let renderedSpinner;
  let mountedSpinner;

  const shallowTestComponent = () => {
    if (!shallowSpinner) {
      shallowSpinner = shallow(<Spinner {...props} />);
    }
    return shallowSpinner;
  };

  const renderTestComponent = () => {
    if (!renderedSpinner) {
      renderedSpinner = render(<Spinner {...props} />);
    }
    return renderedSpinner;
  };

  const mountTestComponent = () => {
    if (!mountedSpinner) {
      mountedSpinner = mount(<Spinner {...props} />);
    }
    return mountedSpinner;
  };  

  beforeEach(() => {
    props = {};
    shallowSpinner = undefined;
    renderedSpinner = undefined;
    mountedSpinner = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
