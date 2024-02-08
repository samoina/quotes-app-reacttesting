import PreviousButton from './PreviousButton'
import {describe, expect, it, vi } from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'


//create a mock function
const onClick = vi.fn();

describe('Previous Button', () => { 
  it('should render properly', ()=> {
    render(<PreviousButton onClick={onClick} text={''}/>)
  });

  it('should invoke "onClick" when clicked once', ()=>{
    //the button must render!
    render(<PreviousButton onClick={onClick} text={' '}/>)
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1)
  });

 })