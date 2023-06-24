import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ImprovedMovieList from './ImprovedMovieList';

describe('ImprovedMovieList', () => {
  let props;
  let shallowImprovedMovieList;
  let renderedImprovedMovieList;
  let mountedImprovedMovieList;

  const shallowTestComponent = () => {
    if (!shallowImprovedMovieList) {
      shallowImprovedMovieList = shallow(<ImprovedMovieList {...props} />);
    }
    return shallowImprovedMovieList;
  };

  const renderTestComponent = () => {
    if (!renderedImprovedMovieList) {
      renderedImprovedMovieList = render(<ImprovedMovieList {...props} />);
    }
    return renderedImprovedMovieList;
  };

  const mountTestComponent = () => {
    if (!mountedImprovedMovieList) {
      mountedImprovedMovieList = mount(<ImprovedMovieList {...props} />);
    }
    return mountedImprovedMovieList;
  };  

  beforeEach(() => {
    props = {};
    shallowImprovedMovieList = undefined;
    renderedImprovedMovieList = undefined;
    mountedImprovedMovieList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
