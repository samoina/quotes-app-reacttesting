import { render, fireEvent, screen } from '@testing-library/react'
import {describe, it, expect} from 'vitest'
import App from '../App'

describe('App', ()=> {
  it('should render the App component', ()=> {
    render(<App />)
    screen.debug();
  })

  it('should show the first quote on loading', ()=> {
 const mockQuotes=['First string', 'Second string', 'Third string'];

 render(<App quote={mockQuotes[0]} />)
    })
})