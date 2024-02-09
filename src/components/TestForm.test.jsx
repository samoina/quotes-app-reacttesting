//to test the form, we need to fill in the username, PW and submit the form. to do this we need to render the form, query the document and get those nodes
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Testform from './TestForm';

describe('Test Form ', () => {
	it('should render properly', () => {
		render(<Testform />);
	});

	it('should fill in the user details', () => {
		render(<Testform />);
		const usernameField = rootNode.querySelector('.username-field');
		const passwordField = rootNode.querySelector('.password-field');
		const submitButton = rootNode.querySelector('.btn');
	});
});
