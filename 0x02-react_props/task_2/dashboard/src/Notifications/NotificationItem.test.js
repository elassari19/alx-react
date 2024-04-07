import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';


// shallow render NotificationItem component
describe('NotificationItem', () => {
	it('should renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should Passes dumby `type` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="urgent" />);
		expect(wrapper.html()).toContain('urgent');
	})

	it('should Passes dumby `value` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem value="This is a success notification" />);
		expect(wrapper.find('li').text()).toBe('This is a success notification');
	})

	it('should Passes dumby `html` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
	})
})