// Test helpers import
import { renderComponent, expect } from '../test_helper';

// Components import
import App from '../../src/components/app';

// Test cases
describe('App', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('contains a header', () => {
		expect(component.find('.header')).to.exist;
	})
});
