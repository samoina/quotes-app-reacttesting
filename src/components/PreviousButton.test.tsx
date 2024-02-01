import PreviousButton from './PreviousButton'
import {describe, expect, it } from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'

describe('Previous Button', ()=> {
  it('should render properly', ()=> {
    render(<PreviousButton onClick={function (): void {
      throw new Error('Function not implemented.')
    } } text={''} />)

    const button = screen.getByRole('button');

    fireEvent.click(button)

    expect(onClick).toBeCalledTimes(1)
  })
})
