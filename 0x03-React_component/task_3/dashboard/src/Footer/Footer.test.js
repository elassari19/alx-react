import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';


// shallow render footer component
describe('<Footer />', () => {
	it('Tests that Footer shouldrenders without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should contains the text "Copyright"', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text()).toContain('Copyright');
	})
});