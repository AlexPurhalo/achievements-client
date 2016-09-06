import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {

});
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('shows a persons list', () => {
		expect(component.find('.persons-list')).to.exist
	});
