import { renderComponent, expect } from '../../test_helper';
import Persons from '../../../src/components/persons/index';

describe('Persons', () => {
	it('has the correct class', ()=> {
		const component = renderComponent(Persons);
		expect(component).to.have.class('persons-list')
	})
});
