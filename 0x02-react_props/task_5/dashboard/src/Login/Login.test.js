import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

describe('<Login />', () => {
	it('should renders without crashing', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should that the component renders 2 <input> and 2 <label> tags', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input').length).toBe(2);
		expect(wrapper.find('label').length).toBe(2);
	})
});