import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

//renders Contact test
describe('Contact component renders', () => {
    
    // First Test
    it('renders', () => {
      render(<ContactForm />);
    });
  
    // Second Test
    it('renders', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
      })
    })
    
    
    it('renders', () => {
      const { getByTestId } = render(<ContactForm />)
      expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
     
    it('renders', () => {
      const { getByTestId } = render(<ContactForm />)
      expect(getByTestId('button')).toHaveTextContent('Submit')
    })