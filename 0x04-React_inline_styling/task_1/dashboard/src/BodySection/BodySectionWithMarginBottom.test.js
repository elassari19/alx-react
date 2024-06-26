import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';


describe('BodySectionWithMarginBottom', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	it(`should checks that component correctly renders a <BodySection /> component`, () => {
		const wrapper = shallow(<BodySectionWithMarginBottom title="test"/>);
		expect(wrapper.find(BodySection).exists()).toBe(true);
	})

	it(`should checks that props are passed correctly to child component`, () => {
		const wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test children</p></BodySectionWithMarginBottom>)
		expect(wrapper.find(BodySection).props().title).toBe('test title');
		// p tag is child component in this instance
		expect(wrapper.find('p').text()).toBe('test children');
	})
})