import React from "react";
import { shallow } from "enzyme";
import Login from './Login';

describe('Login component tests', () => {
  it ('should renders without crashing', () => {
    shallow(<Login />);
  });

  it('should renders 2 input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('should renders 2 label tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });
  
});