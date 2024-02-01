import { describe, it, vi, expect } from 'vitest';
import { fireEvent, render, screen} from '@testing-library/react';
import NextButton from './NextButton';

const onClick = vi.fn();

describe('Next Button', () => {
	it('should render properly', () => {
		render(<NextButton onClick={onClick} text={' '}/>);

		screen.debug();
	});

	it('should invoke "onClick" when the button is clicked', ()=> {
		//Arrange
		render(<NextButton onClick={onClick} text={' '}/>);
		const button = screen.getByRole('button');

		//Act
		fireEvent.click(button);

		//Assert
		expect(onClick).toBeCalledTimes(1);


	})
});
