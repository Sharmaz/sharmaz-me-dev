import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

const intersectionObserverMock = () => ({
  observe: () => null,
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />);
    const heading = screen.getByText('I’m Ivan Robles,');
    expect(heading).toBeInTheDocument();
  });
});
