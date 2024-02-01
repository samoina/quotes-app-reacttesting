import PreviousButton from './PreviousButton'
import {describe, expect, it, vi } from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'

//create a mock function
const onClick = vi.fn();

describe('Previous Button', ()=> {

  it('should render properly', ()=> {
    render(<PreviousButton onClick={onClick} text={' '}/>)
    screen.debug();
  })


  it('should call "onClick" when button is clicked', ()=> {

    //Arrange
    render(<PreviousButton onClick={onClick} text={''} />)
    const button = screen.getByRole('button');

    //Act
    fireEvent.click(button)

    //Assert
    expect(onClick).toBeCalledTimes(1)

    screen.debug()
  })
})
