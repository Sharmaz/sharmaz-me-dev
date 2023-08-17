import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

const mockedData = {
  id: '01',
  email: 'mock@ivanrobles.pro',
  role: 'admin',
  createdAt: '2023-08-11T20:36:02.000Z',
  profile: {
    id: '01',
    userId: '01',
    name: 'Admin',
    profilePic: 'https://no-photo.com',
    about: 'App Owner',
    blog: 'https://no-blog.com',
    github: 'https://no-github.com',
    linkedIn: 'https://no-linkedin.com/',
    twitter: 'https://no-twitter.com/',
  },
  jobs: [],
  projects: [],
};

const intersectionObserverMock = () => ({
  observe: () => null,
});

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockedData),
  }));
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

describe('App tests', () => {
  it('should loading', () => {
    render(<App />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
