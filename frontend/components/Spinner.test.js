// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import StyledSpinner from './Spinner'

test('sanity', () => {
  expect(true).not.toBe(false)
})

// test('renders the spinner component when it is turned on', () => { 
//   render(<StyledSpinner/>);
//   const testSpinner = screen.getByDisplayValue("Please wait...")
//   expect(testSpinner).toHaveTextContent("Please wait...");
//   expect(testSpinner).toBeInTheDocument()
//   expect(testSpinner).not.toBeNull()
// });
