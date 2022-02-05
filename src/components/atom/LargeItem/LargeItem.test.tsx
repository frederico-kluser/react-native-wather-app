import React from 'react';
import renderer from 'react-test-renderer';
import LargeItem from './LargeItem';

test('renders correctly', () => {
  const tree = renderer.create(<LargeItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
