import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import App from '../App';
import userDataMock from './__mocks__/userDataMock';

const intersectionObserverMock = () => ({
  observe: () => null,
});

beforeEach(() => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
});

describe('test app compoment', () => {
  test('should loading', () => {
    global.fetch = jest.fn().mockImplementation(() => new Promise(
      // eslint-disable-next-line no-promise-executor-return
      (resolve) => resolve({ json: () => userDataMock, ok: true }),
    ));
    render(<App />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
  test('render data', async () => {
    global.fetch = jest.fn().mockImplementation(() => new Promise(
      // eslint-disable-next-line no-promise-executor-return
      (resolve) => resolve({ json: () => userDataMock, ok: true }),
    ));
    render(<App />);
    await waitFor(() => screen.getByText(/I’m Admin/));
    await expect(screen.getByText(/I’m Admin/)).toBeInTheDocument();
  });
  test('failing fetch data', () => {
    // eslint-disable-next-line new-cap
    global.fetch = jest.fn().mockImplementation(() => new Promise.reject(new Error('something bad happened')));
    render(<App />);
    const renderError = screen.getByText(/Error/);
    expect(renderError).toBeInTheDocument();
  });
});
