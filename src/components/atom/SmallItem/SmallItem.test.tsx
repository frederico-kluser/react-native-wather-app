import React from 'react';
import renderer from 'react-test-renderer';
import SmallItem from './SmallItem';

test('renders correctly', () => {
  const tree = renderer.create(<SmallItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
