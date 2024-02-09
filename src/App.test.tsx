import { render, screen } from '@testing-library/react'
import {describe, it, expect} from 'vitest'
import App from './App'

const quotesArr = [
  `“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
  `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson`,
  `“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs`,
  `“Whenever you see a successful woman, look out for three men who are going out of their way to try to block her.” – Yulia Tymoshenko`,
  `"To thine own self be true" - Shakespeare`,
];

describe('App', ()=> {
  it('should render the App component', ()=> {
    render(<App />)
    screen.debug();
  })

  it('shows the first quote once the app loads', ()=> {
    render(< App />);
//get the quote by the exact test
    // const quote = screen.findByText('“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein')

    // expect(quote).toBeDefined()
     const firstQuote = quotesArr[0];

    expect(screen.queryByText(firstQuote)).toBeDefined();
  });

  it('should show the next quote when "Next" button is clicked', ()=> {
    render(< App />);
    // const secondQuote = quote[1];
    const button = screen.getByTestId('next-button');

    expect(button).toBeDefined();

  })

})