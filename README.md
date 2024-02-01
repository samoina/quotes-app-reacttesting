# Frontend Mentor - FAQ accordion card solution

This is a mini-app designed to show different quotes depending on the button clicked. I am using it to practice with Vitest and React Testing Library.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Click 'Previous' to show the quote before
- Click 'Next' to show the quote after

### Screenshot

![])

### Links

- Solution URL: [Github Link](https://github.com/samoina/quotes-app-reacttesting)
- Live Site URL: [Netlify Link]()

## My process

I created a simple app to include 3 components - the Quotes, the PreviousButton and the NextButton. These are the components I intend to carry out unit testing on, and then the integration test for the app component that houses all three of these.

### Built with

- React + Typescript

### What I learned

Unit testing refers to testing for a single functional component. Integration testing on the other hand refers to testing how the components work together - how do they interact together?

I will be using co-location for test files so that they're easier to recognize. this means, naming the test file in the same way as the file to be tested, with the only difference been the inclusion of `test` in the former.

#### Testing the Quote component

Since the `Quote` component only displays the quote, a good place to start with testing would be to make sure that it renders. To do this, I need to:

- import the component that I am testing,
- import the necessary functions from vitest, describe and it, both of which take two arguments, a description as well as a callack function
- import the necessary utilities (in this case, screen and render) from the React Testing Library

Once this is done, I get to create the test case definition using `describe` to group related tests together, in this case, all the tests related to the Quote component.
within, i also use the `it` function for individual test cases. this function takes a description of the test case as the first argument and a function containing the test logic as the second argument.

In the test logic, i then render the `Quote` component with the prop set to a string. But where exactly does it render? Calling the render() function creates a virtual DOM using JSDOM. this behaves like a real browser environment, but entirely in memory.

The `screen` utility allows us to interact with the rendered utput, get specific elements or text content.

Well I then use screen.debug() to output the state of the component to the console.

Once the test completes, the RTL cleans up the virtual DOM so that each test case starts on a clean slate.

#### Testing PreviousButton and NextButton

To test for these two similar compnents, here's what I am looking to do:

- that it renders properly. as a general guide, it is best to render first then debug what's visible on screen
- that the button in it can be clicked, and do something and yet this is passed on as a prop.

The latter is a bit confusing because the onclick functionality will not be implemented in this specific test case. This is why the solution lies in calling a placeholder function that throws an error when called. For this same reason, text is passed on as a placeholder.

- to do this, i first need to select the button element. This is made possible by the screen object's functions and queries. the selected element can then be used for user interactions.

types of queries include: `getBy` `queryBy`

Most common is `getByText` and `getByRole` - the latter is used to get elements by their label attributes.

To get accessible roles, use `screen.getByRole('');`. this will show all the selectable roles. I then reate a variable and assign it to the element i have grabbed from the component.

the next thing is to check for a click on the component using RTL's fireEvent. 

### Continued development

### Useful resources

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
