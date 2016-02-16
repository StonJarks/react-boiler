import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import Hello from '../../src/components/Hello/Hello';

const {renderIntoDocument, findRenderedDOMComponentWithTag} = ReactTestUtils;
describe('Hello', () => {
	it('renders a Hello World headline', () => {
		const component = renderIntoDocument(
			<Hello name="World" />
		);
		const headlineComponent = findRenderedDOMComponentWithTag(component, 'h1');

		expect(headlineComponent.textContent).to.equal("Hello World");
	});
});