import React from 'react';
import renderer from 'react-test-renderer';
import City from './City';

test('renders correctly', () => {
  const tree = renderer.create(<City />).toJSON();
  expect(tree).toMatchSnapshot();
});
