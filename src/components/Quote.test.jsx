import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Quote from './Quote';

describe('Quote', () => {
	it('should render properly', () => {
		render(<Quote quote="Have a splendid day" />);
		screen.debug();
	});
});
