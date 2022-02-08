import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer
    .create(<Home scrollY={0} setScroll={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
